import React from 'react';
import './css/popularGoods.css';

class PopularGoods extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		
		return(
			<section className='popular-goods containerM'>
				<div className='popular-goods__body'>
					<h2 className='popular-goods__body-title'>Популярные товары</h2>
					<div className='popular-goods__body-carousel'>
						<span className='popular-goods__body-carousel-items'>запчасти</span>
						<span className='popular-goods__body-carousel-items'>моторы</span>
						<span className='popular-goods__body-carousel-items'>шины </span>
						<span className='popular-goods__body-carousel-items'>электроника</span>
						<span className='popular-goods__body-carousel-items'>инструменты</span>
						<span className='popular-goods__body-carousel-items'>аксессуары </span>
					</div>
					<div className='popular-goods__body-content'>
						<div className='popular-goods__body-content-items'>test</div>
						<div className='popular-goods__body-content-items'>test</div>
						<div className='popular-goods__body-content-items'>test</div>
						<div className='popular-goods__body-content-items'>test</div>
						<div className='popular-goods__body-content-items'>test</div>
						<div className='popular-goods__body-content-items'>test</div>
					</div>
				</div>
			</section>
		)
	}
}

export default PopularGoods;