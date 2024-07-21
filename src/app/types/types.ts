/**
 * The letterType determines the appearance of the letter: 
 * White (empty or guess), Yellow (wrong space), Grey (wrong letter) or Green (correct)
 */
export enum LetterType {
  Empty,
  Guess,
  WrongSpace,
  WrongLetter,
  Correct,
}

/**
 * An alphabetical letter with a letterType to determine its appearance
 * This is used in both the keyboard and the guesses.
 */
export interface Letter {
  letter: string
  type: LetterType
}