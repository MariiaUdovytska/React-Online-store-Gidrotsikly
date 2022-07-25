import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './MainPage';
import Footer from './Footer';
import MenuBurger from './MenuBurger';
import JetSkisPage from './JetSkisPage';
import ProductPage from './ProductPage';
import  { BrowserRouter,Routes , Route} from 'react-router-dom';

function App() {
	return (
		<div className="wrapper">
			<div className='page'>
				<BrowserRouter>
					<MenuBurger/>
					<Routes>
						<Route exact path="/home" element={<MainPage/>}/>
						<Route path="/jetSkisPage" element={<JetSkisPage/>} exact/>
						<Route path="/productPage" element={<ProductPage/>} exact/>
					</Routes>
					<Footer/>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
