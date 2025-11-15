'use client';

import { APIProvider, Map } from '@vis.gl/react-google-maps';

export default function MapsPage() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return <div style={{ color: "red" }}>Google Maps API key missing</div>;
  }

  // Tester

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map
          defaultZoom={12}
          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        />
      </div>
    </APIProvider>
  );
}
