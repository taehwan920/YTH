import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'mobx-react';
import YangStore from './stores/YangStore';

const yangStore = new YangStore();

ReactDOM.render(
  <Provider yangStore={yangStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
