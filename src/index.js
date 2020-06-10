import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Map from './Map.js';
import * as serviceWorker from './serviceWorker';
import credentials from './credentials';

ReactDOM.render(
  <React.StrictMode>
    <Map
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`}
      containerElement={<div style={{height: '400px'}} />}
      mapElement={<div style={{height: '100vh'}} /> }
      loadingElement={<p>Cargando</p>}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
