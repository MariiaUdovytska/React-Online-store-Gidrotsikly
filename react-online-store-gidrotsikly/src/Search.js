import React from 'react';
import './css/search.css';

class Search extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<section className='search containerM'>
				<div className='search__body'>
					<ul className='search__body-item'>
						<li className='search__body-items'>Поиск по номеру</li>
						<li className='search__body-items'>Поиск по марке</li>
						<li className='search__body-items'>Поиск по названию товара</li>
					</ul>
					<div className='search__body-inputbtn'>
						<input className='search__body-input' type='number' placeholder='Введите...' aria-label='Number'/>
						<button className='search__body-btn' type='submit'>искать</button>
					</div>
				</div>
			</section>
		)
	}
}

export default Search;