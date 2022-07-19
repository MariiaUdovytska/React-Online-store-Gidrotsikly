import React from 'react';
import './css/productPage.css';
import ProductCardFull from './ProductCardFull';
import SitePath from './SitePath';

function ProductPage() {
	return (
		<div className="product-page">
			<SitePath path2={'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic'}/>
			<ProductCardFull/>
		</div>
	);
}

export default ProductPage;
