import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Progress,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IQuestionFields } from './types'
import { useQuestionWindow } from './useQuestionWindow'

import { IQuestion } from 'shared/api/types'
import styles from './styles.module.scss'

export const QuestionWindow = () => {
	const {
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
	} = useQuestionWindow()

	const {
		register,
		handleSubmit,
		formState: { errors },
		resetField,
	} = useForm<IQuestionFields>()

	const onSubmit: SubmitHandler<IQuestionFields> = data => {
		if (data.answer === selectedQuestion?.answer) {
			toast({
				title: 'Правильный ответ!',
				status: 'success',
				position: 'top',
			})
			updateWindow()
			addCorrectAnswer(selectedQuestion?.value || 0)
			addToAnsweredQuestion({
				item: selectedQuestion || ({} as IQuestion),
				isWrong: false,
			})
		} else {
			toast({
				title: 'Неверный ответ!',
				status: 'error',
				position: 'top',
			})
			updateWindow()
			addWrongAnswer(selectedQuestion?.value || 0)
			addToAnsweredQuestion({
				item: selectedQuestion || ({} as IQuestion),
				isWrong: true,
			})
		}
		resetField('answer')
	}

	return (
		<Modal isOpen={isOpen} onClose={() => !isOpen}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					{selectedQuestion?.question}
					<Progress value={timer} max={20} size='xs' />
				</ModalHeader>
				<ModalBody>
					<form
						action='submit'
						onSubmit={handleSubmit(onSubmit)}
						className={styles.form}
					>
						<FormControl>
							<FormLabel>Ответ</FormLabel>
							<Input
								type='text'
								placeholder='Введите ответ'
								{...register('answer', {
									required: true,
									pattern: {
										value: /^[a-zA-Z]+$/,
										message: 'Введите только латинские буквы',
									},
								})}
							/>
							<FormErrorMessage>
								{errors?.answer && errors.answer.message}
							</FormErrorMessage>
						</FormControl>
						<Button
							colorScheme='teal'
							className={styles.btn}
							onClick={handleSubmit(onSubmit)}
						>
							Ответить
						</Button>
					</form>
				</ModalBody>
				<ModalFooter></ModalFooter>
			</ModalContent>
		</Modal>
	)
}
