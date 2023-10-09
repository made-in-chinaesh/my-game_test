import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from '@chakra-ui/react'
import { useActions, useTypedSelector } from 'shared/hooks'

import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

export const UserStatistics = () => {
	const navigate = useNavigate()

	const { username, correctAnswers, wrongAnswers, gameCount, score } =
		useTypedSelector(state => state.user)

	const { startGame, addGameCount } = useActions()

	const start = () => {
		navigate('/game')
		startGame()
		addGameCount()
	}

	return (
		<Card className={styles.card}>
			<CardHeader className={styles.cardHeader}>Статистика</CardHeader>
			<CardBody>
				<div className={styles.cardAvatar}>
					<Avatar name={username || ''} background='teal' color='white' />
					<h2>{username}</h2>
				</div>
				<ul>
					<li>Кол-во правильных ответов: {correctAnswers}</li>
					<li>Кол-во ложных ответов: {wrongAnswers}</li>
					<li>Кол-во сыгранных игр: {gameCount}</li>
					<li>Кол-во очков: {score}</li>
				</ul>
			</CardBody>
			<CardFooter className={styles.cardFooter}>
				<Button colorScheme='green' onClick={start}>
					Играть
				</Button>
			</CardFooter>
		</Card>
	)
}
