/**
 * The letterType determines the appearance of the letter in the keyboard and the guesses
 */
export enum LetterType {
  WrongSpace, // Wrong letter in the correct space --> Yellow
  WrongLetter, // Wrong letter in the wrong space --> Grey
  Correct, // Correct letter in the correct space --> Green
  // null is White background, black text (default)
}

/**
 * An alphabetical letter with a letterType to determine its appearance
 * This is used in both the keyboard and the guesses.
 */
export interface LetterData {
  value: string | null;
  type: LetterType | null;
}