"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

type activity = {
  thing: number;
  name: string;
  tea: string;
};

export default function Itinerarypage() {
  const activities: activity[] = [
    { thing: 1, name: "visit central park!", tea: "cerena and cole had their first kiss here!!" },
    { thing: 2, name: "go to the met!", tea: "claire found out about cerena's secret of 10 years here..." },
    { thing: 3, name: "shopping at soho!", tea: "claire found out her dad cheated on her mom here with his secretary. she often shops her sorrows away..." },
    { thing: 4, name: "watch a broadway show!", tea: "chris bought claire tickets to see aladdin here" },
    { thing: 5, name: "go to crunch fitness!", tea: "cole had a fight with cerena and went to the gym. he saw chris here and thought he looked REALLY good" },
    { thing: 6, name: "eat at a cute cafe in the west village!", tea: "cerena and claire had a major fight here and didn't speak for 2 years" },
    { thing: 7, name: "go to times square!", tea: "cole gave cerena a promise ring here on new years" },
  ];

  const [favorites, setfavorites] = useState<number[]>([]);

  function togglefavorite(thing: number) {
    if (favorites.includes(thing)) {
      setfavorites(favorites.filter(fav => fav !== thing));
    } else {
      setfavorites([...favorites, thing]);
    }
  }

  function showtea(tea: string) {
    alert(tea);
  }

  return (
    <div style={{ fontFamily: "monospace", backgroundColor: "#fff" }}>
      <Navbar />

      <div
        style={{
          padding: "30px",
          backgroundColor: "white",
          color: "#ff4fa3",
          borderRadius: "25px",
          marginBottom: "20px",
          fontSize: "30px",
          textAlign: "center"     // center the heading and paragraph
        }}
      >
        <h1 style={{ color: "#d6006c", fontWeight: "bold" }}>itinerary 🌸🗽🌇</h1>
        <p>XOXO city girls daily💋... pick your fav spot for a NYC perfect day and hear all about the characters lore</p>
      </div>

      {/* Main content wrapper to center everything */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // center horizontally
          gap: "30px",
          alignItems: "flex-start",
        }}
      >
        {/* Activities list */}
        <div style={{ flex: 3, maxWidth: "700px" }}>
          {activities.map((act) => (
            <div
              key={act.thing}
              style={{
                marginBottom: "15px",
                border: "1px solid pink",
                padding: "20px",
                paddingLeft: "50px",
                backgroundColor: "white",
                fontSize: "26px",
                color: "#ff4fa3",
                borderRadius: "10px",
              }}
            >
              <strong>{act.name}</strong>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={() => showtea(act.tea)}>🔥🔥 tea</button>
                <button onClick={() => togglefavorite(act.thing)}>
                  {favorites.includes(act.thing) ? "❌ Remove" : "💖 favorite"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Favorites sidebar */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid pink",
            borderRadius: "15px",
            backgroundColor: "#fff0f5",
            color: "#ff4fa3",
            fontSize: "26px",
            position: "sticky",
            top: "20px",
            height: "fit-content",
            minWidth: "250px",      // ensures sidebar has a decent width
          }}
        >
          <h2>favorites 💖</h2>
          {favorites.length === 0 ? (
            <p>no favorites yet!</p>
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
