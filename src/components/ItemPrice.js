import React from 'react';

const ItemPrice = ({ original_price, price }) => {
  const numberAsCurrency = n =>
    n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const discountPercent = Math.floor(100 - (price * 100) / original_price);

  return (
    <div className="item--price">
      {original_price && (
        <span className="item--price-original">
          $ {numberAsCurrency(original_price)}
        </span>
      )}
      <div className="item--price-withDiscount">
        $ {numberAsCurrency(price)}
        {original_price && (
          <span className="item--price-discount">{discountPercent}% Off</span>
        )}
      </div>
    </div>
  );
};

export default ItemPrice;
