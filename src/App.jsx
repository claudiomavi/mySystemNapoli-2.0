import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Categories from './Pages/Product/Categories'
import Types from './Pages/Product/Types'
import Models from './Pages/Product/Models'
import Model from './Pages/Product/Model'
import NotFoundPage from './Pages/NotFoundPage'

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
					path="/modelli"
					element={<Categories />}
				/>
				<Route
					path="/modelli/:type"
					element={<Types />}
				/>
				<Route
					path="/modelli/:type/:models"
					element={<Models />}
				/>
				<Route
					path="/modelli/:type/:models/:model"
					element={<Model />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="*"
					element={<NotFoundPage />}
				/>
			</Routes>

			<Footer />
		</div>
	)
}
