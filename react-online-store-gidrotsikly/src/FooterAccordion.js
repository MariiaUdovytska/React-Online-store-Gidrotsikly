import React from 'react';
import './css/footerAccordion.css';
import {Accordion} from 'react-bootstrap';


class FooterAccordion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expendedM: false,
			sizeWidth: true,
		}
	}

	getWindowDimensions = ()=> {
		const { innerWidth: width } = window;
		return width;
	}

	handleWindowDimensions = ()=> {
		let width = this.getWindowDimensions()
		this.setState({
			sizeWidth: width > 886
		})
	}

	componentDidMount() {
		this.handleWindowDimensions();
		window.addEventListener('resize', this.handleWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowDimensions);
	}

	render(){
		const{sizeWidth} = this.state;
		if(sizeWidth === true){
			return(
				<div className='footer__body-accordion'>
					<div className='footer__body-accordion-infoandstore'>
						<nav>
							<h3>Информация</h3>
							<ul>
								<li><a href="#">О компании</a></li>
								<li><a href="#">Контакты</a></li>
								<li><a href="#">Акции</a></li>
								<li><a href="#">Магазины</a></li>
							</ul>
						</nav>
					</div>
					<div className='footer__body-accordion-infoandstore'>
						<nav>
							<h3>Интернет-магазин</h3>
							<ul>
								<li><a href="#">Доставка</a></li>
								<li><a href="#">Оплата</a></li>
								<li><a href="#">Возврат-обмен</a></li>
								<li><a href="#">Новости</a></li>
							</ul>
						</nav>
					</div>
				</div>
			)
		} else {
			return(
				<div className='footer__body-accordion-phone'>
					<Accordion>
						<Accordion.Item eventKey="0">
							<Accordion.Header>Информация</Accordion.Header>
							<Accordion.Body>
								<ul>
									<li><a href="#">О компании</a></li>
									<li><a href="#">Контакты</a></li>
									<li><a href="#">Акции</a></li>
									<li><a href="#">Магазины</a></li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Интернет-магазин</Accordion.Header>
							<Accordion.Body>
								<ul>
									<li><a href="#">Доставка</a></li>
									<li><a href="#">Оплата</a></li>
									<li><a href="#">Возврат-обмен</a></li>
									<li><a href="#">Новости</a></li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			)
		}
		
	}
}

export default FooterAccordion;

