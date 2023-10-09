import { createSlice } from '@reduxjs/toolkit'

interface IGameInitState {
	isStarted: boolean
}

const initialState: IGameInitState = {
	isStarted: false,
}

const gameSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		startGame: state => {
			state.isStarted = true
		},
		stopGame: state => {
			state.isStarted = false
		},
	},
})

export const gameReducer = gameSlice.reducer
export const gameActions = gameSlice.actions
