import React from 'react';
import './css/productCardFull.css';
import ExternalCarousel from './ExternalCarousel';

function ProductCardFull(props) {
	let showBusket = props.priceProduct !== undefined;
	return (
		<section className="product-card-full containerM">
			<div className='product-card-full__body'>
				<div className='product-card-full__body-product'>
					<div className='product-card-full__body-product-left'>
						<div className='card__body-imgprice'>
								<div className='card__body-imgprice-img'>
									<figure>
										<img src={props.imageProduct} alt='imageProduct'></img>
										<figcaption><h3>{props.nameProduct}</h3></figcaption>
									</figure>
								</div>
								{showBusket === true
								?<div>
									<div className='card__body-imgprice-price'><span>{props.priceProduct}</span></div>
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
				<ExternalCarousel title={'С этим товаром покупают'} move={4}/>
			</div>
		</section>
	);
}

export default ProductCardFull;
