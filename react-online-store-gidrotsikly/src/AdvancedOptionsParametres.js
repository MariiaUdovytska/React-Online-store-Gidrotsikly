import React from 'react';
import './css/advancedOptionsParametres.css';
import {Accordion, Form} from 'react-bootstrap';
import Range from './Range';


class AdvancedOptionsParametres extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			presenceNal:false,
			presenceOrder:false,
			newAll:false,
			newNew:false,
			newSale:false,
			powerValueFirst:"90",
			powerValueSecond:"90",
			powerValueLast:"90",
			brandBrp:false,
			brandSpark2:false,
			brandSpark3:false,
			modelSd2:false,
			modelSd90:false,
			modelSd155:false,
			modelSd230:false,
			countriesIt:false,
			countriesPl:false,
			countriesBr:false,
			countriesUSA:false,
			stockSale:false,
			stockNew:false,
			stockHit:false,
			stockDiler:false
		}
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
									<input type="checkbox" name="presence" id="presence" 
										checked={this.state.presenceNal}
										onChange={()=>this.setState({presenceNal:!this.state.presenceNal})}
									/>
									<label htmlFor="presence">В наличие</label>
								</div>
								<div className='advanced-options-item__body-presence-choice'>
									<input type="checkbox" name="presence2" id="presence2" 
										checked={this.state.presenceOrder}
										onChange={()=>this.setState({presenceOrder:!this.state.presenceOrder})}
									/>
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
									<input type="checkbox" name="new" id="new"
										checked={this.state.newAll}
										onChange={()=>this.setState({newAll:!this.state.newAll})}
									/>
									<label htmlFor="new">Все</label>
								</div>
								<div className='advanced-options-item__body-new-choice'>
									<input type="checkbox" name="new2" id="new2"
										checked={this.state.newNew}
										onChange={()=>this.setState({newNew:!this.state.newNew})}
									/>
									<label htmlFor="new2">Новинки</label>
								</div>
								<div className='advanced-options-item__body-new-choice'>
									<input type="checkbox" name="new3" id="new3"
										checked={this.state.newSale}
										onChange={()=>this.setState({newSale:!this.state.newSale})}
									/>
									<label htmlFor="new3">Акции</label>
								</div>
							</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='advanced-options-item__body-price'>
						<Accordion alwaysOpen>
							<Accordion.Item>
							<Accordion.Header>Цена</Accordion.Header>
							<Accordion.Body>
								<div className='advanced-options-item__body-price-choice'><Range/></div>
							</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='advanced-options-item__body-power'>
						<div className='advanced-options-item__body-power-fir'>
							<div className='advanced-options-item__body-power-first'>
								<span>Мощность, л.с.</span>
								<Form.Select size="sm" value={this.state.powerValueFirst} onChange={(event)=>this.setState({powerValueFirst:event.target.value})}>
									<option value="90">90</option>
									<option value="130">130</option>
									<option value="154">154</option>
									<option value="230">230</option>
									<option value="300">300</option>
								</Form.Select>
							</div>
						</div>
						<div className='advanced-options-item__body-power-fir'>
							<div className='advanced-options-item__body-power-second'>
								<span>Мощность двигателя, л.с.</span>
								<Form.Select size="sm" value={this.state.powerValueSecond} onChange={(event)=>this.setState({powerValueSecond:event.target.value})}>
									<option value="1">90</option>
									<option value="2">130</option>
									<option value="3">154</option>
									<option value="4">230</option>
									<option value="5">300</option>
								</Form.Select>
							</div>
						</div>
						<div className='advanced-options-item__body-power-fir'>
							<div className='advanced-options-item__body-power-last'>
								<span>Макс. скорость</span>
								<Form.Select size="sm" value={this.state.powerValueLast} onChange={(event)=>this.setState({powerValueLast:event.target.value})}>
									<option value="1">90</option>
									<option value="2">130</option>
									<option value="3">154</option>
									<option value="4">230</option>
									<option value="5">300</option>
								</Form.Select>
							</div>
						</div>
						
					</div>
					<div className='advanced-options-item__body-brand'>
						<Accordion alwaysOpen>
							<Accordion.Item>
							<Accordion.Header>Бренд</Accordion.Header>
							<Accordion.Body>
								<div className='advanced-options-item__body-brand-choice'>
									<input type="checkbox" name="brand" id="brand" 
										checked={this.state.brandBrp}
										onChange={()=>this.setState({brandBrp:!this.state.brandBrp})}/>
									<label htmlFor="brand">BRP</label>
								</div>
								<div className='advanced-options-item__body-brand-choice'>
									<input type="checkbox" name="brand2" id="brand2"
										checked={this.state.brandSpark2}
										onChange={()=>this.setState({brandSpark2:!this.state.brandSpark2})}
									/>
									<label htmlFor="brand2">Spark 2</label>
								</div>
								<div className='advanced-options-item__body-brand-choice'>
									<input type="checkbox" name="brand3" id="brand3"
										checked={this.state.brandSpark3}
										onChange={()=>this.setState({brandSpark3:!this.state.brandSpark3})}
									/>
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
									<input type="checkbox" name="model" id="model"
										checked={this.state.modelSd2}
										onChange={()=>this.setState({modelSd2:!this.state.modelSd2})}
									/>
									<label htmlFor="model">Sea-doo Spark 2</label>
								</div>
								<div className='advanced-options-item__body-model-choice'>
									<input type="checkbox" name="model2" id="model2"
										checked={this.state.modelSd90}
										onChange={()=>this.setState({modelSd90:!this.state.modelSd90})}
									/>
									<label htmlFor="model2">SeaDoo Spark 90 </label>
								</div>
								<div className='advanced-options-item__body-model-choice'>
									<input type="checkbox" name="model3" id="model3"
										checked={this.state.modelSd155}
										onChange={()=>this.setState({modelSd155:!this.state.modelSd155})}
									/>
									<label htmlFor="model3">SeaDoo GTI 155</label>
								</div>
								<div className='advanced-options-item__body-model-choice'>
									<input type="checkbox" name="model4" id="model4"
										checked={this.state.modelSd230}
										onChange={()=>this.setState({modelSd230:!this.state.modelSd230})}
									/>
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
									<input type="checkbox" name="choicesale" id="choicesale"
										checked={this.state.stockSale}
										onChange={()=>this.setState({stockSale:!this.state.stockSale})}
									/>
									<label htmlFor="choicesale"><span className='advanced-options-item__body-stock-choice-span-sale'>Sale</span></label>
								</div>
								<div className='advanced-options-item__body-stock-choice'>
									<input type="checkbox" name="choicenew" id="choicenew"
										checked={this.state.stockNew}
										onChange={()=>this.setState({stockNew:!this.state.stockNew})}
									/>
									<label htmlFor="choicenew"><span className='advanced-options-item__body-stock-choice-span-new'>NEW</span></label>
								</div>
								<div className='advanced-options-item__body-stock-choice'>
									<input type="checkbox" name="choicehit" id="choicehit"
										checked={this.state.stockHit}
										onChange={()=>this.setState({stockHit:!this.state.stockHit})}
									/>
									<label htmlFor="choicehit"><span className='advanced-options-item__body-stock-choice-span-hit'>HIT</span></label>
								</div>
								<div className='advanced-options-item__body-stock-choice'>
									<input type="checkbox" name="choicediler" id="choicediler"
										checked={this.state.stockDiler}
										onChange={()=>this.setState({stockDiler:!this.state.stockDiler})}
									/>
									<label htmlFor="choicediler"><span className='advanced-options-item__body-stock-choice-span-diler'>ДИЛЕР</span></label>
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
									<input type="checkbox" name="countries" id="countries"
										checked={this.state.countriesIt}
										onChange={()=>this.setState({countriesIt:!this.state.countriesIt})}
									/>
									<label htmlFor="countries">Италия</label>
								</div>
								<div className='advanced-options-item__body-countries-choice'>
									<input type="checkbox" name="countries2" id="countries2"
										checked={this.state.countriesPl}
										onChange={()=>this.setState({countriesPl:!this.state.countriesPl})}
									/>
									<label htmlFor="countries2">Польша</label>
								</div>
								<div className='advanced-options-item__body-countries-choice'>
									<input type="checkbox" name="countries3" id="countries3"
										checked={this.state.countriesBr}
										onChange={()=>this.setState({countriesBr:!this.state.countriesBr})}
									/>
									<label htmlFor="countries3">Британия</label>
								</div>
								<div className='advanced-options-item__body-countries-choice'>
									<input type="checkbox" name="countries4" id="countries4"
										checked={this.state.countriesUSA}
										onChange={()=>this.setState({countriesUSA:!this.state.countriesUSA})}
									/>
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