import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<main>
			<div className="main-wrap">
				<h1>Frase chula</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae temporibus ad fuga,
					obcaecati fugiat ipsum sed nostrum delectus deleniti ea.
				</p>
				<div className="cta-buttons">
					<Link
						to="/programas"
						className="cta">
						Ver Programas
					</Link>
					<Link
						to="/contacto"
						className="cta outline">
						Habla conmigo
					</Link>
				</div>
			</div>
		</main>
	)
}
