import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useActions } from 'shared/hooks'
import { IAuthFields } from './types'

import styles from './styles.module.scss'

export const Auth = () => {
	const { onClose } = useDisclosure()

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IAuthFields>()

	const { setUsername } = useActions()

	const onSubmit: SubmitHandler<IAuthFields> = data =>
		setUsername(data.username)

	return (
		<Modal isOpen={true} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Авторизация</ModalHeader>
				<ModalBody>
					<form
						action='submit'
						onSubmit={handleSubmit(onSubmit)}
						className={styles.form}
					>
						<FormControl isInvalid={!!errors.username}>
							<FormLabel>Username</FormLabel>
							<Input
								type='text'
								{...register('username', {
									required: true,
									minLength: {
										value: 3,
										message: 'Не менее 3 символов',
									},
									maxLength: {
										value: 10,
										message: 'Не более 10 символов',
									},
									pattern: {
										value: /^[a-zA-Z]+$/,
										message: 'Введите только латинские буквы',
									},
								})}
							/>
							<FormErrorMessage>
								{errors?.username && errors.username.message}
							</FormErrorMessage>
						</FormControl>
						<Button
							className={styles.btn}
							type='submit'
							onClick={handleSubmit(onSubmit)}
							colorScheme='telegram'
						>
							Sign in
						</Button>
					</form>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}
