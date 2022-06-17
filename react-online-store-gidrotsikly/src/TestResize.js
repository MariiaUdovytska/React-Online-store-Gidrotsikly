import React from 'react';

class NavBarBootstrap extends React.Component {
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
			sizeWidth: width > 880
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
				<div className='nav-bar containerM'>
					big
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

export default NavBarBootstrap;

