import React from 'react';
import './css/menuBurger.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from './img/logo/logo.svg';
import {Link} from 'react-router-dom';

class MenuBurger extends React.Component {
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

	render(){
		const{sizeWidth} = this.state;
		if(sizeWidth === true){
			return(
				<div className='nav-bar containerM'>
					<Navbar collapseOnSelect expand={true}>
						<Container>
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
								<Nav className='nav-bar__items-left'>
									<Nav.Link className='nav-bar__items-a' href="#">Магазины</Nav.Link>
									<Nav.Link className='nav-bar__items-a' href="#">Акции</Nav.Link>
									<Nav.Link className='nav-bar__items-a' href="#">Доставка и оплата</Nav.Link>
								</Nav>
								<Link className='nav-bar__items-brand' to="/home"><img src={logo} alt="logo"/></Link>
								<Nav className='nav-bar__items-adress'>
									<Nav.Link className='nav-bar__items-adress-a' href="#"><i className="bi bi-geo-alt" style={{ display: 'inline-flex', fontSize: '30px', color: '#2F3035'}}></i>Город,  ул. Адрес  25</Nav.Link>
								</Nav>
							</Navbar.Collapse>
							<Nav className="nav-bar__items-right">
								<Nav.Link href="#" className='nav-bar__items-right-a'><i className="bi bi-heart" style={{ display: 'inline-flex', fontSize: '20px', color: '#2F3035'}}></i></Nav.Link>
								<Nav.Link href="#" className='nav-bar__items-right-a'><i className="bi bi-person-fill" style={{ display: 'inline-flex', fontSize: '24px', color: '#2F3035'}}></i></Nav.Link>
								<Nav.Link href="#" className='nav-bar__items-right-a'><i className="bi bi-cart2" style={{ display: 'inline-flex', fontSize: '22px', color: '#2F3035'}}></i></Nav.Link>
							</Nav>
						</Container>
					</Navbar>
					<div className='nav-bar__navproducts'>
						<ul className='nav-bar__navproducts-item'>
							<li className='nav-bar__navproducts-items'><a href="#">Квадроциклы</a></li>
							<li className='nav-bar__navproducts-items'><a href="#">Катера</a></li>
							<li className='nav-bar__navproducts-items nav-bar__navproducts-items-active'><Link to="/jetSkisPage">Гидроциклы</Link></li>
							<li className='nav-bar__navproducts-items'><a href="#">Лодки</a></li>
							<li className='nav-bar__navproducts-items'><a href="#">Вездеходы</a></li>
							<li className='nav-bar__navproducts-items'><a href="#">Снегоходы</a></li>
							<li className='nav-bar__navproducts-items'><a href="#">Двигатели</a></li>
							<li className='nav-bar__navproducts-items'><a href="#">Запчасти</a></li>
						</ul>
					</div>
				</div>
			)
		} else {
			return(
				<div className='nav-bar-phone containerM'>
					<div className='nav-bar-phone__burger'>
						<Navbar collapseOnSelect expand={false} onToggle={this.listenerToggle}>
							<Container>
								<Navbar.Toggle aria-controls="responsive-navbar-nav" />
								<Navbar.Brand className='nav-bar-phone__items-brand'><Link to="/home">DRIVE MOTO</Link></Navbar.Brand>
								<Navbar.Collapse id="responsive-navbar-nav">
									<Nav>
										<Nav.Link className='nav-bar-phone__items-a' href="#"><i className="bi bi-person-fill" style={{ display: 'inline-flex', paddingRight: '23px', fontSize: '17px', color: '#2F3035'}}></i>Войти</Nav.Link>
										<Nav.Link className='nav-bar-phone__items-a' href="#"><i className="bi bi-person-fill" style={{ display: 'inline-flex', paddingRight: '23px', fontSize: '17px', color: '#2F3035'}}></i>Регистрация</Nav.Link>
										<Nav.Link className='nav-bar-phone__items-a' href="#"><i className="bi bi-heart" style={{ display: 'inline-flex', paddingRight: '23px', fontSize: '17px', color: '#2F3035'}}></i>Избранное</Nav.Link>
										<Nav.Link className='nav-bar-phone__items-a' href="#"><i className="bi bi-cart2" style={{ display: 'inline-flex', paddingRight: '23px',fontSize: '17px', color: '#2F3035'}}></i>Корзина</Nav.Link>
										<Nav.Link className='nav-bar-phone__items-a' href="#"><i className="bi bi-house-door"  style={{ display: 'inline-flex', paddingRight: '23px',fontSize: '17px', color: '#2F3035'}}></i>Магазины</Nav.Link>
										<Nav.Link className='nav-bar-phone__items-a' href="#"><i className="bi bi-percent" style={{ display: 'inline-flex', paddingRight: '23px', fontSize: '17px', color: '#2F3035'}}></i>Акции</Nav.Link>
										<Nav.Link className='nav-bar-phone__items-a' href="#"><i className="bi bi-box2" style={{ display: 'inline-flex', paddingRight: '23px', fontSize: '17px', color: '#2F3035'}}></i>Доставка и оплата</Nav.Link>
										<Nav.Link className='nav-bar-phone__navproducts-items' href="#">Квадроциклы</Nav.Link>
										<Nav.Link className='nav-bar-phone__navproducts-items' href="#">Катера</Nav.Link>
										<Nav.Link className='nav-bar-phone__navproducts-items nav-bar-phone__navproducts-items-active' href="#"><Link to="/jetSkisPage">Гидроциклы</Link></Nav.Link>
										<Nav.Link className='nav-bar-phone__navproducts-items' href="#">Вездеходы</Nav.Link>
										<Nav.Link className='nav-bar-phone__navproducts-items' href="#">Снегоходы</Nav.Link>
										<Nav.Link className='nav-bar-phone__navproducts-items' href="#">Двигатели</Nav.Link>
										<Nav.Link className='nav-bar-phone__navproducts-items' href="#">Запчасти</Nav.Link>
									</Nav>
									<Nav className='nav-bar-phone__items-adress'>
										<Nav.Link href="#"><i className="bi bi-geo-alt" style={{ display: 'inline-flex', fontSize: '30px', color: '#2F3035'}}></i>Город,  ул. Адрес  25</Nav.Link>
									</Nav>
								</Navbar.Collapse>
							</Container>
						</Navbar>
					</div>
					
					<Nav className="nav-bar-phone__items-right">
						<Nav.Link href="#" className='nav-bar-phone__items-right-a' ><i className="bi bi-heart " style={{ fontSize: '20px', color: '#2F3035'}}></i></Nav.Link>
						<Nav.Link href="#" className='nav-bar-phone__items-right-a'><i className="bi bi-person-fill " style={{ fontSize: '24px', color: '#2F3035'}}></i></Nav.Link>
						<Nav.Link href="#" className='nav-bar-phone__items-right-a'><i className="bi bi-cart2 " style={{ fontSize: '22px', color: '#2F3035'}}></i></Nav.Link>
					</Nav>
				</div>
			)
		}
		
	}
}

export default MenuBurger;

