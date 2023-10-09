import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IUserInitState {
	username: string | null
	correctAnswers: number
	wrongAnswers: number
	gameCount: number
	score: number
}

const initialState: IUserInitState = {
	username: localStorage.getItem('username') || null,
	correctAnswers: 0,
	wrongAnswers: 0,
	gameCount: 0,
	score: 2000,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload
			localStorage.setItem('username', action.payload)
		},
		addCorrectAnswer: (state, action: PayloadAction<number>) => {
			state.correctAnswers++
			state.score += action.payload
		},
		addWrongAnswer: (state, action: PayloadAction<number>) => {
			state.wrongAnswers++
			state.score -= action.payload
		},
		addGameCount: state => {
			state.gameCount++
		},
	},
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
