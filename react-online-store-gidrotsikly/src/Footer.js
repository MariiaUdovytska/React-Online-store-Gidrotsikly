import React from 'react';
import './css/footer.css';
import FooterAccordion from './FooterAccordion';
import SocialMedia from './SocialMedia';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__body containerM'>
				<div className='footer__body-newsletter'>
					<div className='footer__body-newsletter-text'>Подпишитесь на нашу рассылку <br/>и узнавайте о акция быстрее</div>
					<div className='footer__body-newsletter-inpwbtn'>
						<input className='footer__body-newsletter-input' type='text' placeholder='Введите ваш e-mail:' aria-label='e-mail'/>
						<button className='footer__body-newsletter-btn' type='submit'>Отправить</button>
						<button className='footer__body-newsletter-btn-phone' type='submit'><i className="bi bi-send-fill" style={{fontSize: '24px', color: '#2F3035'}}></i></button>
					</div>
				</div>
				<FooterAccordion/>
				<SocialMedia/>
			</div>
			<div className='footer__contract containerM'>
				<span>Договор оферты</span>
				<span>Политика обработки персональных данных</span>
			</div>
		</footer>
	);
}

export default Footer;