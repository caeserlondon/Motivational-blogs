import Link from 'next/link';
import IMG from '../public/favicon.ico';
import Styles from '../styles/Navbar.module.css';
const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<img src={IMG} alt="icon" />
			<Link href="/">
				<a>
					<li>Home</li>
				</a>
			</Link>
		</nav>
	);
};

export default Navbar;
