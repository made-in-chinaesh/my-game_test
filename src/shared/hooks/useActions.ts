import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { rootAction } from 'shared/store'

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(rootAction, dispatch)
}
