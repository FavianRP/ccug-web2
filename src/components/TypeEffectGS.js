import React, { useState, useEffect } from "react";

const words = ["cyber security?"];

function TypeEffect() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout;
    if (!isDeleting && charIndex <= currentWord.length) {
      setText(currentWord.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 150); // Kecepatan mengetik
    } else if (isDeleting && charIndex >= 0) {
      setText(currentWord.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 100); // Kecepatan menghapus
    }

    if (charIndex === currentWord.length && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2000); // Tunggu sebelum hapus
    } else if (charIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length); // Ganti kata
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return <span id="highlight">{text}</span>;
}

export default TypeEffect;
