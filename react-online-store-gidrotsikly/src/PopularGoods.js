import React from 'react';
import './css/popularGoods.css';
import ExternalCarousel from './ExternalCarousel';

function PopularGoods() {
	return (
		<section className='popular-goods'>
			<ExternalCarousel title={'Популярные товары'} move={0} />
		</section>
	)
}

export default PopularGoods;