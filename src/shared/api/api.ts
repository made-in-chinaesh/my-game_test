import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from './base'
import { IQuestion } from './types'

export enum EnumCategoriesId {
	Geography = 94,
	Automobiles = 23,
	Foods = 90,
	Zoology = 91,
	Asia = 59,
}

export const Categories = {
	[EnumCategoriesId.Geography]: {
		title: 'Geography',
	},
	[EnumCategoriesId.Automobiles]: {
		title: 'Automobiles',
	},
	[EnumCategoriesId.Foods]: {
		title: 'Foods',
	},
	[EnumCategoriesId.Zoology]: {
		title: 'Zoology',
	},
	[EnumCategoriesId.Asia]: {
		title: 'Asia',
	},
}

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: builder => ({
		getQuestionsByCategory: builder.query<IQuestion[], number>({
			query: (categoryId: number) => ({
				url: `/clues`,
				params: {
					category: categoryId,
					count: 5,
				},
			}),
		}),
	}),
})
