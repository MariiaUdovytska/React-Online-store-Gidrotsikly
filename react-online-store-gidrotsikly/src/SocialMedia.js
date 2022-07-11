import React from 'react';
import './css/socialMedia.css';
import instagram from './img/socialMedia/instagram.svg';
import vkontacte from './img/socialMedia/vkontacte.svg';
import youtube from './img/socialMedia/youtube.svg';
import facebook from './img/socialMedia/facebook.svg';


function SocialMedia (props){

	return(
		<div className='social-media'>
			<img width={30} height={30} src={instagram} alt="Instagram" />
			<img width={30} height={30} src={vkontacte} alt="Vkontacte"/>
			<img width={30} height={30} src={facebook} alt="Facebook" />
			<img width={30} height={30} src={youtube} alt="Youtube" />
		</div>
	)
}

export default SocialMedia;