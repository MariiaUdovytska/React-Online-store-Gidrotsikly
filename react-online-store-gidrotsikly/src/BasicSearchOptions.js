import React from 'react';
import AdvancedOptions from './AdvancedOptions';
import './css/basicSearchOptions.css';
import JetSkisProducts from './JetSkisProducts';


function BasicSearchOptions(props) {
	return (
		<div className='basic-search-options'>
			<div className='basic-search-options__body'>
				<div className='basic-search-options__body-options'><AdvancedOptions onChange={(change)=> props.onChange(change)}/></div>
				<div className='basic-search-options__body-products'><JetSkisProducts/></div>
			</div>
		</div>
	);
}

export default BasicSearchOptions;