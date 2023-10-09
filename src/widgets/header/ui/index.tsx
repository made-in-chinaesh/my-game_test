import { Logo } from './logo'
import { Nav } from './nav'
import cn from 'classnames'

import styles from './styles.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
			<section className={cn(styles.container, 'container')}>
				<Logo />
				<Nav />
			</section>
		</header>
	)
}
