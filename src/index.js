import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from './root';
import registerServiceWorker from './registerServiceWorker';

//redux store


const store={

}

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('root')
);
registerServiceWorker();
