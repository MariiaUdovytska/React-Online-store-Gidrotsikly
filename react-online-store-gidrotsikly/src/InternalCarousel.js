import React from 'react';
import './css/internalCarousel.css';
import ProductCard from './ProductCard';

class InternalCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = { move: 0, contItems: this.props.data.length, touchPosition: null };
	}

	leftButtonClick = () => {
		if (this.state.move === 0)
			return;
		let lastMove = this.state.move;
		this.setState({ move: lastMove - 1 });
	}

	rigthButtonClick = () => {
		if (this.state.move === this.state.contItems - 4)
			return;
		let lastMove = this.state.move;
		this.setState({ move: lastMove + 1 });
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ move: 0, contItems: nextProps.data.length });
	}

	handleTouchStart = (e) => {
		const touchDown = e.touches[0].clientX
		this.setState({ touchPosition: touchDown });
	}


	handleTouchMove = (e) => {
		const touchDown = this.state.touchPosition

		if (touchDown === null) {
			return
		}

		const currentTouch = e.touches[0].clientX
		const diff = touchDown - currentTouch

		if (diff > 5) {
			this.rigthButtonClick()
		}

		if (diff < -5) {
			this.leftButtonClick()
		}

		this.setState({ touchPosition: null });
	}

	render() {
		let value = `translateX(${-100 * this.state.move}%)`;
		let arrayLi = [];
		for (let index = 0; index < this.props.data.length; index++) {
			const element = this.props.data[index];
			arrayLi.push(
				<li key={index} className='internal-carousel__body-card' style={{ transform: value }}>
					<ProductCard
						imageProduct={element.image}
						nameProduct={element.name}
						priceProduct={element.price}
						saleProduct={element.sale} />
				</li>);
		}
		return (
			<div className='internal-carousel' onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove}>
				<button onClick={this.leftButtonClick} type='submit' className='internal-carousel__arrowleft'><i className="bi bi-chevron-compact-left" style={{ fontSize: '31px', color: '#2F3035' }}></i></button>
				<div className='internal-carousel__body'>
					<ul className='internal-carousel__body-items'>
						{arrayLi}
					</ul>
				</div>
				<button onClick={this.rigthButtonClick} type='submit' className='internal-carousel__arrowright'><i className="bi bi-chevron-compact-right" style={{ fontSize: '31px', color: '#2F3035' }}></i></button>
			</div>
		)
	}
}

export default InternalCarousel;