import React from 'react';
import './css/sitePath.css';

function SitePath(props) {
	return (
		<div className='site-path containerM'>
			<div className='site-path__body'>
				<span>Главная</span>
				&gt;
				<span>Гидроциклы</span>
				&gt;
				<span> {props.path2}</span>
			</div>
		</div>
	);
}

export default SitePath;