import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IQuestion } from 'shared/api/types'

interface IQuestionWindowInitState {
	selectedQuestion: IQuestion | null
	answeredQuestions: IQuestion[]
	isOpen: boolean
}

const initialState: IQuestionWindowInitState = {
	selectedQuestion: null,
	answeredQuestions: [],
	isOpen: false,
}

const questionWindowSlice = createSlice({
	name: 'question_window',
	initialState,
	reducers: {
		selectQuestion: (state, action: PayloadAction<IQuestion>) => {
			state.selectedQuestion = action.payload
		},
		openQuestionWindow: state => {
			state.isOpen = true
		},
		closeQuestionWindow: state => {
			state.isOpen = false
		},
		addToAnsweredQuestion: (
			state,
			action: PayloadAction<{ item: IQuestion; isWrong: boolean }>
		) => {
			state.answeredQuestions.push({
				...action.payload.item,
				isWrong: action.payload.isWrong,
			})
		},
		clearAnsweredQuestions: state => {
			state.answeredQuestions = []
		},
	},
})

export const questionWindowReducer = questionWindowSlice.reducer
export const questionWindowActions = questionWindowSlice.actions
