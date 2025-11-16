"use client";

import { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

import TextType from './TextType';
import Navbar from './components/Navbar';

export default function GalleryPage() {
  const [showFriends, setShowFriends] = useState(false);

  useEffect(() => { 
        const timer = setTimeout(() => {
          setShowFriends(true)},400);
        } , []);
      

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
          pauseDuration={10000}
          showCursor={true}
          cursorCharacter=" "
        />


      


        <Slide direction="up" in={showFriends} mountOnEnter unmountOnExit>
          <div
            style={{
              marginTop: "30px",
              justifyContent: "center",
            }}
          >
            <img
              src="/images/claire.png"
              alt="claire"
              style={{
                width: "220px",
                borderRadius: "20px",
              }}
            />

            <img
              src="/images/cerena.png"
              alt="cerena"
              style={{
                width: "220px",
                borderRadius: "20px",
              }}
            />
          </div>
        </Slide>

        <div
          style={{
            height: "400px",
            position: "relative",
            backgroundColor: "#ffffff",
          }}
        ></div>
      </div>
    </main>
  );
}

