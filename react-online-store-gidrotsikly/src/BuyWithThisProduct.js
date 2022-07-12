import React from 'react';
import './css/buyWithThisProduct.css';
import ExternalCarousel from './ExternalCarousel';

function BuyWithThisProduct (){
	return(
		<section className='buy-product'>
			<ExternalCarousel title={'С этим товаром покупают'} move={3}/>
		</section>
	)
}

export default BuyWithThisProduct;