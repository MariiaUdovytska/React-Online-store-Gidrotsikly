
import React from 'react';
import './css/bannerSale.css';
import quadroLeft from './img/bannerSales/quadroLeft.png';
import quadroRight from './img/bannerSales/quadroRight.png';

class BannerSale extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		
		return(
			<div className='banner-sale containerM'>
				<div className='banner-sale__body'>
					<div className='banner-sale__body-imgs'>
						<img src={quadroLeft} alt='quadro-left'></img>
						<img src={quadroRight} alt='quadro-right'></img>
					</div>
					<h2 className='banner-sale__body-text'>CКИДКИ <br/> на все запчасти <br/> до 70%</h2>
					<button className='banner-sale__body-btn' type='submit'>ПОСМОТЕТЬ&nbsp;ВСЕ</button>
				</div>
			</div>
		)
	}
}

export default BannerSale;