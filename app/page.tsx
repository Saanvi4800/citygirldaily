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
        height: "100vh",          // ❗ full screen height only
        overflow: "hidden",       // ❗ no scrolling
      }}
    >
      <Navbar />

      <div
        style={{
          backgroundColor: "white",
          textAlign: "center",
          fontFamily: "monospace",
          paddingTop: "20px",
          fontSize: "40px",
          color: "#ff4fa3",
          height: "calc(100vh - 80px)", // adjust for navbar height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* keep text ABOVE slide */}
        <div style={{ marginBottom: "20px" }}>
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
            pauseDuration={10000}
            showCursor={true}
            cursorCharacter=" "
          />
        </div>

        {/* GIRLS LEFT + RIGHT, TEXT IN MIDDLE */}
        <Slide direction="up" in={showFriends} mountOnEnter unmountOnExit>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 80px",
              width: "100%",
              maxWidth: "1600px",
              margin: "0 auto",
            }}
          >
            {/* LEFT GIRL */}
            <img
              src="/images/claire.png"
              alt="claire"
              style={{
                width: "400px",
                borderRadius: "20px",
              }}
            />

            {/* CENTER TEXT */}
            <div
              style={{
                fontSize: "32px",
                color: "#ff4fa3",
                fontWeight: "bold",
                padding: "0 20px",
                width: "40%",
              }}
            >
              ✨ besties in the city ✨
            </div>

            {/* RIGHT GIRL */}
            <img
              src="/images/cerena.png"
              alt="cerena"
              style={{
                width: "400px",
                borderRadius: "20px",
              }}
            />
          </div>
        </Slide>

      </div>
    </main>
  );
}
