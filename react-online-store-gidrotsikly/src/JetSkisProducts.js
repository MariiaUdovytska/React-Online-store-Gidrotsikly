import React from 'react';
import './css/jetSkisProducts.css';
import stockCardsJetSkis from './data/stockCardsJetSkis.json';
import ProductCard from './ProductCard';
import ProductCardList from './ProductCardList';

class JetSkisProducts extends React.Component {
	constructor(props) {
		super(props);

		this.state ={contItems:stockCardsJetSkis.length};
	}

	render(){
		let dataCard = stockCardsJetSkis;
		let arrayLi = [];
		for (let index = 0; index < dataCard.length; index++) {
			const element = dataCard[index];
			if(this.props.view === false){
				arrayLi.push(
					<li key={index} className='jetskis-products__body-items-list'>
						<ProductCardList
							imageProduct={element.image} 
							nameProduct={element.name} 
							priceProduct={element.price} 
							saleProduct={element.sale}/>
					</li>);
			}
			else{
				arrayLi.push(
					<li key={index} className='jetskis-products__body-items'>
						<ProductCard
							imageProduct={element.image} 
							nameProduct={element.name} 
							priceProduct={element.price} 
							saleProduct={element.sale}/>
					</li>);
			}
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