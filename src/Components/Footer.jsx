export default function Footer() {
	return (
		<footer>
			<h3>© My System {new Date().getFullYear()}</h3>
			<ul>
				<li>
					<a
						href="#"
						target="_blank">
						<i className="fa-brands fa-instagram"></i>
					</a>
				</li>
				<li>
					<a
						href="#"
						target="_blank">
						<i className="fa-brands fa-tiktok"></i>
					</a>
				</li>
			</ul>
		</footer>
	)
}
