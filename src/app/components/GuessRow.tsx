import React from "react";
import { LetterData } from "../types/types";
import GuessSpace from "./GuessSpace";

interface GuessRowProps {
  guess: LetterData[] | null;
}

const GuessRow: React.FC<GuessRowProps> = ({ guess }) => {
  const wordLength = 5;
  
  return (
    <div className="flex flex-row gap-1">
      {(guess === null ? Array(wordLength).fill(null) : guess).map((letter, i) => (
        <GuessSpace
          letterData={letter === null ? { value: "", type: null } : letter}
          index={i}
        />
      ))}
    </div>
  );
};

export default GuessRow;
