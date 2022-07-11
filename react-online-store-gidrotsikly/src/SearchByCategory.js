import React from 'react';
import './css/searchByCategory.css';
import {Accordion} from 'react-bootstrap';

function SearchByCategory() {
	return (
		<section className='search-by-category containerM'>
			<div className='search-by-category__body'>
				<h1 className='search-by-category__body-name'>Гидроциклы</h1>
				<div className='search-by-category__body-commonParameters'>
					<div className='search-by-category__body-commonParameters-left'>
						<span>Полноприводные</span>
						<span>от 5000</span>
						<span>BRP</span>
						<span>еще</span>
					</div>
					<div className='search-by-category__body-commonParameters-right'>
						<div className='search-by-category__body-commonParameters-right-accordion'>
							<Accordion>
								<Accordion.Item eventKey="1">
									<Accordion.Header>По полулярности</Accordion.Header>
									<Accordion.Body>
										<ul>
											<li><span>По полулярности</span></li>
											<li><span>По цене</span></li>
											<li><span>Сначала акции</span></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
						<span><i className="bi bi-grid" style={{width:'23px', height:'23px'}}></i></span>
						<span><i className="bi bi-list-task" style={{width:'23px', height:'23px'}}></i></span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SearchByCategory;