
import React from 'react';
import './css/bannerSale.css';
import quadroLeft from './img/bannerSales/quadroLeft.png';
import quadroRight from './img/bannerSales/quadroRight.png';

function BannerSale() {
	return (
		<div className='banner-sale'>
			<div className='banner-sale__body'>
				<div className='banner-sale__body-imgs'>
					<img src={quadroLeft} alt='quadro-left'></img>
					<img src={quadroRight} alt='quadro-right'></img>
				</div>
				<h2 className='banner-sale__body-text'>CКИДКИ <br/> на все запчасти <br/> до 70%</h2>
				<button className='banner-sale__body-btn' type='submit'>ПОСМОТЕТЬ&nbsp;ВСЕ</button>
			</div>
			<div className='banner-sale__body-phone'>
				<h2 className='banner-sale__body-phon-text'>CКИДКИ на все запчасти <br/> до 70%</h2>
				<div className='banner-sale__body-phon-imgswbtn'>
					<img src={quadroLeft} alt='quadro-phon-left'></img>
					<button className='banner-sale__body-phon-btn' type='submit'>ПОСМОТЕТЬ&nbsp;ВСЕ</button>
					<img src={quadroRight} alt='quadro-phon-right'></img>
				</div>
			</div>
		</div>
	);
}

export default BannerSale;