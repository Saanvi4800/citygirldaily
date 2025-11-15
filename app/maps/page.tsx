'use client';

import { APIProvider, Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps';

const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // ✔ works on client side

const App = () => (
  <APIProvider
    apiKey={key || ""}
    onLoad={() => console.log("Maps API has loaded.")}
  >
    <Map
      defaultZoom={13}
      defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
      onCameraChanged={(ev: MapCameraChangedEvent) =>
        console.log("camera changed:", ev.detail.center, "zoom:", ev.detail.zoom)
      }
    />
  </APIProvider>
);

export default App;
