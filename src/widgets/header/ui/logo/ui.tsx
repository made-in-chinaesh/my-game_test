import { Link } from 'react-router-dom'
import { LogoIcon } from 'shared/ui/icon'

import styles from './styles.module.scss'

export const Logo = () => {
	return (
		<Link to='/' className={styles.link}>
			<LogoIcon className={styles.logo} />
		</Link>
	)
}
