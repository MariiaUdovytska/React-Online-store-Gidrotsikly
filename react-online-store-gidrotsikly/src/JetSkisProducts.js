import React from 'react';
import './css/jetSkisProducts.css';
import stockCardsJetSkis from './data/stockCardsJetSkis.json';
import ProductCard from './ProductCard';

class JetSkisProducts extends React.Component {
	constructor(props) {
		super(props);
		this.state ={contItems:stockCardsJetSkis.length}
		;
	}

	render(){
		let dataCard = stockCardsJetSkis;
		let arrayLi = [];
		for (let index = 0; index < dataCard.length; index++) {
			const element = dataCard[index];
			arrayLi.push(
				<li key={index} className='jetskis-products__body-items'>
					<ProductCard
						imageProduct={element.image} 
						nameProduct={element.name} 
						priceProduct={element.price} 
						saleProduct={element.sale}/>
				</li>);
		}
		return(
			<div className='jetskis-products'>
				<ul className='jetskis-products__body'>
					{arrayLi}
				</ul>
			</div>
		)
	}
}

export default JetSkisProducts;