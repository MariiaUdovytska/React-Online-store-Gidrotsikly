import React from 'react';
import './css/navBar.css';
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
			<div className='nav-bar'>
				<Navbar collapseOnSelect expand="lg" variant="light" onToggle={this.listenerToggle}>
					<Container>
						<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="#features">Features</Nav.Link>
								<Nav.Link href="#pricing">Pricing</Nav.Link>
								{this.state.expendedM === true ? <Nav.Link href="#pricing">TEST</Nav.Link> : ''}
								
							</Nav>
							<Nav>
								<Nav.Link href="#deets">More deets</Nav.Link>
								<Nav.Link eventKey={2} href="#memes">
								Dank memes
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		)
	}
}

export default NavBarBootstrap;