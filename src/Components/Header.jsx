import { Link, NavLink } from 'react-router-dom'

export default function Header() {
	return (
		<nav>
			<Link to="/">
				<img
					className="logo"
					alt="logo of alpha pilates"
					src="https://imgur.com/cyiqM8q.png"
				/>
			</Link>
			<ul>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? 'is-active' : '')}
						to="/">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? 'is-active' : '')}
						to="/modelli">
						Prodotti
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? 'is-active' : '')}
						to="/about">
						Chi siamo
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
