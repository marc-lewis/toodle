import {it, describe, expect} from '@jest/globals'

import { getLetterAppearance } from '../utils/getLetterAppearance';
import { LetterData, LetterType } from '../types/types';

describe('getLetterAppearance', () => {
  it('should return the tailwind classes for a white background and black text for letter data with type NotChecked', () => {
    const letterData: LetterData = {
      value: 'A',
      type: LetterType.NotChecked,
    };

    const result = getLetterAppearance(letterData);

    expect(result).toBe('bg-white text-black');
  });

  it('should return the tailwind classes for a yellow background and white text for letter data with type WrongSpace', () => {
    const letterData: LetterData = {
      value: 'A',
      type: LetterType.WrongSpace,
    };

    const result = getLetterAppearance(letterData);

    expect(result).toBe('bg-yellow-500 text-white');
  });

  it('should return the tailwind classes for a gray background and white text for letter data with type WrongLetter', () => {
    const letterData: LetterData = {
      value: 'A',
      type: LetterType.WrongLetter,
    };

    const result = getLetterAppearance(letterData);

    expect(result).toBe('bg-gray-500 text-white');
  });
  
  it('should return the tailwind classes for a green background and white text for letter data with type Correct', () => {
    const letterData: LetterData = {
      value: 'A',
      type: LetterType.Correct,
    };

    const result = getLetterAppearance(letterData);

    expect(result).toBe('bg-green-500 text-white');
  });
});