export interface ICategory {
	id: 2
	title: string
	clues_count: 298
}

interface IQuestionIsWrong {
	isWrong: boolean
}

export interface IQuestion extends IQuestionIsWrong {
	id: number
	answer: string
	question: string
	value?: number
	airdate: string
	category_id: number
	game_id: number
	category: ICategory
}
