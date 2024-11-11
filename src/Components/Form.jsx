export default function Form() {
	return (
		<form action="POST">
			<h3>Contattaci:</h3>
			<input
				type="text"
				name="azienda"
				id="azienda"
				placeholder="Nome dell'azienda"
				required
			/>
			<input
				type="email"
				name="email"
				id="email"
				placeholder="Email"
				required
			/>
			<input
				type="number"
				name="telefono"
				id="telefono"
				placeholder="Telefono"
				required
			/>
			<button>Invia</button>
		</form>
	)
}
