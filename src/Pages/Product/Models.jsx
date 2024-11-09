import { Link, useParams } from 'react-router-dom'
import { categoriesData } from '../../assets/datas/categoriesData'

export default function Models() {
	const { type, models } = useParams()

	let renderType = categoriesData.filter((individualType) => individualType.title === type)

	const renderModels = renderType[0].subcategories.filter(
		(individualModel) => individualModel.name === models
	)

	return (
		<div
			key={renderModels[0].name}
			className="programas-wrap">
			<h2>{renderModels[0].name}</h2>
			<ul>
				{renderModels[0].models.map((model) => (
					<Link
						key={model.name}
						to={`/modelli/${renderType[0].title}/${renderModels[0].name}/${model.name}`}>
						{model.name}
					</Link>
				))}
			</ul>
		</div>
	)
}
