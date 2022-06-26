import React from 'react';
import './css/visualHeader.css';
import {Carousel} from 'react-bootstrap';
import banner1 from './img/carouselHeader/banner1.jpg';
import banner2 from './img/carouselHeader/banner2.jpg';
import banner3 from './img/carouselHeader/banner3.jpg';

class VisualHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
				<Carousel>
					<Carousel.Item interval={1000}>
						<img
							className="d-block w-100"
							src={banner1}
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img
							className="d-block w-100"
							src={banner2}
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={banner3}
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>
		)
	}
}

export default VisualHeader;