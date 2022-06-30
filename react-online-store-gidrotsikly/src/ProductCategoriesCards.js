
import React from 'react';
import './css/productCategoriesCards.css';

class ProductCategoriesCards extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		
		return(
			<section className='product-cards'>
				<div className='product-cards__body'>
					<div className='product-cards__body-names'>
						<h2 className='product-cards__body-name'>{this.props.productCardsName}</h2>
						<span className='product-cards__body-readmore'>Подробее &gt;</span>
					</div>
					<div className='product-cards__body-img'><img src={this.props.productCardsImg} alt="watch" /></div>
				</div>
			</section>
		)
	}
}

export default ProductCategoriesCards;