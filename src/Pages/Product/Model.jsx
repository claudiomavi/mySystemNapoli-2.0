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
			className="programas-wrap model">
			<h2>{renderModel[0].name}</h2>
			<p>{renderModel[0].description}</p>
			<div className="varianti">
				{renderModel[0].varianti &&
					renderModel[0].varianti.map((variante, index) => <h3 key={index}>{variante}</h3>)}
			</div>
			<img
				src={renderModel[0].image}
				alt={`image of ${renderModel[0].name}`}
			/>
			<div className="caratteristiche">
				{renderModel[0].scorrimento && (
					<p>
						<span className="bold">Scorrimento:</span> {renderModel[0].scorrimento}
					</p>
				)}
				{renderModel[0].avvolgimento && (
					<p>
						<span className="bold">Avvolgimento:</span> {renderModel[0].avvolgimento}
					</p>
				)}
				{renderModel[0].apertura && (
					<p>
						<span className="bold">Apertura:</span> {renderModel[0].apertura}
					</p>
				)}
				{renderModel[0].cassonetto && (
					<p>
						<span className="bold">Cassonetto:</span> {renderModel[0].cassonetto}
					</p>
				)}
				{renderModel[0].addatta && (
					<p>
						<span className="bold">Addatta per:</span> {renderModel[0].addatta}
					</p>
				)}
			</div>
		</div>
	)
}
