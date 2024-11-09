import { Link, useParams } from 'react-router-dom'
import { categoriesData } from '../../assets/datas/categoriesData'

export default function Types() {
	const { type } = useParams()

	const renderCategory = categoriesData.filter(
		(individualCategory) => individualCategory.title === type
	)

	return (
		<div
			key={renderCategory[0].title}
			className="programas-wrap">
			<h2>{renderCategory[0].title}</h2>
			{renderCategory[0].subcategories.map((product) => (
				<div
					className="type"
					key={product.name}>
					<Link to={`/modelli/${renderCategory[0].title}/${product.name}`}>
						<img
							src={product.image}
							alt={product.name}
						/>
						{product.name}
					</Link>
				</div>
			))}
		</div>
	)
}
