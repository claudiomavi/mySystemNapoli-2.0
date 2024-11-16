export default function Form() {
	return (
		<form
			name="contatti"
			method="POST"
			data-netlify="true">
			<input
				type="hidden"
				name="form-name"
				value="contatti"
			/>
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
			<button>
				<div className="svg-wrapper-1">
					<div className="svg-wrapper">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24">
							<path
								fill="none"
								d="M0 0h24v24H0z"></path>
							<path
								className="svg-color"
								fill="currentColor"
								d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
						</svg>
					</div>
				</div>
				<span>Invia</span>
			</button>
		</form>
	)
}
