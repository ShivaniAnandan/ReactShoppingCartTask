import React from 'react';
import ProductItem from './ProductItem';

const products = [
  { id: 1, title: 'Fancy Product', price: '$40.00 - $80.00'},
  { id: 2, title: 'Special Item', price: '$20.00 $18.00'},
  { id: 3, title: 'Sale Item', price: '$50.00 $25.00'},
  { id: 4, title: 'Popular Item', price: '$40.00'},
  { id: 5, title: 'Sale Item', price: '$50.00 $25.00'},
  { id: 6, title: 'Fancy Product', price: '$120.00 - $280.00'},
  { id: 7, title: 'Special Item', price: '$20.00 $18.00'},
  { id: 8, title: 'Popular Item', price: '$40.00'},
];

const ProductList = ({ cart, addToCart, removeFromCart }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <ProductItem
              product={product}
              inCart={cart.some((item) => item.id === product.id)}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
