import { configureStore } from '@reduxjs/toolkit'
import { api } from 'shared/api'
import { rootReducer } from './root-reducer'

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
})

export type TypeRootState = ReturnType<typeof rootReducer>
