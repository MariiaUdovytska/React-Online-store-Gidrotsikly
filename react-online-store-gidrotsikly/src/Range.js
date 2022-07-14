import React from 'react';
import './css/range.css';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';


class Range extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value5: {
				min: 200000,
				max: 350000,
			}
		};
	}

	render(){
		return (
			<div className='range'>
				<form className="form">
					<InputRange
						draggableTrack
						maxValue={500000}
						minValue={100000}
						onChange={value => this.setState({ value5: value })}
						onChangeComplete={value => console.log(value)}
						value={this.state.value5} />
				</form>
			</div>
		);
	}
}

export default Range;