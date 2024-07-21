import React from "react"
import KeyboardKey from "./KeyboardKey"
import { LetterData, LetterType } from "../types/types"

/**
 * The Keyboard allows users to tap inputs
 * @returns The Keyboard component
 */
export default function Keyboard () {
  const LetterRows: LetterData[][] = [
    [
      { value: "Q", type: LetterType.WrongSpace },
      { value: "W", type: LetterType.WrongLetter },
      { value: "E", type: LetterType.Correct},
      { value: "R", type: null },
      { value: "T", type: null },
      { value: "Y", type: null },
      { value: "U", type: null },
      { value: "I", type: null },
      { value: "O", type: null },
      { value: "P", type: null },
      { value: "⌫", type: null }
    ],
    [
      { value: "A", type: null },
      { value: "S", type: null },
      { value: "D", type: null },
      { value: "F", type: null },
      { value: "G", type: null },
      { value: "H", type: null },
      { value: "J", type: null },
      { value: "K", type: null },
      { value: "L", type: null },
      { value: "↵", type: null }
    ],
    [
      { value: "Z", type: null },
      { value: "X", type: null },
      { value: "C", type: null },
      { value: "V", type: null },
      { value: "B", type: null},
      { value: "N", type: null },
      { value: "M", type: null }
    ]
  ];
  return (
    <section className="flex justify-center bg-slate-300">
      <div className="flex flex-col">
      {LetterRows.map((row, i) => {
        return (
          <div
            className={`flex flex-row gap-1 m-1 pl-${i * 4}`}
            key={i}
          >
            {row.map((letter, j) => {
              return (
                <KeyboardKey
                  letterData={letter}
                  index={j}
                  key={j}
                />
              )
            })}
          </div>
        )
      })}
      </div>
    </section>
  )
}
