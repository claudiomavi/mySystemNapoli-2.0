import { useParams } from 'react-router-dom'
import { categoriesData } from '../../assets/datas/categoriesData'

export default function Model() {
	const { type, models, model } = useParams()

	let renderType = categoriesData.filter((individualType) => individualType.title === type)

	let renderModels = renderType[0].subcategories.filter(
		(individualModel) => individualModel.name === models
	)

	const renderModel = renderModels[0].models.filter((models) => models.name === model)

	return (
		<div
			key={renderModel[0].name}
			className="programas-wrap">
			<h2>{renderModel[0].name}</h2>
			<p>{renderModel[0].description}</p>
		</div>
	)
}
