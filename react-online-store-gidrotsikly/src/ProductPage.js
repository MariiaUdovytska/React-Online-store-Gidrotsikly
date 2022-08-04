import React from 'react';
import './css/productPage.css';
import ProductCardFull from './ProductCardFull';
import SitePath from './SitePath';
import { useSearchParams } from 'react-router-dom'

const ProductPage= () => {
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id')
	return (
		<div className="product-page">
			<SitePath path2={'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic'}/>
			<ProductCardFull id={id}/>
		</div>
	);
}

export default ProductPage;
