/**
 * The letterType determines the appearance of the letter in the keyboard and the guesses
 */
export enum LetterType {
  NotChecked, // Unused letters in the keyboard, empty guesses or guesses that have not been submitted
  WrongSpace, // Wrong letter in the correct space --> Yellow
  WrongLetter, // Wrong letter in the wrong space --> Grey
  Correct, // Correct letter in the correct space --> Green
}

/**
 * An alphabetical letter with a letterType to determine its appearance
 * This is used in both the keyboard and the guesses.
 */
export interface LetterData {
  value: string
  type: LetterType
}