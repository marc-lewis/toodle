import Guesses from '@/components/Guesses'
import Keyboard from '@/components/Keyboard'

/**
 * The default Home component
 * @returns The Home component
 */
export default function Home() {
  return (
    <main>
      <Guesses />
      <Keyboard />
    </main>
  )
}
