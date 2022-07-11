import React from 'react';
import './css/searchByCategory.css';
import {Form} from 'react-bootstrap';

function SearchByCategory() {
	return (
		<section className='search-by-category containerM'>
			<div className='search-by-category__body'>
				<h1 className='search-by-category__body-name'>Гидроциклы</h1>
				<div className='search-by-category__body-common-sorting'>
					<div className='search-by-category__body-common-sorting-left'>
						<div className='search-by-category__body-common-sorting-left-items'><span>Полноприводные</span></div>
						<div className='search-by-category__body-common-sorting-left-items'><span>от 5000</span></div>
						<div className='search-by-category__body-common-sorting-left-items'><span>BRP</span></div>
						<div className='search-by-category__body-common-sorting-left-items'><span>еще</span></div>
					</div>
					<div className='search-by-category__body-common-sorting-right'>
						<div className='search-by-category__body-common-sorting-right-select'>
							<Form.Select aria-label="По полулярности">
								<option>По полулярности</option>
								<option value="1">По росту цены</option>
								<option value="2">Сперва акции</option>
							</Form.Select>
						</div>
						<span><i className="bi bi-grid" style={{fontSize:'23px'}}></i></span>
						<span><i className="bi bi-list-task" style={{fontSize:'29px'}}></i></span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SearchByCategory;