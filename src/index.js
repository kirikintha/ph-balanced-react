// index.js
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app/app.component';

const renderApp = () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root'),
  );
};

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./app/app.component', () => renderApp());
}

renderApp();
