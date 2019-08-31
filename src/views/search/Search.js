import axios from 'axios';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './Search.scss';
import Item from '../../components/item/Item';
import Header from '../../components/header/Header';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      items: [],
      data: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  /*
    Actividad Nº 2

    - Crear buscador de productos utilizando la api de Mercado Libre
    - usar Axios para hacer una llamada a https://api.mercadolibre.com/sites/MLC/search?q={query}
    - Donde query es obtenido por medio input de tipo text (componente controlado)
    - Tomar los items de los resultados de busqueda y guardar en el state items
    - Pintar los resultados de busqueda como una lista.
    - Utiliza como ejemplo el formato de los rows de los resultados de busqueda (https://listado.mercadolibre.cl/iphone)
    - Cada fila debe contener imagen del producto, titulo y precio
    - Agregar dentro del .nav-header el logo (https://http2.mlstatic.com/ui/navigation/4.5.0/mercadolibre/logo__large_plus@2x.png)
  */

  handleSubmit(event) {
    axios
      .get(
        `https://api.mercadolibre.com/sites/MLC/search?q=${this.state.query}`,
        this.state
      )
      .then(response => {
        console.info(response);
        console.info(response.data);
        if (response.status === 200) {
          this.setState({ items: response.data.results });
        }
      });

    event.preventDefault();
  }

  handleChangeInput(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    const { query, items } = this.state;
    return (
      <main className="main-search">
        <Header />
        <form onSubmit={this.handleSubmit} className="search">
          <input
            type="text"
            value={query}
            placeholder="Buscar productos, marcas y más..."
            onChange={this.handleChangeInput}
          />
          <input type="submit" value="Buscar" />
        </form>
        <section className="results-wrapper">
          <ol className="results">
            {items.map(item => (
              <Item key={item.id} data={item} />
            ))}
          </ol>
        </section>
      </main>
    );
  }
}

export default hot(module)(Search);
