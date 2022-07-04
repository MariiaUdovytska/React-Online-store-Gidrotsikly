import React from 'react';
import './css/popularGoods.css';
import ExternalCarousel from './ExternalCarousel';

class PopularGoods extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		return(
			<section className='popular-goods containerM'>
				<ExternalCarousel title={'Популярные товары'} move={0}/>
			</section>
		)
	}
}

export default PopularGoods;