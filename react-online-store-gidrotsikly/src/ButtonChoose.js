import React from 'react';
import './css/buttonChoose.css';


function ButtonChoose() {
	return (
		<div className='button-choose'>
			<div className='button-choose__body'>
				<div className='button-choose__body-send'><button type='submit'>ВЫБРАТЬ</button></div>
				<div className='button-choose__body-reset'><button type='submit'>Сбросить фильтр</button></div>
			</div>
		</div>
	);
}

export default ButtonChoose;