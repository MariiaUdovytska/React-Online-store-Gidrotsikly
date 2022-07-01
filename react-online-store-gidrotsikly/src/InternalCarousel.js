import React from 'react';
import './css/internalCarousel.css';
import ProductCard from './ProductCard';

class InternalCarousel extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		
		return(
			<div className='internal-carousel'>
				<div className='internal-carousel__body'>
					<ul className='internal-carousel__body-items'>
						<li className='internal-carousel__body-card'><ProductCard/></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default InternalCarousel;