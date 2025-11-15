import TextType from './TextType';

export default function GalleryPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Gallery ✨</h1>

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
  );
}
