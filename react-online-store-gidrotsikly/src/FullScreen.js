import React from 'react';
import './css/fullScreen.css';
import MenuBurger from './MenuBurger';
import NavBarBootstrap from './NavBarBootstrap';


class FullScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<section className='full-screen containerM'>
				<div className='full-screen__body'>
					<MenuBurger/>
					testtttttt
				</div>
			</section>
		)
	}
}

export default FullScreen;