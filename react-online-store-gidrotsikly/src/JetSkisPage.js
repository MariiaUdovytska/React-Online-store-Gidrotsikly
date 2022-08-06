import React from 'react';
import './css/jetSkisPage.css';
import SearchByCategory from './SearchByCategory';
import SitePath from './SitePath';

function JetSkisPage() {
	return (
		<main className='jet-skis-page'>
			<SitePath />
			<SearchByCategory />
		</main>
	);
}

export default JetSkisPage;