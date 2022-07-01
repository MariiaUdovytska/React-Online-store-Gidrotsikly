import React from 'react';
import './css/productCard.css';


// const Basket = visibility.div`
// 	visibility: ${ props => props.visibility?'white':'black'};
// 	background: ${ props => props.positive?'green':'red' };
// `;

class ProductCard extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		let showBusket = this.props.priceProduct !== undefined;
		return(
			<div className='card'>
				<div className='card__body'>
					<div className='card__body-up'>
						<div className='card__body-up-sale' style={{visibility:(this.props.saleProduct === true ? 'visible' : 'hidden')}}><span>Sale</span></div>
						<div className='card__body-up-like'><i className='bi bi-heart' style={{fontSize:'20px'}}></i></div>
					</div>
					
					<div className='card__body-imgprice'>
						<div className='card__body-imgprice-img'>
							<figure>
								<img src={this.props.imageProduct} alt='imageProduct'></img>
								<figcaption><h3>{this.props.nameProduct}</h3></figcaption>
							</figure>
						</div>
						{showBusket === true
						?<div>
							<div className='card__body-imgprice-price'><span>{this.props.priceProduct}</span></div>
							<div className='card__body-imgprice-basket'><i className="bi bi-cart2" style={{fontSize:'23px'}}></i></div>
						</div>
						:<div className='card__body-imgprice-instock'>
							<span className='card__body-imgprice-havnot'>нет в наличии</span>
							<a href='#' className='card__body-imgprice-reportadmission'>Сообщить о поступлении</a>
						</div>
						}
						
					</div>
				</div>
			</div>
		)
	}
}

export default ProductCard;