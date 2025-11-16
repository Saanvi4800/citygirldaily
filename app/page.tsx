"use client";

import { useState } from "react";
import Slide from "@mui/material/Slide";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

import TextType from './TextType';
import Navbar from './components/Navbar';

export default function GalleryPage() {
  const [showFriends, setShowFriends] = useState(false);

  return (
    <main style={{ minHeight: "100vh" }}>
      <Navbar />

      <div
        style={{
          backgroundColor: "white",
          textAlign: "center",
          fontFamily: "monospace",
          padding: "40px",
          fontSize: "40px",
          color: "#ff4fa3",
        }}
      >
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

      import { useEffect, useState } from "react";

      useEffect(() => {
        const timer = setTimeout(() => {
          setShowFriends(true),400);
      }, []);


        <Slide direction="up" in={showFriends} mountOnEnter unmountOnExit>
          <div
            style={{
              display: "flex",
              marginTop: "30px",
              justifyContent: "center",
            }}
          >
            <img
              src="/images/claire.png"
              alt="girl1"
              style={{
                width: "220px",
                borderRadius: "20px",
              }}
            />

            <img
              src="/images/cerena.png"
              alt="girl2"
              style={{
                width: "220px",
                borderRadius: "20px",
              }}
            />
          </div>
        </Slide>

        <div
          style={{
            height: "600px",
            position: "relative",
            backgroundColor: "#ffffff",
          }}
        ></div>
      </div>
    </main>
  );
}

