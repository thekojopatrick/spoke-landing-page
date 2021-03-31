import './styles/App.css';
import Layout from './components/Layout/Layout';
import { Header } from './sections/Header/Header';
import Footer from './sections/Footer/Footer';
import BookDemo from './sections/BookDemo/BookDemo';
import Security from './sections/Security/Security';
import TryDemo from './sections/Demo/TryDemo';
import DiscoverWhy from './sections/Discover/Discover';
import UseCases from './sections/UseCase/UseCases';
import WhySpoke from './sections/WhySpoke/WhySpoke';
import Pricing from './sections/Pricing/Pricing';

function App() {
	// const [animate, setAnimate] = useState(false);

	// if (typeof window !== 'undefined') {
	// 	// browser code
	// 	const animateSection = () => {
	// 		if (
	// 			window.pageYOffset /
	// 			(document.body.offsetHeight - window.innerHeight)
	// 		) {
	// 			setAnimate(true);
	// 		} else {
	// 			setAnimate(false);
	// 		}
	// 	};
	// 	window.addEventListener('scroll', animateSection);
	// }

	return (
		<div className='App'>
			<Layout>
				<Header />
				<TryDemo />
				<DiscoverWhy />
				<UseCases />
				<WhySpoke />
				<Pricing />
				<Security />
				<BookDemo />
				<Footer />
			</Layout>
		</div>
	);
}

export default App;
