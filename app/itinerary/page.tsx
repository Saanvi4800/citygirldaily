"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

type activity = {
  thing: number;
  name: string;
  drama: string;
};

export default function Itinerarypage() {
  const activities: activity[] = [
    { thing: 1, name: "Visit Central Park!", drama: "Cerena and Cole had their first kiss here" },
    { thing: 2, name: "Go to the Met Museum!", drama: "Claire found out about Ceren's secret of 10 years here..." },
    { thing: 3, name: "Shopping at SoHo!", drama: "Claire found out her dad cheated on her mom here with his secretary and shops her sorrows away..." },
    { thing: 4, name: "Watch a Broadway Show!", drama: "Chris bought Claire tickets to see Aladdin here" },
    { thing: 5, name: "Go to Crunch Fitness Gym!", drama: "Cole had a fight with Cerena and saw Chris here and thought he looked REALLY good" },
    { thing: 6, name: "Eat at a cute cafe in the West Village!", drama: "Cerena and Claire had a major fight here back in 2019 and didn't speak for 2 years" },
    { thing: 7, name: "Go to Times Square!", drama: "Cole gave Cerena a promise ring here on New Years" },
  ];

  const [favorites, setFavorites] = useState<number[]>([]);

  function toggleFavorite(thing: number) {
    if (favorites.includes(thing)) {
      setFavorites(favorites.filter(fav => fav !== thing));
    } else {
      setFavorites([...favorites, thing]);
    }
  }

  function showDrama(drama: string) {
    alert(drama);
  }

  return (
    <div style={{ fontFamily: "monospace", backgroundColor: "#fff" }}>
      
      {/* Navbar */}
      <Navbar />

      {/* Intro box */}
      <div style={{
        padding: "30px",
        backgroundColor: "white",
        color: "#ff4fa3",
        borderRadius: "25px",
        marginBottom: "20px",
        fontSize: "30px"
      }}>
        <h1>itinerary 🌸🗽🌇</h1>
        <p>XOXO city girls daily💋... pick your fav spot for a NYC perfect day and hear all about the characters lore</p>
      </div>

      {/* Main content: activities + favorites sidebar */}
      <div style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
        
        {/* Activities list */}
        <div style={{ flex: 3 }}>
          {activities.map((act) => (
            <div
              key={act.thing}
              style={{
                marginBottom: "15px",
                border: "1px solid pink",
                padding: "20px",
                backgroundColor: "white",
                fontSize: "26px",
                color: "#d6006c", // darker pink text
                borderRadius: "10px"
              }}
            >
              <strong>{act.name}</strong>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={() => showDrama(act.drama)}>🔥🔥 Drama</button>
                <button onClick={() => toggleFavorite(act.thing)}>
                  {favorites.includes(act.thing) ? "❌ Remove" : "💖 Favorite"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Favorites sidebar */}
        <div style={{
          flex: 1,
          padding: "20px",
          border: "1px solid pink",
          borderRadius: "15px",
          backgroundColor: "#fff0f5",
          color: "#d6006c",         // same darker pink as activities
          fontSize: "26px",
          position: "sticky",       // sticky sidebar
          top: "20px",              // distance from top
          height: "fit-content"
        }}>
          <h2>Favorites 💖</h2>
          {favorites.length === 0 ? (
            <p>No favorites yet!</p>
          ) : (
            <ul style={{ paddingLeft: "20px" }}>
              {favorites.map((thing) => {
                const item = activities.find((x) => x.thing === thing);
                return <li key={thing}>{item?.name}</li>;
              })}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}
