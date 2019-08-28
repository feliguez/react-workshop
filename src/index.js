import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Detail from './components/Detail';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <Route component={App} path="/" exact />
      <Route component={Detail} path="/detail/:id" />
    </Router>
  );
};

ReactDOM.render(<AppRouter />, document.getElementById('root'));
