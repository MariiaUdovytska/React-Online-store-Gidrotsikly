import React from 'react';
import BannerSale from './BannerSale';
import BuyWithThisProduct from './BuyWithThisProduct';
import './css/mainPage.css';
import PopularGoods from './PopularGoods';
import ProductCategories from './ProductCategories';
import Search from './Search';
import VisualHeader from './VisualHeader';


function MainPage () {
	return(
		<main className='main-page containerM'>
			<VisualHeader/>
			<Search/>
			<ProductCategories/>
			<PopularGoods/>
			<BannerSale/>
			<BuyWithThisProduct/>
		</main>
	)
}


export default MainPage;