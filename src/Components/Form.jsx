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
			<div className="form__group field">
				<input
					type="text"
					name="azienda"
					className="form__field"
					placeholder="Nome dell'azienda"
					required=""
				/>
				<label
					htmlFor="name"
					className="form__label">
					Nome dell&apos;azienda
				</label>
			</div>
			<div className="form__group field">
				<input
					type="email"
					name="email"
					className="form__field"
					placeholder="Email"
					required=""
				/>
				<label
					htmlFor="email"
					className="form__label">
					Email
				</label>
			</div>
			<div className="form__group field">
				<input
					type="number"
					name="telefono"
					className="form__field"
					placeholder="Telefono"
					required=""
				/>
				<label
					htmlFor="telefono"
					className="form__label">
					Telefono
				</label>
			</div>
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
