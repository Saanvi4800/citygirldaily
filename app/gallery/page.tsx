"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import TextType from '../components/TextType';
import CircularGallery from "./CircularGallery";

export default function GalleryPage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <TextType 
          text={["city girl daily"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
        <div style={{ 
          height: '600px', 
          position: 'relative',
          border: '3px solid #ccc' // Add border to see the container
        }}>
          <CircularGallery 
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            scrollEase={0.02}
          />
        </div>
      </div>
    </main>
  );
}