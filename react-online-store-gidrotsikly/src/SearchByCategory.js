import React from 'react';
import './css/searchByCategory.css';
import { Form } from 'react-bootstrap';
import BasicSearchOptions from './BasicSearchOptions';


class SearchByCategory extends React.Component {
	constructor(props) {
		super(props);
		this.state = { labels: [], view: true, collapseOptions: true };
	}

	handleChange = (change) => {
		this.setState({ labels: change });
	}

	render() {
		let arrayDiv = [];
		for (let index = 0; index < this.state.labels.length; index++) {
			const element = this.state.labels[index];
			arrayDiv.push(
				<div key={index} className='search-by-category__body-common-sorting-left-items'><span>{element}</span></div>
			);
		}
		return (
			<section className='search-by-category containerM'>
				<div className='search-by-category__body'>
					<h1 className='search-by-category__body-name'>Гидроциклы</h1>
					<div className='search-by-category__body-common-sorting'>
						<div className='search-by-category__body-common-sorting-left'>
							{arrayDiv}
						</div>
						<div className='search-by-category__body-common-sorting-right'>
							<span><i className={((this.state.collapseOptions === true) ? 'bi bi-chevron-double-down' : 'bi bi-chevron-double-down rotate')} style={{ fontSize: '23px' }} onClick={() => this.setState({ collapseOptions: !this.state.collapseOptions })}></i></span>
							<div className='search-by-category__body-common-sorting-right-select'>
								<Form.Select aria-label="По полулярности">
									<option>По полулярности</option>
									<option value="1">По росту цены</option>
									<option value="2">Сперва акции</option>
								</Form.Select>
							</div>
							<span><i className="bi bi-grid" style={{ fontSize: '23px' }} onClick={() => this.setState({ view: true })}></i></span>
							<span><i className="bi bi-list-task" style={{ fontSize: '29px' }} onClick={() => this.setState({ view: false })}></i></span>
						</div>
					</div>
				</div>
				<BasicSearchOptions onChange={this.handleChange} view={this.state.view} collapseOptions={this.state.collapseOptions} />
			</section>
		);
	}
}

export default SearchByCategory;