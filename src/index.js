import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import App3 from './App3'
import App4 from './App4';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/signIn' component={App} />
          <Route path='/forgot' component={App3} />
          <Route path='/reset' component={App4} />
          <Route path='/' component={App2} />
          
        </Switch>
        
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
