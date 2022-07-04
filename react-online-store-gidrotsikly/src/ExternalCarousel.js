import React from 'react';
import './css/externalCarousel.css';
import InternalCarousel from './InternalCarousel';
import stockCards from './data/stockCards.json';

class ExternalCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state ={move:this.props.move};
	}

	clickLabel = (i) =>{
		this.setState(
			{move:i}
		)
	}
	render(){
		let dataCard = stockCards;
		return(
			<div className='external-carousel__body'>
				<h2 className='external-carousel__body-title'>{this.props.title}</h2>
				<div className='external-carousel__body-carousel'>
					<span className={((this.state.move===0)?'external-carousel__body-carousel-items-active':'external-carousel__body-carousel-items')} onClick={()=>{this.clickLabel(0)}}>запчасти</span>
					<span className={((this.state.move===1)?'external-carousel__body-carousel-items-active':'external-carousel__body-carousel-items')} onClick={()=>{this.clickLabel(1)}}>моторы</span>
					<span className={((this.state.move===2)?'external-carousel__body-carousel-items-active':'external-carousel__body-carousel-items')} onClick={()=>{this.clickLabel(2)}}>шины </span>
					<span className={((this.state.move===3)?'external-carousel__body-carousel-items-active':'external-carousel__body-carousel-items')} onClick={()=>{this.clickLabel(3)}}>электроника</span>
					<span className={((this.state.move===4)?'external-carousel__body-carousel-items-active':'external-carousel__body-carousel-items')} onClick={()=>{this.clickLabel(4)}}>инструменты</span>
					<span className={((this.state.move===5)?'external-carousel__body-carousel-items-active':'external-carousel__body-carousel-items')} onClick={()=>{this.clickLabel(5)}}>аксессуары </span>
				</div>
				<div className='external-carousel__body-content'>
					<div className='external-carousel__body-content-items'><InternalCarousel data={dataCard[this.state.move]}/></div>
				</div>
			</div>
		)
	}
}

export default ExternalCarousel;