import { combineReducers } from '@reduxjs/toolkit'
import { userReducer } from 'entities/user'
import { api } from 'shared/api'
import { gameReducer } from './game'
import { questionWindowReducer } from 'widgets/question-window'

export const rootReducer = combineReducers({
	user: userReducer,
	game: gameReducer,
	question: questionWindowReducer,
	[api.reducerPath]: api.reducer,
})
