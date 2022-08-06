import React from 'react';
import AdvancedOptionsParametres from './AdvancedOptionsParametres';
import ButtonChoose from './ButtonChoose';
import './css/advancedOptions.css';


class AdvancedOptions extends React.Component {
	constructor(props) {
		super(props);
		this.state = { move: 0 };
	}

	clickLabel = (i) => {
		this.setState(
			{ move: i }
		)
	}

	render() {
		let value = `translateX(${-100 * this.state.move}%)`;
		return (
			<div className='advanced-options'>
				<div className='advanced-options__body'>
					<div className='advanced-options__body-name'>
						<span className={((this.state.move === 0) ? ' advanced-options__body-name-active' : 'advanced-options__body-name-noactive')} onClick={() => { this.clickLabel(0) }}>Параметры</span>
						<span className={((this.state.move === 1) ? ' advanced-options__body-name-active' : 'advanced-options__body-name-noactive')} onClick={() => { this.clickLabel(1) }}>по&nbsp;марке</span>
					</div>
					<div className='advanced-options__body-items'>
						<div className='advanced-options__body-item' style={{ transform: value }}>
							<AdvancedOptionsParametres onChange={(change) => this.props.onChange(change)} />
						</div>
						<div className='advanced-options__body-item' style={{ transform: value }}>
							<div className='advanced-options__body-item-inputbtn'>
								<input className='advanced-options__body-item-input' type='text' placeholder='Введите марку' aria-label='Введите марку' />
								<button className='advanced-options__body-item-btn' type='submit'><i className="bi bi-search search__body-btn-phone-img" style={{ fontSize: '24px', color: '#2F3035' }}></i></button>
							</div>
							<ButtonChoose />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AdvancedOptions;