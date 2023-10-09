import { Route, Routes } from 'react-router-dom'
import GamePage from './game-page'
import MainPage from './main-page'

const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/game' element={<GamePage />} />
		</Routes>
	)
}

export default Routing
