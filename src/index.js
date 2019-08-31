import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Detail from './views/detail/Detail';
import Search from './views/search/Search';

import './index.scss';

const AppRouter = () => {
  return (
    <Router>
      <ReactCSSTransitionGroup
        transitionName="mount"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave
        transitionLeaveTimeout={300}
      >
        <div className="route-container">
          <Route component={Search} path="/" exact />
          <Route component={Detail} path="/detail/:id" />
        </div>
      </ReactCSSTransitionGroup>
    </Router>
  );
};

ReactDOM.render(<AppRouter />, document.getElementById('root'));
