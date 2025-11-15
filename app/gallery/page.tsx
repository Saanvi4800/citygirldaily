"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function GalleryPage() {
  return (
    <main>
      <div>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <h1>gallery</h1>
        <p>rotating gallery here</p>
      </div>
      </div>
    </main>
  );
}
