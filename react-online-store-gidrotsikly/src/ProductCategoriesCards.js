
import React from 'react';
import './css/productCategoriesCards.css';

function ProductCategoriesCards(props) {
	return (
		<section className='product-cards'>
			<div className='product-cards__body'>
				<div className='product-cards__body-names'>
					<h2 className='product-cards__body-name'>{props.productCardsName}</h2>
					<span className='product-cards__body-readmore'>Подробее&nbsp;&gt;</span>
				</div>
				<div className='product-cards__body-img'><img src={props.productCardsImg} alt="watch" /></div>
			</div>
		</section>
	)
}


export default ProductCategoriesCards;