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
							<Accordion.Header>Новинки</Accordion.Header>
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
				</div>
			</div>
		);
	}
}

export default AdvancedOptionsParametres;