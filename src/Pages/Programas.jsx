import { Link } from 'react-router-dom'
import { cursosData } from '../assets/datas/cursosData'

export default function Programas() {
	return (
		<div className="programas-wrap">
			<h2>Listado de todos mis cursos:</h2>
			<ul>
				{cursosData.map((curso) => (
					<li key={curso.url}>
						<Link to={`/programas/${curso.url}`}>{curso.url}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
