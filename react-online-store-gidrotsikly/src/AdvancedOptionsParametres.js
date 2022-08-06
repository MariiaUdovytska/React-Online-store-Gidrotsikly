import React from 'react';
import './css/advancedOptionsParametres.css';
import { Accordion, Form } from 'react-bootstrap';
import Range from './Range';


class AdvancedOptionsParametres extends React.Component {
	defaultState = {};
	constructor(props) {
		super(props);
		this.state = {
			presenceNal: false,
			presenceOrder: false,
			newAll: false,
			newNew: false,
			newSale: false,
			powerValueFirst: "90",
			powerValueSecond: "90",
			powerValueLast: "90",
			brandBrp: false,
			brandSpark2: false,
			brandSpark3: false,
			modelSd2: false,
			modelSd90: false,
			modelSd155: false,
			modelSd230: false,
			countriesIt: false,
			countriesPl: false,
			countriesBr: false,
			countriesUSA: false,
			stockSale: false,
			stockNew: false,
			stockHit: false,
			stockDiler: false
		}
		this.defaultState = { ...this.state };
	}

	handleClickReset = () => {
		this.setState(this.defaultState, this.hadndleUpdate);
	}

	hadndleUpdate = () => {
		let result = [];
		if (this.state.presenceNal !== this.defaultState.presenceNal)
			result.push("В наличие");
		if (this.state.presenceOrder !== this.defaultState.presenceOrder)
			result.push("Под заказ");
		if (this.state.newAll !== this.defaultState.newAll)
			result.push("Все");
		if (this.state.newNew !== this.defaultState.newNew)
			result.push("Новинки");
		if (this.state.newSale !== this.defaultState.newSale)
			result.push("Акции");
		if (this.state.powerValueFirst !== this.defaultState.powerValueFirst)
			result.push(this.state.powerValueFirst);
		if (this.state.powerValueSecond !== this.defaultState.powerValueSecond)
			result.push(this.state.powerValueSecond);
		if (this.state.powerValueLast !== this.defaultState.powerValueLast)
			result.push(this.state.powerValueLast);
		if (this.state.brandBrp !== this.defaultState.brandBrp)
			result.push("BRP");
		if (this.state.brandSpark2 !== this.defaultState.brandSpark2)
			result.push("Spark 2");
		if (this.state.brandSpark3 !== this.defaultState.brandSpark3)
			result.push("Spark 3");
		if (this.state.modelSd2 !== this.defaultState.modelSd2)
			result.push("Sea-doo Spark 2");
		if (this.state.modelSd90 !== this.defaultState.modelSd90)
			result.push("SeaDoo Spark 90");
		if (this.state.modelSd155 !== this.defaultState.modelSd155)
			result.push("SeaDoo GTI 155");
		if (this.state.modelSd230 !== this.defaultState.modelSd230)
			result.push("SeaDoo GTR 230");
		if (this.state.stockSale !== this.defaultState.stockSale)
			result.push("Sale");
		if (this.state.stockNew !== this.defaultState.stockNew)
			result.push("NEW");
		if (this.state.stockHit !== this.defaultState.stockHit)
			result.push("HIT");
		if (this.state.stockDiler !== this.defaultState.stockDiler)
			result.push("ДИЛЕР");
		if (this.state.countriesIt !== this.defaultState.countriesIt)
			result.push("Италия");
		if (this.state.countriesPl !== this.defaultState.countriesPl)
			result.push("Польша");
		if (this.state.countriesBr !== this.defaultState.countriesBr)
			result.push("Британия");
		if (this.state.countriesUSA !== this.defaultState.countriesUSA)
			result.push("США");
		if (this.props.onChange !== undefined)
			this.props.onChange(result);
	}

	render() {

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
											onChange={() => this.setState({ presenceNal: !this.state.presenceNal }, this.hadndleUpdate)}
										/>
										<label htmlFor="presence">В&nbsp;наличие</label>
									</div>
									<div className='advanced-options-item__body-presence-choice'>
										<input type="checkbox" name="presence2" id="presence2"
											checked={this.state.presenceOrder}
											onChange={() => this.setState({ presenceOrder: !this.state.presenceOrder }, this.hadndleUpdate)}
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
											onChange={() => this.setState({ newAll: !this.state.newAll }, this.hadndleUpdate)}
										/>
										<label htmlFor="new">Все</label>
									</div>
									<div className='advanced-options-item__body-new-choice'>
										<input type="checkbox" name="new2" id="new2"
											checked={this.state.newNew}
											onChange={() => this.setState({ newNew: !this.state.newNew }, this.hadndleUpdate)}
										/>
										<label htmlFor="new2">Новинки</label>
									</div>
									<div className='advanced-options-item__body-new-choice'>
										<input type="checkbox" name="new3" id="new3"
											checked={this.state.newSale}
											onChange={() => this.setState({ newSale: !this.state.newSale }, this.hadndleUpdate)}
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
									<div className='advanced-options-item__body-price-choice'><Range /></div>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='advanced-options-item__body-power'>
						<div className='advanced-options-item__body-power-fir'>
							<div className='advanced-options-item__body-power-first'>
								<span>Мощность, л.с.</span>
								<Form.Select size="sm" value={this.state.powerValueFirst} onChange={(event) => this.setState({ powerValueFirst: event.target.value }, this.hadndleUpdate)}>
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
								<Form.Select size="sm" value={this.state.powerValueSecond} onChange={(event) => this.setState({ powerValueSecond: event.target.value }, this.hadndleUpdate)}>
									<option value="90">90</option>
									<option value="130">130</option>
									<option value="154">154</option>
									<option value="230">230</option>
									<option value="300">300</option>
								</Form.Select>
							</div>
						</div>
						<div className='advanced-options-item__body-power-fir'>
							<div className='advanced-options-item__body-power-last'>
								<span>Макс. скорость</span>
								<Form.Select size="sm" value={this.state.powerValueLast} onChange={(event) => this.setState({ powerValueLast: event.target.value }, this.hadndleUpdate)}>
									<option value="90">90</option>
									<option value="130">130</option>
									<option value="154">154</option>
									<option value="230">230</option>
									<option value="300">300</option>
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
											onChange={() => this.setState({ brandBrp: !this.state.brandBrp }, this.hadndleUpdate)} />
										<label htmlFor="brand">BRP</label>
									</div>
									<div className='advanced-options-item__body-brand-choice'>
										<input type="checkbox" name="brand2" id="brand2"
											checked={this.state.brandSpark2}
											onChange={() => this.setState({ brandSpark2: !this.state.brandSpark2 }, this.hadndleUpdate)}
										/>
										<label htmlFor="brand2">Spark 2</label>
									</div>
									<div className='advanced-options-item__body-brand-choice'>
										<input type="checkbox" name="brand3" id="brand3"
											checked={this.state.brandSpark3}
											onChange={() => this.setState({ brandSpark3: !this.state.brandSpark3 }, this.hadndleUpdate)}
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
											onChange={() => this.setState({ modelSd2: !this.state.modelSd2 }, this.hadndleUpdate)}
										/>
										<label htmlFor="model">Sea-doo Spark 2</label>
									</div>
									<div className='advanced-options-item__body-model-choice'>
										<input type="checkbox" name="model2" id="model2"
											checked={this.state.modelSd90}
											onChange={() => this.setState({ modelSd90: !this.state.modelSd90 }, this.hadndleUpdate)}
										/>
										<label htmlFor="model2">SeaDoo Spark 90 </label>
									</div>
									<div className='advanced-options-item__body-model-choice'>
										<input type="checkbox" name="model3" id="model3"
											checked={this.state.modelSd155}
											onChange={() => this.setState({ modelSd155: !this.state.modelSd155 }, this.hadndleUpdate)}
										/>
										<label htmlFor="model3">SeaDoo GTI 155</label>
									</div>
									<div className='advanced-options-item__body-model-choice'>
										<input type="checkbox" name="model4" id="model4"
											checked={this.state.modelSd230}
											onChange={() => this.setState({ modelSd230: !this.state.modelSd230 }, this.hadndleUpdate)}
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
											onChange={() => this.setState({ stockSale: !this.state.stockSale }, this.hadndleUpdate)}
										/>
										<label htmlFor="choicesale"><span className='advanced-options-item__body-stock-choice-span-sale'>Sale</span></label>
									</div>
									<div className='advanced-options-item__body-stock-choice'>
										<input type="checkbox" name="choicenew" id="choicenew"
											checked={this.state.stockNew}
											onChange={() => this.setState({ stockNew: !this.state.stockNew }, this.hadndleUpdate)}
										/>
										<label htmlFor="choicenew"><span className='advanced-options-item__body-stock-choice-span-new'>NEW</span></label>
									</div>
									<div className='advanced-options-item__body-stock-choice'>
										<input type="checkbox" name="choicehit" id="choicehit"
											checked={this.state.stockHit}
											onChange={() => this.setState({ stockHit: !this.state.stockHit }, this.hadndleUpdate)}
										/>
										<label htmlFor="choicehit"><span className='advanced-options-item__body-stock-choice-span-hit'>HIT</span></label>
									</div>
									<div className='advanced-options-item__body-stock-choice'>
										<input type="checkbox" name="choicediler" id="choicediler"
											checked={this.state.stockDiler}
											onChange={() => this.setState({ stockDiler: !this.state.stockDiler }, this.hadndleUpdate)}
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
											onChange={() => this.setState({ countriesIt: !this.state.countriesIt }, this.hadndleUpdate)}
										/>
										<label htmlFor="countries">Италия</label>
									</div>
									<div className='advanced-options-item__body-countries-choice'>
										<input type="checkbox" name="countries2" id="countries2"
											checked={this.state.countriesPl}
											onChange={() => this.setState({ countriesPl: !this.state.countriesPl }, this.hadndleUpdate)}
										/>
										<label htmlFor="countries2">Польша</label>
									</div>
									<div className='advanced-options-item__body-countries-choice'>
										<input type="checkbox" name="countries3" id="countries3"
											checked={this.state.countriesBr}
											onChange={() => this.setState({ countriesBr: !this.state.countriesBr }, this.hadndleUpdate)}
										/>
										<label htmlFor="countries3">Британия</label>
									</div>
									<div className='advanced-options-item__body-countries-choice'>
										<input type="checkbox" name="countries4" id="countries4"
											checked={this.state.countriesUSA}
											onChange={() => this.setState({ countriesUSA: !this.state.countriesUSA }, this.hadndleUpdate)}
										/>
										<label htmlFor="countries4">США</label>
									</div>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='button-choose'>
						<div className='button-choose__body'>
							<div className='button-choose__body-send'><button type='submit'>ВЫБРАТЬ</button></div>
							<div className='button-choose__body-reset' onClick={this.handleClickReset}><button type='submit'>Сбросить фильтр</button></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AdvancedOptionsParametres;