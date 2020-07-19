import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import App3 from './App3'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/signIn' component={App} />
          <Route path='/forgot' component={App3} />
          <Route path='/' component={App2} />
        </Switch>
        
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
