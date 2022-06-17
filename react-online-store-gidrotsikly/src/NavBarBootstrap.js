import React from 'react';
import './css/menuBurger.css';
import {Navbar, Nav, Container} from 'react-bootstrap';


class NavBarBootstrap extends React.Component {
	constructor(props) {
		super(props);
		this.state = {expendedM: false}
	}

	listenerToggle = (expanded)=> {
		this.setState({
			expendedM: expanded
		});
	}

	render(){
		return(
			<div className='nav-bar containerM'>
				<Navbar collapseOnSelect expand="lg" variant="light" onToggle={this.listenerToggle}>
					<Container>
						
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						{this.state.expendedM === true ?<Navbar.Brand href="#home">logo Center</Navbar.Brand> : ''}
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav>
								<Nav.Link href="#features">Магазины</Nav.Link>
								<Nav.Link href="#pricing">Акции</Nav.Link>
								<Nav.Link href="#pricing">Доставка и оплата</Nav.Link>
								{this.state.expendedM === true ? <Nav.Link href="#pricing">TEST</Nav.Link> : ''}
								
							</Nav>
							{this.state.expendedM === false ?<Navbar.Brand href="#home">logo Center</Navbar.Brand> : ''}
							<Nav className="justify-content-end">
								<Nav.Link href="#deets">Город,  ул. Адрес  25</Nav.Link>
							</Nav>
						</Navbar.Collapse>
						<Nav className="justify-content-end">
							<Nav.Link href="#features" className='no-hover'> <i class="bi bi-heart" style={{ display: 'inline-flex', fontSize: '20px', color: '#2F3035'}}></i></Nav.Link>
							<Nav.Link href="#features" className='no-hover'><i class="bi bi-person-fill" style={{ display: 'inline-flex', fontSize: '22px', color: '#2F3035'}}></i></Nav.Link>
							<Nav.Link href="#features" className='no-hover'><i class="bi bi-cart2" style={{ display: 'inline-flex', fontSize: '22px', color: '#2F3035'}}></i></Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			</div>
		)
	}
}

export default NavBarBootstrap;