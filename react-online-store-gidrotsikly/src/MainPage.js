import React from 'react';
import BannerSale from './BannerSale';
import BuyWithThisProduct from './BuyWithThisProduct';
import './css/mainPage.css';
import FullScreen from './FullScreen';
import PopularGoods from './PopularGoods';
import ProductCategories from './ProductCategories';
import Search from './Search';


class MainPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		
		return(
			<main className='main-page containerM'>
				<FullScreen/>
				<Search/>
				<ProductCategories/>
				<PopularGoods/>
				<BannerSale/>
				<BuyWithThisProduct/>
			</main>
		)
	}
}

export default MainPage;