'use client';

import { APIProvider, Map, Marker, useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';


const locations = [
  { lat: 40.73, lng: -74, title: "Rosemary's Resturant" },
  { lat: 40.7580, lng: -73.9855, title: "Times Square" },
  { lat: 40.7309, lng: -73.9973, title: "Washington Square Park" },
  { lat: 40.7826, lng: -73.9656, title: "Central Park"},
  { lat: 40.7794, lng: -73.9631, title: "The Met Museum" },
  { lat: 40.759, lng: -73.985, title: "Broadway Theaters" },
  { lat: 40.723, lng: -74.000, title: "SoHo Shopping District" },
  { lat: 40.44, lng: -74.0022, title: "Chelsea Market" },
];

// Component to auto-fit map to all markers
const FitBounds = ({ locations }: { locations: { lat: number, lng: number }[] }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const bounds = new google.maps.LatLngBounds();
    locations.forEach((loc) => bounds.extend(loc));
    map.fitBounds(bounds); // <-- Automatically zooms & centers
  }, [map, locations]);

  return null;
};

export default function MapsPage() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <APIProvider apiKey={apiKey || ""}>
      <div style={{ height: "90vh", width: "100%",}}>
        <Map defaultZoom={12} defaultCenter={locations[0]}>
          {locations.map((loc, idx) => (
            <Marker
              key={idx}
              position={{ lat: loc.lat, lng: loc.lng }}
              title={loc.title}
            />
          ))}

          <FitBounds locations={locations} />
        </Map>
      </div>
    </APIProvider>
  );
}
