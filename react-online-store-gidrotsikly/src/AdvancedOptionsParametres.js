import React from 'react';
import './css/advancedOptionsParametres.css';
import {Accordion} from 'react-bootstrap';


class AdvancedOptionsParametres extends React.Component {
	constructor(props) {
		super(props);
	}


	render(){
		
		return (
			<div className='advanced-options-item'>
				<div className='advanced-options-item__body'>
					<div className='advanced-options-item__body-presence'>
						<Accordion alwaysOpen>
							<Accordion.Item>
							<Accordion.Header>Наличие</Accordion.Header>
							<Accordion.Body>
								<div className='advanced-options-item__body-presence-choice'>
									<input type="checkbox" name="presence" id="presence"/>
									<label htmlFor="presence">В наличие</label>
								</div>
								<div className='advanced-options-item__body-presence-choice'>
									<input type="checkbox" name="presence2" id="presence2"/>
									<label htmlFor="presence2">Под заказ</label>
								</div>
							</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='advanced-options-item__body-new'>
						<Accordion alwaysOpen>
							<Accordion.Item>
							<Accordion.Header>Новинки</Accordion.Header>
							<Accordion.Body>
								<div className='advanced-options-item__body-new-choice'>
									<input type="checkbox" name="new" id="new"/>
									<label htmlFor="new">Все</label>
								</div>
								<div className='advanced-options-item__body-new-choice'>
									<input type="checkbox" name="new2" id="new2"/>
									<label htmlFor="new2">Новинки</label>
								</div>
								<div className='advanced-options-item__body-new-choice'>
									<input type="checkbox" name="new3" id="new3"/>
									<label htmlFor="new3">Акции</label>
								</div>
							</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='advanced-options-item__body-brand'>
						<Accordion alwaysOpen>
							<Accordion.Item>
							<Accordion.Header>Бренд</Accordion.Header>
							<Accordion.Body>
								<div className='advanced-options-item__body-brand-choice'>
									<input type="checkbox" name="brand" id="brand"/>
									<label htmlFor="brand">BRP</label>
								</div>
								<div className='advanced-options-item__body-brand-choice'>
									<input type="checkbox" name="brand2" id="brand2"/>
									<label htmlFor="brand2">Spark 2</label>
								</div>
								<div className='advanced-options-item__body-brand-choice'>
									<input type="checkbox" name="brand3" id="brand3"/>
									<label htmlFor="brand3">Spark 3</label>
								</div>
							</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='advanced-options-item__body-model'>
						<Accordion alwaysOpen>
							<Accordion.Item>
							<Accordion.Header>Модель</Accordion.Header>
							<Accordion.Body>
								<div className='advanced-options-item__body-model-input'>
									<input type='text' placeholder='Введите модель '></input>
								</div>
								<div className='advanced-options-item__body-model-choice'>
									<input type="checkbox" name="model" id="model"/>
									<label htmlFor="model">Sea-doo Spark 2</label>
								</div>
								<div className='advanced-options-item__body-model-choice'>
									<input type="checkbox" name="model2" id="model2"/>
									<label htmlFor="model2">SeaDoo Spark 90 </label>
								</div>
								<div className='advanced-options-item__body-model-choice'>
									<input type="checkbox" name="model3" id="model3"/>
									<label htmlFor="model3">SeaDoo GTI 155</label>
								</div>
								<div className='advanced-options-item__body-model-choice'>
									<input type="checkbox" name="model4" id="model4"/>
									<label htmlFor="model4">SeaDoo GTR 230</label>
								</div>
							</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='advanced-options-item__body-stock'>
						<Accordion alwaysOpen>
							<Accordion.Item>
							<Accordion.Header>Акции</Accordion.Header>
							<Accordion.Body>
								<div className='advanced-options-item__body-stock-choice'>
									<div className='advanced-options-item__body-stock-choice-sale'><span>Sale</span></div>
								</div>
								<div className='advanced-options-item__body-stock-choice'>
									<div className='advanced-options-item__body-stock-choice-new'><span>NEW</span></div>
								</div>
								<div className='advanced-options-item__body-stock-choice'>
									<div className='advanced-options-item__body-stock-choice-new'><span>HIT</span></div>
								</div>
								<div className='advanced-options-item__body-stock-choice'>
									<div className='advanced-options-item__body-stock-choice-diler'><span>ДИЛЕР</span></div>
								</div>
							</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='advanced-options-item__body-countries'>
						<Accordion alwaysOpen>
							<Accordion.Item>
							<Accordion.Header>Страны</Accordion.Header>
							<Accordion.Body>
								<div className='advanced-options-item__body-countries-choice'>
									<input type="checkbox" name="countries" id="countries"/>
									<label htmlFor="countries">Италия</label>
								</div>
								<div className='advanced-options-item__body-countries-choice'>
									<input type="checkbox" name="countries2" id="countries2"/>
									<label htmlFor="countries2">Польша</label>
								</div>
								<div className='advanced-options-item__body-countries-choice'>
									<input type="checkbox" name="countries3" id="countries3"/>
									<label htmlFor="countries3">Британия</label>
								</div>
								<div className='advanced-options-item__body-countries-choice'>
									<input type="checkbox" name="countries4" id="countries4"/>
									<label htmlFor="countries4">США</label>
								</div>
							</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
				</div>
			</div>
		);
	}
}

export default AdvancedOptionsParametres;