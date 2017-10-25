import React from 'react';
import ReactDOM from 'react-dom';

import RootReducer from './Services/rootReducer';
import Home from './Containers/Home';
import Payment from './Containers/Payment';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {data,promoCodeData} from './Services/data';

const initialState = {
  cart:{
    data : data,
    totalCost: 0,
    promoCodeList:promoCodeData,
    appliedPromocode:''
  }
}
const store = createStore(
    RootReducer,
    initialState,
    applyMiddleware(thunk)
  );

  const App = ({ store }) => (
    <Provider store={store}>
      <Router>
            <Switch>
              <Route path='/payment' component={Payment} />              
              <Route path='/' component={Home} />
            </Switch>
      </Router>
    </Provider>
  );
  
  
ReactDOM.render(<App  store={store} />, document.getElementById('root'));
