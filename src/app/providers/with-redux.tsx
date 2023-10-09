import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from 'shared/store'

export const withRedux = (component: () => ReactNode) => () =>
	<Provider store={store}>{component()}</Provider>
