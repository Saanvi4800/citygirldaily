import Link from 'next/link'            
import Navbar from '../components/Navbar';

export default function GalleryPage() {
  return (
    <div>
      <h1>Maps</h1>
        <Navbar /> 
    </div>
  );
}

let map: google.maps.Map;
const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center,
    zoom: 8
  });
}