import React from 'react';
import './css/advancedOptions.css';


class AdvancedOptions extends React.Component {
	constructor(props) {
		super(props);
		this.state ={move:0};
	}

	clickLabel = (i) =>{
		this.setState(
			{move:i}
		)
	}

	render(){
		let value = `translateX(${-100*this.state.move}%)`;
		return (
			<div className='advanced-options'>
				<div className='advanced-options__body'>
					<div className='advanced-options__body-name'>
						<span className={((this.state.move===0)?' advanced-options__body-name-active':'advanced-options__body-name-noactive')} onClick={()=>{this.clickLabel(0)}}>Параметры</span>
						<span className={((this.state.move===1)?' advanced-options__body-name-active':'advanced-options__body-name-noactive')} onClick={()=>{this.clickLabel(1)}}>по&nbsp;марке</span>
					</div>
					<div className='advanced-options__body-items'>
						<div className='advanced-options__body-item' style={{transform: value}}>test 1</div>
						<div className='advanced-options__body-item' style={{transform: value}}>test 2222</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AdvancedOptions;