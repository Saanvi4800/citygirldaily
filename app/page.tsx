import TextType from './TextType';
import Navbar from './components/Navbar';

export default function GalleryPage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Navbar />
      <div style={{ backgroundColor: "white", textAlign: "center", fontFamily: "monospace", padding: "40px", fontSize: "40px", color: "#ff4fa3"}}>
        <TextType 
          text={["✮⋆˙xoxo city girl daily˙⋆✮"]}
          typingSpeed={75}
          pauseDuration={2000}
          showCursor={true}
          cursorCharacter="|"
        />
        <TextType 
          text={["welcome to new york, its been waiting for you"]}
          typingSpeed={75}
          pauseDuration={1000000}
          showCursor={true}
          cursorCharacter="|"
        />
        <div style={{ height: '600px', position: 'relative', backgroundColor: '#ffffff'
        }}></div>
    </div>
    </main>
  );
}