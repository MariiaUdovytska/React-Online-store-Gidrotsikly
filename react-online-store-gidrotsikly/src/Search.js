import React from 'react';
import './css/search.css';

class Search extends React.Component {
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
		let inputType = '';
		switch (this.state.move) {
			case 0: inputType='number';	break;
			case 1: inputType='text';	break;
			case 2: inputType='text';	break;
			default:
				break;
		}
		return(
			<section className='search containerM'>
				<div className='search__body'>
					<ul className='search__body-item'>
						<li className={((this.state.move===0)?'search__body-items-active':'search__body-items')} onClick={()=>{this.clickLabel(0)}}>Поиск по номеру</li>
						<li className={((this.state.move===1)?'search__body-items-active':'search__body-items')} onClick={()=>{this.clickLabel(1)}}>Поиск по марке</li>
						<li className={((this.state.move===2)?'search__body-items-active':'search__body-items')} onClick={()=>{this.clickLabel(2)}}>Поиск по названию товара</li>
					</ul>
					<div className='search__body-inputbtn'>
						<input className='search__body-input' type={inputType} placeholder='Введите...' aria-label='Number'/>
						<button className='search__body-btn' type='submit'>искать</button>
						<button className='search__body-btn-phone' type='submit'><i className="bi bi-search search__body-btn-phone-img" style={{fontSize: '24px', color: '#2F3035'}}></i></button>
					</div>
				</div>
			</section>
		)
	}
}

export default Search;