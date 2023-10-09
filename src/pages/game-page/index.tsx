import { Category, GameState } from 'entities/category'
import { Categories, EnumCategoriesId, api } from 'shared/api'

const GamePage = () => {
	const { data: geographyData } = api.useGetQuestionsByCategoryQuery(
		EnumCategoriesId.Geography
	)
	const { data: automobilesData } = api.useGetQuestionsByCategoryQuery(
		EnumCategoriesId.Automobiles
	)
	const { data: foodsData } = api.useGetQuestionsByCategoryQuery(
		EnumCategoriesId.Foods
	)
	const { data: zoologyData } = api.useGetQuestionsByCategoryQuery(
		EnumCategoriesId.Zoology
	)
	const { data: asiaData } = api.useGetQuestionsByCategoryQuery(
		EnumCategoriesId.Asia
	)

	return (
		<>
			<Category
				data={geographyData}
				title={Categories[EnumCategoriesId.Geography].title}
			/>
			<Category
				data={automobilesData}
				title={Categories[EnumCategoriesId.Automobiles].title}
			/>
			<Category
				data={foodsData}
				title={Categories[EnumCategoriesId.Foods].title}
			/>
			<Category
				data={zoologyData}
				title={Categories[EnumCategoriesId.Zoology].title}
			/>
			<Category
				data={asiaData}
				title={Categories[EnumCategoriesId.Asia].title}
			/>
			<GameState />
		</>
	)
}

export default GamePage
