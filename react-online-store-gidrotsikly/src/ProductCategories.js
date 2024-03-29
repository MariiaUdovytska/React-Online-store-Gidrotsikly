import React from 'react';
import './css/productCategories.css';
import ProductCategoriesCards from './ProductCategoriesCards';
import { Link } from 'react-router-dom';

function ProductCategories() {
	return (
		<section className='product-categories'>
			<div className='product-categories__body'>
				<ul>
					<li><ProductCategoriesCards productCardsImg={require("./img/productCategories/quadrotsicle.png")} productCardsName={'Квадроциклы'} /></li>
					<li><Link to="/jetSkisPage"><ProductCategoriesCards productCardsImg={require("./img/productCategories/gidrotsikly.png")} productCardsName={'Гидроциклы'} /></Link></li>
					<li><ProductCategoriesCards productCardsImg={require("./img/productCategories/cater.png")} productCardsName={'Катера'} /></li>
					<li><ProductCategoriesCards productCardsImg={require("./img/productCategories/snowtsicle.png")} productCardsName={'Снегоходы'} /></li>
					<li><ProductCategoriesCards productCardsImg={require("./img/productCategories/crosscountryvehicle.png")} productCardsName={'Вездеходы'} /></li>
					<li><ProductCategoriesCards productCardsImg={require("./img/productCategories/engines.png")} productCardsName={'Двигатели'} /></li>
				</ul>
			</div>
		</section>
	)
}

export default ProductCategories;