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
					<Navbar collapseOnSelect expand={true} variant="light">
						<Container>
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
								<Nav>
									<Nav.Link href="#features">Магазины</Nav.Link>
									<Nav.Link href="#pricing">Акции</Nav.Link>
									<Nav.Link href="#pricing">Доставка и оплата</Nav.Link>
								</Nav>
								<Navbar.Brand href="#home"><img src={logo} alt="logo" style={{width: '80px', height: '76px'}} /></Navbar.Brand>
								<Nav className="justify-content-end">
									<Nav.Link href="#deets">Город,  ул. Адрес  25</Nav.Link>
								</Nav>
							</Navbar.Collapse>
							<Nav className="justify-content-end">
								<Nav.Link href="#features" className='no-hover'> <i className="bi bi-heart" style={{ display: 'inline-flex', fontSize: '20px', color: '#2F3035'}}></i></Nav.Link>
								<Nav.Link href="#features" className='no-hover'><i className="bi bi-person-fill" style={{ display: 'inline-flex', fontSize: '22px', color: '#2F3035'}}></i></Nav.Link>
								<Nav.Link href="#features" className='no-hover'><i className="bi bi-cart2" style={{ display: 'inline-flex', fontSize: '22px', color: '#2F3035'}}></i></Nav.Link>
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

