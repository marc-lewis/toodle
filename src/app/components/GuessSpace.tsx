import React from "react";
import { LetterData } from "../types/types";
import { getLetterAppearance } from "../utils/getLetterAppearance";

interface GuessSpaceProps {
  letterData: LetterData;
  index: number;
}

const GuessSpace: React.FC<GuessSpaceProps> = ({ letterData, index }) => {
  const appearance = getLetterAppearance(letterData);

  return (
    <div
      className={`w-12 h-12 flex justify-center items-center text-center
        border border-black rounded-lg ${appearance}`}
      key={index}
    >
      {letterData.value?.toUpperCase()}
    </div>
  );
};

export default GuessSpace;