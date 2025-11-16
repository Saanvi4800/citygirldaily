"use client";
import { useState } from "react";

type activity = {
  thing: number;
  name: string;
  drama: string;
};

export default function Itinerarypage() {
   const activities: activity[] = [
  { thing: 1, name: "Visit Central Park!", drama: "Cerena and Cole had their first kiss here"},
  { thing: 2, name: "Go to the Met Museum!", drama: "Claire found out about Ceren's secret of 10 years here... "},
  { thing: 3, name: "Shopping at SoHo!", drama: "Claire found out her dad cheated on her mom here with his secretary and shops her sorrows away...."},
  { thing: 4, name: "Watch a Broadway Show!", drama: "Chris bought Claire tickets to see Aladdin here"},
  { thing: 5, name: "Go to Crunch Fitness Gym!", drama: "Cole had a fight with Cerena and saw Chris here and thought he looked REALLY good"},
  { thing: 6, name: "Eat at a cute cafe in the West Village!", drama: "Cerena and Claire had a major fight here back in 2019 and didn't speak for 2 years"},
  { thing: 7, name: "Go to Times Square!", drama: "Cole gave Cerena a promise ring here on New Years"},
 ];
 
 const [favorites, setFavorites] =  useState<number[]>([]);
 
 
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
    <div 
    style = {{ 
    padding: "30px",
    color: "pink", 
    fontFamily: "monospace",
   backgroundColor: "white",
   fontSize: "30px",
   borderRadius: "25px",
       }}
       >
      <h1> itinerary 🌸🗽🌇 </h1>
      <p> XOXO city girls daily💋... pick your fav spot for a NYC perfect days and hear all about the characters lore </p>
     
    {activities.map((first) => (
        <div key={first.thing} style={{ 
          marginBottom: 15, 
          border: "1px solid pink",
          background: "white",
          fontSize: "30px",
          borderRadius: "25px",
          }} >
          <strong>{first.name}

          </strong>
   
     <button onClick={() => showDrama(first.drama)} > 🔥🔥</button>

     <button onClick={() => toggleFavorite(first.thing)} >
            {favorites.includes(first.thing) ? "👍" : "💖"}
          </button>
        </div>
))}
  <h2> Favorites!!</h2>
  {favorites.length === 0 && <p> No favorites yet!</p>}

<ul>
  {favorites.map((thing) => {
    const item = activities.find((x) => x.thing === thing);
    return <li key={thing}>{item?.name}</li>;
  })}
</ul>
</div>
  );
}



