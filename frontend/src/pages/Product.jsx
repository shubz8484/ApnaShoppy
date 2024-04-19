import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/breadcrums/Breadcrum';
import ProductDisplay from '../components/productdisplay/ProductDisplay';
import DescriptionBox from '../components/descriptionbox/DescriptionBox';
import RelatedProducts from '../components/relatedproduct/RelatedProducts';



const Product = () => {
const {all_product} = useContext(ShopContext);
const {productId} = useParams();
const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
