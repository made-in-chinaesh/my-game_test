import { UserStatistics } from 'entities/user'
import { Navigate } from 'react-router-dom'
import { useTypedSelector } from 'shared/hooks'

const MainPage = () => {
	const { isStarted } = useTypedSelector(state => state.game)

	if (isStarted) return <Navigate to='/game' />

	return <UserStatistics />
}

export default MainPage