import React from 'react';

const ProductItem = ({ product, inCart, addToCart, removeFromCart }) => {
  // Determine if the product is special or popular
  const isSpecial = product.title.includes('Special Item');
  const isPopular = product.title.includes('Popular Item');
  const isSale  = product.title.includes('Sale Item');


  // Function to render star ratings
  const renderStars = () => {
    if (isSpecial || isPopular){
      return (
        <>
          <span className="fa fa-star checked" style={{ color: "yellow" }}></span>
          <span className="fa fa-star checked" style={{ color: "yellow" }}></span>
          <span className="fa fa-star checked" style={{ color: "yellow" }}></span>
          <span className="fa fa-star checked" style={{ color: "yellow" }}></span>
          <span className="fa fa-star checked" style={{ color: "yellow" }}></span>
        </>
      );
    }
    return null;
  };
 
  
  // Function to render star badge
  const renderStarBadge = ()=>{
    if(isSpecial || isSale){
      return (
        <div className='badge bg-dark text-white position-absolute' style={{top:25,right:25}}>sale</div>
      )
     }
     return null;
    };
    

   // Function to render strike and color change for prices
   const renderPrice = () => {
    if (isSpecial || isSale) {
      const [originalPrice, salePrice] = product.price.split(' ');
      return (
        <p className="card-text">
          <span style={{ textDecoration: 'line-through', color: 'grey' }}>{originalPrice}</span> {salePrice}
        </p>
      );
    }
    return <p className="card-text">{product.price}</p>;
  };
  
  return (
    <div className="card" style={{width:300}}>
      <div className="card-body text-center">
        {renderStarBadge()}
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" class="card-img-top mb-3" alt="..." />
        <h5 className="card-title">{product.title}</h5>
        {renderStars()} {/* Render stars based on product type */}  
        {/* <p className="card-text">{product.price}</p> */}
        {renderPrice()}
        {inCart ? (
          <button className="btn border-dark" onClick={() => removeFromCart(product)}>
            Remove from Cart
          </button>
        ) : (
          <button className="btn border-dark" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
