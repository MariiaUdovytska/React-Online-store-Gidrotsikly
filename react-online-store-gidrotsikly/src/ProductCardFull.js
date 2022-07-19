import React from 'react';
import './css/productCardFull.css';
import ExternalCarousel from './ExternalCarousel';
import stockCards from './data/stockCardsJetSkis.json';

function ProductCardFull(props) {
	let jetCard = stockCards;
	const element = jetCard[1];
	let showPrice = element.price !== undefined;
	return (
		<section className="product-card-full containerM">
			<div className='product-card-full__body'>
				<div className='product-card-full__body-product'>
					<div className='product-card-full__body-product-left'>
						<div className='card-full__sale'>
							<div className='card-full__sale-up' style={{visibility:(element.sale === true ? 'visible' : 'hidden')}}><span>Sale</span></div>
						</div>
						<div className='card-full__imgprice'>
							<div className='card-full__imgprice-img'>
								<figure>
									<img src={element.image} alt='imageProduct'></img>
								</figure>
							</div>
							{showPrice === true
							?<div>
								<div className='card-full__imgprice-price-old'><span>{element.oldPrice}</span></div>
								<div className='card-full__imgprice-price'><span>{element.price}</span></div>
								<div className='card-full__imgprice-quest'><span>Нашли дешевле? Снизим цену!</span></div>
							</div>
							:<div className='card-full__imgprice-instock'>
								<span className='card-full__imgprice-havnot'>нет в наличии</span>
								<a href='#' className='card-full__imgprice-reportadmission'>Сообщить о поступлении</a>
							</div>
							}
						</div>
					</div>
					<div className='product-card-full__body-product-right'>
						<h3>{element.name}</h3>
					</div>
				</div>
				
				<ExternalCarousel title={'С этим товаром покупают'} move={4}/>
			</div>
		</section>
	);
}

export default ProductCardFull;
