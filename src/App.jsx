import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import Programas from './Pages/Programas'
import About from './Pages/About'
import Curso from './Pages/Curso'

export default function App() {
	return (
		<div>
			<Header />

			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/programas"
					element={<Programas />}
				/>
				<Route
					path="/programas/:curso"
					element={<Curso />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
			</Routes>

			<Footer />
		</div>
	)
}
