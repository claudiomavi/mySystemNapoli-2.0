import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<main>
			<div className="main-wrap">
				<p>Il bello di sentirsi protetti.</p>
				<h1>SCOPRI IL PRODOTTO CHE FA PER TE!</h1>
				<div className="cta-buttons">
					<Link
						to="/modelli/zanzariere"
						className="cta">
						Zanzariere
					</Link>
					<Link
						to="/modelli/tapparelle"
						className="cta outline">
						Tapparelle
					</Link>
				</div>
			</div>
		</main>
	)
}
