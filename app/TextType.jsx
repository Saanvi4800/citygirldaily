"use client";

import { useState, useEffect } from "react";

export default function TextType({
  text = ["Hello"],
  typingSpeed = 80,
  pauseDuration = 1200,
  showCursor = true,
  cursorCharacter = "|",
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (index === text.length) return;

    const currentText = text[index];

    if (!isDeleting && subIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), pauseDuration);
      return;
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % text.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting]);

  return (
    <h2 style={{ fontFamily: "monospace", color: "#ff4fa3" }}>
      {text[index].substring(0, subIndex)}
      {showCursor && <span>{cursorCharacter}</span>}
    </h2>
  );
}
