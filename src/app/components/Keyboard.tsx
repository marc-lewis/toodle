/**
 * The Keyboard allows users to tap inputs
 * @returns The Keyboard component
 */
export default function Keyboard () {
  const LetterRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "⌫"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "↵"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ]
  return (
    <section className="flex justify-center">
      <div className="flex flex-col">
      {LetterRows.map((row, i) => {
        return (
          <div
            className={`flex flex-row gap-1 m-1 pl-${i * 4}`}
            key={i}
          >
            {row.map((letter, j) => {
              return (
                <button
                  className="py-2 px-2 border border-black rounded-lg"
                  key={j}
                >
                  {letter}
                </button>
              )
            })}
          </div>
        )
      })}
      </div>
    </section>
  )
}
