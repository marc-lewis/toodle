import React from "react";
import GuessRow from "./GuessRow";
import { LetterType } from "@/types/types";

/**
 * The Board contains a user's guesses
 * @returns The Board component
 */
export default function Guesses() {
  const maxGuesses = 6;

  const fakeSubmittedGuess = [
    { value: "Q", type: LetterType.WrongSpace },
    { value: "W", type: LetterType.WrongLetter },
    { value: "E", type: LetterType.Correct },
    { value: "R", type: null },
    { value: "T", type: null },
  ]
  
  return (
    <section className="flex flex-col items-center gap-2 py-4">
      <h1>Guesses</h1>
      <GuessRow guess={fakeSubmittedGuess} />
      {Array.from({ length: (maxGuesses-1) }).map((_, i) => (
        <GuessRow guess={null} key={i} />
      ))}
    </section>
  );
}
