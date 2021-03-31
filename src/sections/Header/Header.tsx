import Hero from './Hero/Hero';
import { Navbar } from './Navbar/Navbar';

export const Header = () => {
	return (
		<header>
			<Navbar />
			<Hero/>
		</header>
	);
};
