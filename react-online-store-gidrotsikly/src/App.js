import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './MainPage';
import Footer from './Footer';

function App() {
	return (
		<div className="wrapper">
			<div className='page'>
				<MainPage/>
				<Footer/>
			</div>
		</div>
	);
}

export default App;
