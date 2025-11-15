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

// This example adds a map with markers, using web components.
async function initMap(): Promise<void> {
    console.log('Maps JavaScript API loaded.');
}
declare global {
    interface Window {
      initMap: () => void;
    }
  }
window.initMap = initMap;