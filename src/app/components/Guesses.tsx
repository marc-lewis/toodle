import React from "react";
import GuessRow from "./GuessRow";

/**
 * The Board contains a user's guesses
 * @returns The Board component
 */
export default function Guesses() {
  const maxGuesses = 6;
  
  return (
    <section className="flex flex-col items-center gap-2 py-4">
      <h1>Guesses</h1>
      {Array.from({ length: maxGuesses }).map((_, i) => (
        <GuessRow guess={null} key={i} />
      ))}
    </section>
  );
}
