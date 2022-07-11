import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './MainPage';
import Footer from './Footer';
import MenuBurger from './MenuBurger';
import JetSkisPage from './JetSkisPage';

function App() {
	return (
		<div className="wrapper">
			<div className='page'>
				<MenuBurger/>
				<JetSkisPage/>
				<Footer/>
			</div>
		</div>
	);
}

export default App;
