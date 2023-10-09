import { useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { IQuestion } from 'shared/api/types'
import { useActions, useTypedSelector } from 'shared/hooks'

export const useQuestionWindow = () => {
	const toast = useToast()
	const [timer, setTimer] = useState(20)

	const { isOpen, selectedQuestion, answeredQuestions } = useTypedSelector(
		state => state.question
	)
	const {
		closeQuestionWindow,
		addWrongAnswer,
		addCorrectAnswer,
		addToAnsweredQuestion,
		clearAnsweredQuestions,
		stopGame,
	} = useActions()

	const updateWindow = () => {
		setTimer(20)
		closeQuestionWindow()
	}

	useEffect(() => {
		if (isOpen) {
			const interval = setInterval(() => {
				setTimer(prev => prev - 1)
				if (timer === 0) {
					clearInterval(interval)
				}
			}, 1000)

			return () => clearInterval(interval)
		}
	}, [timer, isOpen])

	useEffect(() => {
		if (timer === 0) {
			toast({
				title: 'Время истекло',
				status: 'info',
				position: 'top',
			})
			updateWindow()
			addWrongAnswer(selectedQuestion?.value || 0)
			addToAnsweredQuestion({
				item: selectedQuestion || ({} as IQuestion),
				isWrong: true,
			})
		}
	}, [timer])

	useEffect(() => {
		if (answeredQuestions.length > 24) {
			toast({
				title: 'Игра окончена',
				status: 'info',
				position: 'top',
			})
			stopGame()
			clearAnsweredQuestions()
		}
	}, [answeredQuestions])

	return {
		timer,
		selectedQuestion,
		isOpen,
		actions: {
			updateWindow,
			addCorrectAnswer,
			addWrongAnswer,
			addToAnsweredQuestion,
			toast,
		},
	}
}
