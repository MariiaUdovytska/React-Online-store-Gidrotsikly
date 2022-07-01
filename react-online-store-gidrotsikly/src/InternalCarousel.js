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
				<button type='submit' className='internal-carousel__arrowleft'><i className="bi bi-chevron-compact-left" style={{fontSize:'31px', color:'#2F3035'}}></i></button>
				<div className='internal-carousel__body'>
					<ul className='internal-carousel__body-items'>
						<li className='internal-carousel__body-card' ><ProductCard imageProduct={require("./img/products/rukzak.png")} nameProduct={'Водонепроницаемый Рюкзак'} priceProduct={'400 $'} saleProduct={true}/></li>
						<li className='internal-carousel__body-card' ><ProductCard imageProduct={require("./img/products/lifejacket.png")} nameProduct={'Спасательный жилет BRP Mens Airflow PFD'} priceProduct={'320 $'}/></li>
						<li className='internal-carousel__body-card' ><ProductCard imageProduct={require("./img/products/audiopremiumsustem.png")} nameProduct={'BRP Audio-Premium System'} priceProduct={'1 000 $'} saleProduct={true}/></li>
						<li className='internal-carousel__body-card' ><ProductCard imageProduct={require("./img/products/rescueequipment.png")} nameProduct={'Спасательное снаряжение'} /></li>
						<li className='internal-carousel__body-card' ><ProductCard imageProduct={require("./img/products/audioportablesystem.png")} nameProduct={'BRP Audio-портативная система'}/></li>
						<li className='internal-carousel__body-card' ><ProductCard imageProduct={require("./img/products/garminechomapplus.png")} nameProduct={'Garmin Echomap Plus 62cv'} priceProduct={'920 $'}/></li>
						<li className='internal-carousel__body-card' ><ProductCard imageProduct={require("./img/products/tmkey.png")} nameProduct={'RF D.E.S.S.TM Key'} /></li>
						<li className='internal-carousel__body-card' ><ProductCard imageProduct={require("./img/products/mensuit.png")} nameProduct={'Мужской костюм 3мм'} priceProduct={'100 $'}/></li>
					</ul>
				</div>
				<button type='submit' className='internal-carousel__arrowright'><i className="bi bi-chevron-compact-right" style={{fontSize:'31px', color:'#2F3035'}}></i></button>
			</div>
		)
	}
}

export default InternalCarousel;