import TextType from './TextType';

export default function GalleryPage() {
  return (
    <div style={{ padding: "40px" }}>

      <TextType 
        text={["~new york, concrete jungle where dreams are made of~"]}
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
