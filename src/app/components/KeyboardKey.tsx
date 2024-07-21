import React from 'react';
import { LetterData } from '../types/types';
import { getLetterAppearance } from '../utils/getLetterAppearance';

interface KeyboardKeyProps {
  letterData: LetterData;
  index: number;
}

const KeyboardKey: React.FC<KeyboardKeyProps> = ({ letterData, index }) => {
  const appearance = getLetterAppearance(letterData);

  return (
    <button
      className={`py-2 px-2 border border-black rounded-lg ${appearance}`}
      key={index}
    >
      {letterData.value?.toUpperCase()}
    </button>
  );
};

export default KeyboardKey;
