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
			<div className="upper-container">
				<div className="upper-left">
					<img
						src={renderModel[0].image}
						alt={`image of ${renderModel[0].name}`}
					/>
				</div>
				<div className="varianti">
					{renderModel[0].varianti &&
						renderModel[0].varianti.map((variante, index) => <h3 key={index}>{variante}</h3>)}
				</div>
			</div>
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
				{renderModel[0].rete && (
					<p>
						<span className="bold">Rete:</span> {renderModel[0].rete}
					</p>
				)}
				{renderModel[0].fornita && (
					<p>
						<span className="bold">Viene fornita:</span> {renderModel[0].fornita}
					</p>
				)}
				{renderModel[0].line && (
					<p>
						<span className="bold">Color-Line:</span> {renderModel[0].line}
					</p>
				)}
				{renderModel[0].bottoncino && (
					<p>
						<span className="bold">Bottoncino:</span> {renderModel[0].bottoncino}
					</p>
				)}
				{renderModel[0].opzione && (
					<p>
						<span className="bold">Opzionale:</span> {renderModel[0].opzione}
					</p>
				)}
				{renderModel[0].attacco && (
					<p>
						<span className="bold">Tipo di attacco:</span> {renderModel[0].attacco}
					</p>
				)}
				{renderModel[0].vento && (
					<p>
						<span className="bold">Sistema di tenuta al vento:</span> {renderModel[0].vento}
					</p>
				)}
				{renderModel[0].tipologia && (
					<p>
						<span className="bold">Tipologia:</span> {renderModel[0].tipologia}
					</p>
				)}
				{renderModel[0].note && (
					<div className="inline">
						<span className="bold">Note: </span>
						<p
							dangerouslySetInnerHTML={{
								__html: renderModel[0].note,
							}}></p>
					</div>
				)}
			</div>
		</div>
	)
}
