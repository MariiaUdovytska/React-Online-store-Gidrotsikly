import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullScreen from './FullScreen';
import Search from './Search';
import ProductCategories from './ProductCategories';
import PopularGoods from './PopularGoods';
import BannerSale from './BannerSale';
import BuyWithThisProduct from './BuyWithThisProduct';

function App() {
	return (
		<div className="wrapper">
			<div className='page'>
				<FullScreen/>
				<Search/>
				<ProductCategories/>
				<PopularGoods/>
				<BannerSale/>
				<BuyWithThisProduct/>
			</div>
		</div>
	);
}

export default App;
