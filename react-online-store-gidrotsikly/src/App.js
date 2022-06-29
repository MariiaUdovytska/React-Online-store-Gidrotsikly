import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullScreen from './FullScreen';
import Search from './Search';

function App() {
	return (
		<div className="wrapper">
			<div className='page'>
				<FullScreen/>
				<Search/>
			</div>
		</div>
	);
}

export default App;
