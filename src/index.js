import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import CardDetails from './components/card-details/cardDetails';


ReactDOM.render(
  <BrowserRouter>
  <div>
  <Switch>
     <Route exact path='/' component={App} />
     <Route path='/card' component={CardDetails} />
  </Switch>
  </div>
  </BrowserRouter>,
  document.getElementById('root')
);
