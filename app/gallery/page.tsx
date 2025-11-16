"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import TextType from '../components/TextType';
import CircularGallery from "./CircularGallery";

export default function GalleryPage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Navbar />
      <div style={{ backgroundColor: "white", textAlign: "center", fontFamily: "monospace", padding: "40px", fontSize: "40px", color: "#ff4fa3"}}>
        <TextType 
          text={["✮⋆˙claire's gallery˙⋆✮"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
      />
      <p style={{ fontSize: "25px", color: "#ff4fa3", paddingBottom: "0px", margin: "20px 0" }}>
      scroll up and down and click for more info! ╰(*°▽°*)╯
    </p>
      <div style={{ height: '600px', position: 'relative', backgroundColor: '#ffffff'
      }}>
        <CircularGallery 
          bend={3} 
          textColor="#ff4fa3" 
          borderRadius={0.05} 
          scrollEase={0.05}
          font="30px monospace"

        />
      </div>
      </div>
    </main>
  );
}