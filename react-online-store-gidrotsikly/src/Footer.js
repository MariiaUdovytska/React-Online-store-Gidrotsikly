import React from 'react';
import './css/footer.css';
import SocialMedia from './SocialMedia';


class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		
		return(
			<footer className='footer containerM'>
				<div className='footer__body'>
					<div className='footer__body-newsletter'>
						<div className='footer__body-newsletter-text'>Подпишитесь на нашу рассылку <br/>и узнавайте о акция быстрее</div>
						<div className='footer__body-newsletter-inpwbtn'>
							<input className='footer__body-newsletter-input' type='text' placeholder='Введите ваш e-mail:' aria-label='e-mail'/>
							<button className='footer__body-newsletter-btn' type='submit'>Отправить</button>
							<button className='footer__body-newsletter-btn-phone' type='submit'><i className="bi bi-send-fill" style={{fontSize: '24px', color: '#2F3035'}}></i></button>
						</div>
					</div>
					<div className='footer__body-info'>
						<nav>
							Информация
							<ul>
								<li><a href="#">О компании</a></li>
								<li><a href="#">Контакты</a></li>
								<li><a href="#">Акции</a></li>
								<li><a href="#">Магазины</a></li>
							</ul>
						</nav>
					</div>
					<div className='footer__body-onlinestore'>
						<nav>
							Интернет-магазин
							<ul>
								<li><a href="#">Доставка</a></li>
								<li><a href="#">Оплата</a></li>
								<li><a href="#">Возврат-обмен</a></li>
								<li><a href="#">Новости</a></li>
							</ul>
						</nav>
					</div>
					<SocialMedia/>
				</div>
				<div className='footer__contract'>
					<span>Договор оферты</span>
					<span>Политика обработки персональных данных</span>
				</div>
			</footer>
		)
	}
}

export default Footer;