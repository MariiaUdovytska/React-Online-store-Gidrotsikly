import React from 'react';
import './css/buyWithThisProduct.css';
import ExternalCarousel from './ExternalCarousel';

class BuyWithThisProduct extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		
		return(
			<section className='buy-product containerM'>
				<ExternalCarousel title={'С этим товаром покупают'} move={3}/>
			</section>
		)
	}
}

export default BuyWithThisProduct;