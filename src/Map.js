import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap
} from 'react-google-maps';

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 40.416775, lng: -3.703790 }}
    />
  );
}

export default withScriptjs(
  withGoogleMap(
    Map
  )
)
