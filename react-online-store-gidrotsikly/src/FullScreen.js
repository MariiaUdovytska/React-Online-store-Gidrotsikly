import React from 'react';
import './css/fullScreen.css';
import MenuBurger from './MenuBurger';
import VisualHeader from './VisualHeader';


class FullScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<section className='full-screen containerM'>
				<div className='full-screen__body'>
					<MenuBurger/>
					<VisualHeader/>
				</div>
			</section>
		)
	}
}

export default FullScreen;