import TextType from './TextType';
import Navbar from './components/Navbar';

export default function GalleryPage() {
  return (
    <div>
      <Navbar />
    <div style={{ padding: "40px" }}>
      <h1>gallery</h1>

      <TextType 
        text={["hello~!"]}
      />

      <TextType 
        text={["city girl daily"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
    </div>
    </div>
  );
}
