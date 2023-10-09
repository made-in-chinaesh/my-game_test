import { userActions } from 'entities/user'
import { questionWindowActions } from 'widgets/question-window'
import { gameActions } from './game'

export const rootAction = {
	...userActions,
	...gameActions,
	...questionWindowActions,
}
