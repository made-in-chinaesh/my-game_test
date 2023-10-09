import { Card, CardBody } from '@chakra-ui/react'
import { IQuestion } from 'shared/api/types'

import cn from 'classnames'
import { useActions, useTypedSelector } from 'shared/hooks'
import styles from './styles.module.scss'

interface QuestionItemProps {
	className?: string
	item: IQuestion
}

export const QuestionItem = ({ className, item }: QuestionItemProps) => {
	const { answeredQuestions } = useTypedSelector(state => state.question)
	const { isStarted } = useTypedSelector(state => state.game)

	const { selectQuestion, openQuestionWindow } = useActions()

	const isAnswered = answeredQuestions.find(question => question.id === item.id)

	const onClick = () => {
		selectQuestion(item)
		openQuestionWindow()
	}

	return (
		<Card
			className={cn(
				styles.card,
				className,
				isAnswered
					? isAnswered?.isWrong
						? styles.isWrong
						: styles.isAnswered
					: '',
				{
					[styles.isStarted]: isStarted,
				}
			)}
			onClick={onClick}
		>
			<CardBody className={styles.text}>{item.value || 500}</CardBody>
		</Card>
	)
}
