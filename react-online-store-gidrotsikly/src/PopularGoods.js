import React from 'react';
import './css/popularGoods.css';
import InternalCarousel from './InternalCarousel';

class PopularGoods extends React.Component {
	constructor(props) {
		super(props);
		this.state ={move:0};
	}

	clickLabel = (i) =>{
		this.setState(
			{move:i}
		)
	}
	render(){
		let dataCard = [
			{
				image: require("./img/products/rukzak.png"),
				name: 'Водонепроницаемый Рюкзак',
				price: '400 $',
				sale: true
			},
			{
				image: require("./img/products/rukzak.png"),
				name: 'Водонепроницаемый Рюкзак',
				price: '400 $',
				sale: true
			},
			{
				image: require("./img/products/rukzak.png"),
				name: 'Водонепроницаемый Рюкзак',
				price: '400 $',
				sale: true
			},
			{
				image: require("./img/products/rukzak.png"),
				name: 'Водонепроницаемый Рюкзак',
				price: '400 $',
				sale: true
			},
			{
				image: require("./img/products/rukzak.png"),
				name: 'Водонепроницаемый Рюкзак',
				price: '400 $',
				sale: true
			},
			{
				image: require("./img/products/mensuit.png"),
				name: 'Водонепроницаемый Рюкзак',
				price: '400 $',
				sale: true
			}
		];
		return(
			<section className='popular-goods containerM'>
				<div className='popular-goods__body'>
					<h2 className='popular-goods__body-title'>Популярные товары</h2>
					<div className='popular-goods__body-carousel'>
						<span className={((this.state.move===0)?'popular-goods__body-carousel-items-active':'popular-goods__body-carousel-items')} onClick={()=>{this.clickLabel(0)}}>запчасти</span>
						<span className={((this.state.move===1)?'popular-goods__body-carousel-items-active':'popular-goods__body-carousel-items')} onClick={()=>{this.clickLabel(1)}}>моторы</span>
						<span className={((this.state.move===2)?'popular-goods__body-carousel-items-active':'popular-goods__body-carousel-items')} onClick={()=>{this.clickLabel(2)}}>шины </span>
						<span className={((this.state.move===3)?'popular-goods__body-carousel-items-active':'popular-goods__body-carousel-items')} onClick={()=>{this.clickLabel(3)}}>электроника</span>
						<span className={((this.state.move===4)?'popular-goods__body-carousel-items-active':'popular-goods__body-carousel-items')} onClick={()=>{this.clickLabel(4)}}>инструменты</span>
						<span className={((this.state.move===5)?'popular-goods__body-carousel-items-active':'popular-goods__body-carousel-items')} onClick={()=>{this.clickLabel(5)}}>аксессуары </span>
					</div>
					<div className='popular-goods__body-content'>
						<div className='popular-goods__body-content-items'><InternalCarousel data={dataCard}/></div>
						
					</div>
				</div>
			</section>
		)
	}
}

export default PopularGoods;