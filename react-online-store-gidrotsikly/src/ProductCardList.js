import React from 'react';
import './css/productCardList.css';
import { Link } from 'react-router-dom';

function ProductCardList(props) {

	let showBusket = props.priceProduct !== undefined;

	return (
		<Link to={`/productPage?id=${props.idProduct}`}>
			<div className='card-m card-list'>
				<div className='card-list__body'>
					<a href='#' className='card-list__body-hover'><span>посмотреть товар</span></a>
					<div className='card-list__body-up'>
						<div className='card-list__body-up-sale' style={{ visibility: (props.saleProduct === true ? 'visible' : 'hidden') }}><span>Sale</span></div>
						<div className='card-list__body-up-like'><i className='bi bi-heart' style={{ fontSize: '20px' }}></i></div>
					</div>
					<div className='card-list__body-imgprice'>
						<div className='card-list__body-imgprice-img'>
							<figure>
								<img src={props.imageProduct} alt='imageProduct'></img>
							</figure>
						</div>
						{showBusket === true
							? <div className='card-list__body-imgp-list'>
								<div className='card-list__body-imgp-list-name'><h3>{props.nameProduct}</h3></div>
								<div className='card-list__body-imgprice-price'><span>{props.priceProduct}</span></div>
								<div className='card-list__body-imgprice-basket'><i className="bi bi-cart2" style={{ fontSize: '23px' }}></i></div>
							</div>
							: <div className='card-list__body-imgprice-instock'>
								<span className='card-list__body-imgprice-havnot'>нет в наличии</span>
								<a href='#' className='card-list__body-imgprice-reportadmission'>Сообщить о поступлении</a>
							</div>
						}
					</div>
				</div>
			</div>
		</Link>
	)
}


export default ProductCardList;