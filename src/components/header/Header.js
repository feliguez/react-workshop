import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <div className="nav-header">
      <Link to="/">
        <img
          className="nav-header--logo"
          src="https://http2.mlstatic.com/ui/navigation/4.5.0/mercadolibre/logo__large_plus@2x.png"
          alt="Logo Mercado Libre"
        />
      </Link>
    </div>
  );
};

export default Header;
