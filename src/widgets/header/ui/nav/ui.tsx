import cn from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { items } from './config'
import styles from './styles.module.scss'

export const Nav = () => {
	const location = useLocation()

	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				{items.map(item => {
					const isCurrentPage = location.pathname === item.href

					return (
						<Link
							to={item.href}
							key={item.text}
							className={cn(styles.link, {
								[styles.isCurrent]: isCurrentPage,
							})}
						>
							<li>{item.text}</li>
						</Link>
					)
				})}
			</ul>
		</nav>
	)
}
