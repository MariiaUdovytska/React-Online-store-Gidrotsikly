import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './MainPage';
import Footer from './Footer';
import MenuBurger from './MenuBurger';

function App() {
	return (
		<div className="wrapper">
			<div className='page'>
				<MenuBurger/>
				<MainPage/>
				<Footer/>
			</div>
		</div>
	);
}

export default App;
