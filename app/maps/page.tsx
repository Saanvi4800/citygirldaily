'use client';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export default function MapsPage() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <APIProvider apiKey={apiKey || ""}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map
          defaultZoom={13}
          defaultCenter={{ lat: 40.7749, lng: -74.4194 }}
        >
          {/* Single marker */}
          <Marker
            position={{ lat: 40.7125, lng: -74.0049 }}
            title="Rosemary's Restaurant"
          />
        </Map>
      </div>
    </APIProvider>
  );
}
