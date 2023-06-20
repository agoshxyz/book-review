// TASK 2 START
import styles from './header.module.css'
import { Navigation } from '../navigation/navigation'

export const Header = () => {
	return (
		<header className={styles.headerLayout}>
			<Navigation />
		</header>
	)
}
