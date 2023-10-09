import { Button } from '@chakra-ui/react'
import { useActions, useTypedSelector } from 'shared/hooks'

export const GameState = () => {
	const { isStarted } = useTypedSelector(state => state.game)
	const { startGame, stopGame, clearAnsweredQuestions, addGameCount } = useActions()

	const onClick = () => {
		if (isStarted) {
			stopGame()
			clearAnsweredQuestions()
		} else {
			startGame()
			addGameCount()
		}
	}

	return (
		<section>
			<Button onClick={onClick} colorScheme={isStarted ? 'red' : 'telegram'}>
				{isStarted ? 'Выйти с игры' : 'Вне игры, начать'}
			</Button>
		</section>
	)
}
