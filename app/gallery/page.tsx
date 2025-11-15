"use client";
import { useState } from "react";
// import Navbar from "@/components/Navbar";
import CircularGallery from "./CircularGallery";

export default function GalleryPage() {
  return (
    <main>
      <div>
      {/* <Navbar /> */}
      <div style={{ padding: "40px" }}>
        <h1>gallery</h1>
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
          </div>
        </div>
      </div>
    </main>
  );
}
