import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import App3 from './App3'
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Route path='/signIn' component={App} />
        <Route path='/signUp' component={App2} />
        <Route path='/forgot' component={App3} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
