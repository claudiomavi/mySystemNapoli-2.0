import { Link } from 'react-router-dom'
import { categoriesData } from '../../assets/datas/categoriesData'

export default function Categories() {
	return categoriesData.map((category) => (
		<div
			key={category.title}
			className="curso">
			<Link to={`/modelli/${category.title}`}>{category.title}</Link>
		</div>
	))
}
