import { LetterData, LetterType } from '../types/types'; 

/**
 * Determines the tailwindcss classes for the appearance of a letter based on its data.type
 * @returns String of tailwindcss classes
 */
export const getLetterAppearance = (letterData: LetterData): string => {
  switch(letterData.type) {
    case LetterType.NotChecked:
      return "bg-white text-black";
    case LetterType.WrongSpace:
      return "bg-yellow-500 text-white";
    case LetterType.WrongLetter:
      return "bg-gray-500 text-white";
    case LetterType.Correct:
      return "bg-green-500 text-white";
  }
};
