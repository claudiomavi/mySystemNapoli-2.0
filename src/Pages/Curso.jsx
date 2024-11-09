import { useParams } from 'react-router-dom'
import { cursosData } from '../assets/datas/cursosData'

export default function Curso() {
	const { curso } = useParams()

	const renderCursos = cursosData.filter((individualCurso) => individualCurso.url === curso)

	return (
		<div className="curso">
			<h1>{renderCursos[0].title}</h1>
			<h2>{renderCursos[0].description}</h2>
			<a
				className="cta"
				target="_blank"
				href={`/${renderCursos[0].hotmartURL}`}>
				Comprar
			</a>
		</div>
	)
}
