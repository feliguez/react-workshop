import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';
import ItemPrice from '../ItemPrice';
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
          <ItemPrice original_price={original_price} price={price} />
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
