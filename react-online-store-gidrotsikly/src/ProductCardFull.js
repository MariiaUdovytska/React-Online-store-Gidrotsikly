import React from 'react';
import './css/productCardFull.css';
import ExternalCarousel from './ExternalCarousel';
import stockCards from './data/stockCardsJetSkis.json';

class ProductCardFull extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			move:0, 
			showMore:false,
			sizeWidth: true,
		};
	}

	getWindowDimensions = ()=> {
		const { innerWidth: width } = window;
		return width;
	}

	handleWindowDimensions = ()=> {
		let width = this.getWindowDimensions()
		this.setState({
			sizeWidth: width > 678
		})
	}

	componentDidMount() {
		this.handleWindowDimensions();
		window.addEventListener('resize', this.handleWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowDimensions);
	}

	clickLabel = (i) =>{
		this.setState(
			{move:i}
		)
	}

	clickShowMore = () =>{
		this.setState(
			{showMore:!this.state.showMore}
		)
	}

	render(){
		let jetCard = stockCards;
		const element = jetCard[this.props.id];
		if(element===undefined){
			return(
				<div className='not-faund containerM'>{`Товар с Id:${this.props.id} не найден`}</div>
			)
		}
		let showPrice = element.price !== undefined;
		let value = `translateX(${-100*this.state.move}%)`;
		const{sizeWidth} = this.state;
		if(sizeWidth === true){
			return(
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
								</div>
								{showPrice === true
									?<div className='card-full__imgprice-price-block'>
										<span className='card-full__imgprice-price-old'>{element.oldPrice}</span>
										<div className='card-full__imgprice-price'><span>{element.price}</span></div>
										<div className='card-full__imgprice-quest'><span>Нашли дешевле? Снизим цену!</span></div>
									</div>
									:<div className='card-full__imgprice-instock'>
										<span className='card-full__imgprice-havnot'>нет в наличии</span>
										<a href='#' className='card-full__imgprice-reportadmission'>Сообщить о поступлении</a>
									</div>
								}
							</div>
							<div className='product-card-full__body-product-right'>
								<h3 className='product-card-full__body-product-right-title'>{element.name}</h3>
								<div className='product-card-full__body-product-right-code'>Код товара: {element.cod}</div>
								<div className='card__body-up-like product-card-full__body-product-right-like'>
									<i className='bi bi-heart' style={{fontSize:'20px'}}></i>
									<i className="bi bi-bar-chart-fill" style={{fontSize:'20px'}}></i>
									<i className="bi bi-star-fill" style={{fontSize:'20px'}}></i>
									<i className="bi bi-star-fill" style={{fontSize:'20px'}}></i>
									<i className="bi bi-star-fill" style={{fontSize:'20px'}}></i>
									<i className="bi bi-star-fill" style={{fontSize:'20px'}}></i>
									<i className="bi bi-star-fill" style={{fontSize:'20px'}}></i>
								</div>
								<div className='product-card-full__body-product-right-carousel external-carousel__body'>
									<div className='product-card-full__body-product-right-carousel-full external-carousel__body-carousel'>
										<span className={((this.state.move===0)?'external-carousel__body-carousel-items-active':'external-carousel__body-carousel-items')} onClick={()=>{this.clickLabel(0)}}>Характеристики</span>
										<span className={((this.state.move===1)?'external-carousel__body-carousel-items-active':'external-carousel__body-carousel-items')} onClick={()=>{this.clickLabel(1)}}>Наличие в магазине</span>
									</div>
									<div className='product-card-full__body-product-right-carousel-items advanced-options__body-items'>
										<div className='product-card-full__body-product-right-carousel-characters advanced-options__body-item' style={{transform: value}}>
											<table>
												<tbody>
													<tr>
														<td>Производитель</td>
														<td>{element.manufacturer}</td>
													</tr>
													<tr>
														<td>Количество мест, шт: </td>
														<td>{element.numberSeats}</td>
													</tr>
													<tr>
														<td>Мощность, л.с. </td>
														<td>{element.power}</td>
													</tr>
													<tr>
														<td>Тип двигателя </td>
														<td>{element.engineType}</td>
													</tr>
													<tr>
														<td>Год выпуска</td>
														<td>{element.year}</td>
													</tr>
													{this.state.showMore === true
													?<>
														<tr>
															<td>Цвет</td>
															<td>{element.color}</td>
														</tr>
														<tr>
															<td>Позиция</td>
															<td>{element.position}</td>
														</tr>
													</>
													:""
													}
												</tbody>
											</table>
											<span onClick={this.clickShowMore} className='product-card-full__body-product-right-carousel-characters-show'>
												{this.state.showMore===false?"Показать еще":"Скрыть"}
											</span>
											<button className='product-card-full__body-product-right-carousel-characters-btn' type='submit'>купить</button>
										</div>
										<div className='product-card-full__body-product-right-carousel-presence advanced-options__body-item' style={{transform: value}}>
											<div>{element.presence}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<ExternalCarousel title={'С этим товаром покупают'} move={4}/>
					</div>
				</section>
			) 
		} else {
			return(
				<section className="product-card-full containerM">
					<div className='product-card-full__body'>
						<div className='product-card-full__body-product'>
							<div className='product-card-full__body-product-right'>
								<h3 className='product-card-full__body-product-right-title'>{element.name}</h3>
								<div className='product-card-full__body-product-right-code'>Код товара: {element.cod}</div>
								<div className='card__body-up-like product-card-full__body-product-right-like'>
									<i className='bi bi-heart' style={{fontSize:'20px'}}></i>
									<i className="bi bi-bar-chart-fill" style={{fontSize:'20px'}}></i>
									<i className="bi bi-star-fill" style={{fontSize:'20px'}}></i>
									<i className="bi bi-star-fill" style={{fontSize:'20px'}}></i>
									<i className="bi bi-star-fill" style={{fontSize:'20px'}}></i>
									<i className="bi bi-star-fill" style={{fontSize:'20px'}}></i>
									<i className="bi bi-star-fill" style={{fontSize:'20px'}}></i>
								</div>
							</div>
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
								</div>
								{showPrice === true
									?<div className='card-full__imgprice-price-block'>
										<span className='card-full__imgprice-price-old'>{element.oldPrice}</span>
										<div className='card-full__imgprice-price'><span>{element.price}</span></div>
										<div className='card-full__imgprice-quest'><span>Нашли дешевле? Снизим цену!</span></div>
									</div>
									:<div className='card-full__imgprice-instock'>
										<span className='card-full__imgprice-havnot'>нет в наличии</span>
										<a href='#' className='card-full__imgprice-reportadmission'>Сообщить о поступлении</a>
									</div>
								}
							</div>
							<div className='product-card-full__body-product-right'>
								<div className='product-card-full__body-product-right-carousel external-carousel__body'>
									<div className='product-card-full__body-product-right-carousel-full product-card-full__pfone external-carousel__body-carousel'>
										<span className={((this.state.move===0)?'external-carousel__body-carousel-items-active product-card-full__pfone-s':'external-carousel__body-carousel-items product-card-full__pfone-s')} onClick={()=>{this.clickLabel(0)}}>Характеристики</span>
										<span className={((this.state.move===1)?'external-carousel__body-carousel-items-active product-card-full__pfone-s':'external-carousel__body-carousel-items product-card-full__pfone-s')} onClick={()=>{this.clickLabel(1)}}>Наличие в магазине</span>
									</div>
									<div className='product-card-full__body-product-right-carousel-items advanced-options__body-items'>
										<div className='product-card-full__body-product-right-carousel-characters advanced-options__body-item' style={{transform: value}}>
											<table>
												<tbody>
													<tr>
															<td>Производитель</td>
															<td>{element.manufacturer}</td>
														</tr>
														<tr>
															<td>Количество мест, шт: </td>
															<td>{element.numberSeats}</td>
														</tr>
														<tr>
															<td>Мощность, л.с. </td>
															<td>{element.power}</td>
														</tr>
														<tr>
															<td>Тип двигателя </td>
															<td>{element.engineType}</td>
														</tr>
														<tr>
															<td>Год выпуска</td>
															<td>{element.year}</td>
														</tr>
														{this.state.showMore === true
														?<>
															<tr>
																<td>Цвет</td>
																<td>{element.color}</td>
															</tr>
															<tr>
																<td>Позиция</td>
																<td>{element.position}</td>
															</tr>
														</>
														:""
														}
												</tbody>
											</table>
											<span onClick={this.clickShowMore} className='product-card-full__body-product-right-carousel-characters-show'>
												{this.state.showMore===false?"Показать еще":"Скрыть"}
											</span>
											<button className='product-card-full__body-product-right-carousel-characters-btn' type='submit'>купить</button>
										</div>
										<div className='product-card-full__body-product-right-carousel-presence advanced-options__body-item' style={{transform: value}}>
											<div>{element.presence}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<ExternalCarousel title={'С этим товаром покупают'} move={4}/>
					</div>
				</section>
			)
		}
		
	}
}

export default ProductCardFull;
