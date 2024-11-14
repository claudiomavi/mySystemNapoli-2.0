import { Link } from 'react-router-dom'
import { categoriesData } from '../../assets/datas/categoriesData'

export default function Categories() {
	return (
		<div className="categories-div">
			{categoriesData.map((category) => (
				<Link
					to={`/modelli/${category.title}`}
					key={category.title}>
					<div className="categories">
						<img
							src={category.image}
							alt={category.title}
						/>
						<p>{category.title}</p>
					</div>
				</Link>
			))}
		</div>
	)
}
