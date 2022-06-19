import React from 'react';
import './css/menuBurger.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from './img/logo/logo.svg';

class MenuBurger extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expendedM: false,
			sizeWidth: true
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
		window.addEventListener('resize', this.handleWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowDimensions);
	}

	render(){
		const{sizeWidth} = this.state;
		if(sizeWidth === true){
			return(
				<div className='nav-bar'>
					<Navbar collapseOnSelect expand={true}>
						<Container>
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
								<Nav className='nav-bar__items-left'>
									<Nav.Link className='nav-bar__items-a' href="#">Магазины</Nav.Link>
									<Nav.Link className='nav-bar__items-a' href="#">Акции</Nav.Link>
									<Nav.Link className='nav-bar__items-a' href="#">Доставка и оплата</Nav.Link>
								</Nav>
								<Navbar.Brand className='nav-bar__items-brand' href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
								<Nav className='nav-bar__items-adress'>
									<Nav.Link className='nav-bar__items-adress-a' href="#"><i class="bi bi-geo-alt" style={{ display: 'inline-flex', fontSize: '30px', color: '#2F3035'}}></i>Город,  ул. Адрес  25</Nav.Link>
								</Nav>
							</Navbar.Collapse>
							<Nav className="nav-bar__items-right">
								<Nav.Link href="#" className='no-hover nav-bar__items-right-a'> <i className="bi bi-heart" style={{ display: 'inline-flex', fontSize: '20px', color: '#2F3035'}}></i></Nav.Link>
								<Nav.Link href="#" className='no-hover nav-bar__items-right-a'><i className="bi bi-person-fill" style={{ display: 'inline-flex', fontSize: '24px', color: '#2F3035'}}></i></Nav.Link>
								<Nav.Link href="#" className='no-hover nav-bar__items-right-a'><i className="bi bi-cart2" style={{ display: 'inline-flex', fontSize: '22px', color: '#2F3035'}}></i></Nav.Link>
							</Nav>
						</Container>
					</Navbar>
			</div>
			)
		} else {
			return(
				<div className='nav-bar containerM'>
					notttttttt
				</div>
			)
		}
		
	}
}

export default MenuBurger;

