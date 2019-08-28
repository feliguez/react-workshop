import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';
import './Item.scss';

const Item = props => {
  const {
    thumbnail,
    title,
    price,
    original_price,
    id,
    installments,
    shipping
  } = props.data;

  const numberWithCommas = n =>
    n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const roundInstallments = n => numberWithCommas(Math.floor(n));

  const discountPercent = Math.floor(100 - (price * 100) / original_price);

  return (
    <ReactCSSTransitionGroup
      transitionName="item"
      transitionAppear={true}
      transitionAppearTimeout={300}
      transitionEnter={false}
      transitionLeave={false}
    >
      <li className="item">
        <div className="item--image">
          <Link to={`/detail/${id}`}>
            <img src={thumbnail} alt={title} />
          </Link>
        </div>
        <div className="item--info">
          <h2 className="item--title">
            <Link to={`/detail/${id}`}>{title}</Link>
          </h2>
          {original_price && (
            <span className="item--price-original">
              $ {numberWithCommas(original_price)}
            </span>
          )}
          <p className="item--price">
            $ {numberWithCommas(price)}
            {original_price && (
              <span className="item--price-discount">
                {discountPercent}% Off
              </span>
            )}
          </p>
          {installments && (
            <p className="item--installments">
              {installments.quantity}x ${' '}
              {roundInstallments(installments.amount)} sin interés
            </p>
          )}
          {shipping.free_shipping && (
            <span className="item--freeShipping">Envío gratis</span>
          )}
        </div>
      </li>
    </ReactCSSTransitionGroup>
  );
};

export default Item;
