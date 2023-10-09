import { Card, CardBody } from '@chakra-ui/react'
import { IQuestion } from 'shared/api/types'
import { QuestionItem } from './question-item'

import styles from './styles.module.scss'

interface CategoryProps {
	title: string
	data: IQuestion[] | undefined
}

export const Category = ({ title, data }: CategoryProps) => {
	const items = data?.filter((_, index) => index < 5)

	return (
		<section className={styles.section}>
			<Card width='300px'>
				<CardBody className={styles.title}>{title}</CardBody>
			</Card>
			{items?.map(item => (
				<QuestionItem key={item.id} item={item} className={styles.item} />
			))}
		</section>
	)
}
