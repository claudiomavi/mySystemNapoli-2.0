import { Link } from 'react-router-dom'
import Form from '../Components/Form'

export default function Home() {
	return (
		<div>
			<main
				className="main"
				style={{
					backgroundImage: `url("https://imgur.com/3jjiEre.jpg")`,
				}}>
				<div className="main-wrap">
					<p>Il bello di sentirsi protetti.</p>
					<h1>SCOPRI IL PRODOTTO CHE FA PER TE!</h1>
					<div className="cta-buttons">
						<Link
							to="/modelli/zanzariere"
							className="button">
							Zanzariere
							<svg
								className="icon"
								viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
									clipRule="evenodd"></path>
							</svg>
						</Link>
						<Link
							to="/modelli/tapparelle"
							className="button outline">
							Tapparelle
							<svg
								className="icon"
								viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
									clipRule="evenodd"></path>
							</svg>
						</Link>
						{/* <Link
							to="/modelli/zanzariere"
							className="cta">
							Zanzariere
						</Link>
						<Link
							to="/modelli/tapparelle"
							className="cta outline">
							Tapparelle
						</Link> */}
					</div>
				</div>
			</main>
			<Form />
		</div>
	)
}
