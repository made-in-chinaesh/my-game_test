import { PropsWithChildren } from 'react'
import { useTypedSelector } from 'shared/hooks'
import { Auth } from 'widgets/auth'
import { Header } from 'widgets/header'

import cn from 'classnames'
import { QuestionWindow } from 'widgets/question-window'

const Layout = ({ children }: PropsWithChildren<{}>) => {
	const { username } = useTypedSelector(state => state.user)

	if (!username) return <Auth />

	return (
		<>
			<Header />
			<main className={cn('main', 'container')}>{children}</main>
			<QuestionWindow />
		</>
	)
}

export default Layout
