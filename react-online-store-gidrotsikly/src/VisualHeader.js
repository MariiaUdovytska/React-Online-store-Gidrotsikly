import React from 'react';
import './css/visualHeader.css';
import {Carousel} from 'react-bootstrap';
import banner1 from './img/carouselHeader/banner1.jpg';
import banner2 from './img/carouselHeader/banner2.jpg';
import banner3 from './img/carouselHeader/banner3.jpg';
import banner4 from './img/carouselHeader/banner4.jpg';
import advertisingMotor from './img/advertising/advertisingMotor.jpg';


class VisualHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className='full-screen__body-banner'>
				<div className='full-screen__body-banner-carousel'>
					<Carousel interval={null}>
						<Carousel.Item>
							<img className="d-block w-100" src={banner1} alt="First slide"/>
						</Carousel.Item>
						<Carousel.Item >
							<img className="d-block w-100" src={banner2} alt="Second slide"/>
						</Carousel.Item>
						<Carousel.Item>
							<img className="d-block w-100" src={banner3} alt="Third slide"/>
						</Carousel.Item>
						<Carousel.Item>
							<img className="d-block w-100" src={banner4} alt="Third slide"/>
						</Carousel.Item>
					</Carousel>
				</div>
				<div className='full-screen__body-banner-advertising'>
					<div className='full-screen__body-banner-advertising-body'>
						<div className='full-screen__body-banner-advertising-up'>
							<div className='full-screen__body-banner-advertising-up-price'>
								<div>
									<span className='full-screen__body-banner-advertising-up-span'>акция</span>
								</div>
								<div>
									<span>1 000 $</span>
									<span>1 200 $</span>
								</div>
							</div>
							
							<figure className='full-screen__body-banner-advertising-up'>
								<img src={advertisingMotor} alt="motor"></img>
								<figcaption>Лодочный мотор <br/>Suzuki DF9.9BRS</figcaption>
							</figure>
						</div>
						<div className='full-screen__body-banner-advertising-down'>
							<p className='full-screen__body-banner-advertising-down-p'>Акция действует до</p>
							<p className='full-screen__body-banner-advertising-down-p'>31.08.2020</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default VisualHeader;