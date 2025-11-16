"use client";
import { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import TextType from './TextType';
import Navbar from './components/Navbar';

export default function GalleryPage() {
  const [showFriends, setShowFriends] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFriends(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <main
      style={{
        overflow: "hidden",
      }}
    >
      <Navbar />
      <div
        style={{
          backgroundColor: "white",
          textAlign: "center",
          fontFamily: "monospace",
          paddingTop: "20px",
          paddingBottom: "20px",
          fontSize: "40px",
          color: "#ff4fa3",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        {/* TextType heading with top margin */}
        <div style={{ marginTop: "40px", marginBottom: "-20px", marginLeft: 0, marginRight: 0 }}>
          <TextType
            text={["✮⋆˙xoxo city girl daily˙⋆✮"]}
            typingSpeed={75}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
        
        {/* GIRLS LEFT + RIGHT, TEXT IN MIDDLE */}
        <Slide direction="up" in={showFriends} mountOnEnter unmountOnExit>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 40px",
              width: "100%",
              maxWidth: "1600px",
              margin: "0 auto",
            }}
          >
            <img
              src="/images/claire.png"
              alt="claire"
              style={{
                width: "500px",
              }}
            />
            <div
              style={{
                fontSize: "32px",
                color: "#ff4fa3",
                padding: "0 20px",
                width: "40%",
              }}
            >
             welcome to new york, it's been waiting for you!
            <br></br>
            <br></br>
            we're claire and celena! we're so excited to share our favorite spots in nyc... and our spiciest secrets!
            </div>
            <img
              src="/images/cerena.png"
              alt="cerena"
              style={{
                width: "500px",
              }}
            />
          </div>
        </Slide>
      </div>
    </main>
  );
}