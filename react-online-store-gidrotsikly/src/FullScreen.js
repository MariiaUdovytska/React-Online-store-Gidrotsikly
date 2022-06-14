import React from 'react';
import './css/fullScreen.css';
import {Button} from 'react-bootstrap';




class FullScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<section className='full-screen containerM'>
				<div className='.full-screen__body'>
				test test test
					<Button variant='primary'>test</Button>
				</div>
			</section>
		)
	}
}

export default FullScreen;