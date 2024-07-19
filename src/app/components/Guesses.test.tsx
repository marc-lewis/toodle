import {render} from '@testing-library/react'
import {it, expect} from '@jest/globals'
import Guesses from '@/components/Guesses'

it('Renders the Guesses', () => {
  const { container } = render(<Guesses />)
  expect(container.innerHTML).toMatch('Guesses')
})
