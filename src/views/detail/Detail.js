import React, { Component } from 'react';
import axios from 'axios';
import ItemPrice from '../../components/ItemPrice';
import Header from '../../components/header/Header';
import './Detail.scss';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemData: []
    };
  }

  componentDidMount() {
    const { match } = this.props;
    axios
      .get(`https://api.mercadolibre.com/items/${match.params.id}`, this.state)
      .then(response => {
        if (response.status === 200) {
          this.setState({ itemData: response.data });
        }
      });
  }

  isNew() {
    const { condition } = this.state.itemData;
    return condition == 'new' ? 'Nuevo' : 'Usado';
  }

  render() {
    const {
      title,
      pictures,
      price,
      original_price,
      installments,
      shipping,
      sold_quantity
    } = this.state.itemData;

    return (
      <React.Fragment>
        <Header />
        <section className="detail">
          <div className="item--detail">
            <div className="item--image">
              {pictures && <img src={pictures[0].url} alt={title} />}
            </div>
            <div className="item--info">
              <div className="item--condition">
                {this.isNew()}{' '}
                {sold_quantity > 0 && `- ${sold_quantity} vendidos`}
              </div>
              <h2 className="item--title">{title}</h2>
              {price && (
                <ItemPrice original_price={original_price} price={price} />
              )}
              {installments && (
                <p className="item--installments">
                  {installments.quantity}x ${' '}
                  {roundInstallments(installments.amount)} sin interés
                </p>
              )}
              {shipping && (
                <span className="item--freeShipping">Envío gratis</span>
              )}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Detail;
