import { Link } from 'react-router-dom'

export default function NotFoundPage() {
	return (
		<div className="not-found">
			<h1>404</h1>
			<h3>Pagina non trovata</h3>
			<Link to="/">Home</Link>
		</div>
	)
}
