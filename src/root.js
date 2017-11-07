import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MainOutlet } from './system/outlets';

const Root = ({store})=>(
  <Provider store={store}>
    <BrowserRouter>
      <MainOutlet/>
    </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root