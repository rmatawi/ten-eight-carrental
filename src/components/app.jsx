import React from 'react';
import {
  f7,
  f7ready,
  App,
  View
} from 'framework7-react';

import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {
  // Framework7 Parameters
  const f7params = {
    name: 'Car Rental',
    theme: 'auto',
    colors: {
      primary: '#8e0000',
    },
    store: store,
    routes: routes,
    serviceWorker: process.env.NODE_ENV === 'production' ? {
      path: '/service-worker.js',
    } : {},
  };

  f7ready(() => {
    // Initialize app
    console.log('Car Rental App Ready');
  });

  return (
    <App { ...f7params }>
      {/* Main view */}
      <View main className="safe-areas" url="/" />
    </App>
  );
};

export default MyApp;