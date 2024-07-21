import {render} from '@testing-library/react'
import {it, expect} from '@jest/globals'
import Keyboard from '@/components/Keyboard'

it.skip('Renders the Keyboard', () => {
  const { container } = render(<Keyboard />)
  expect(container.innerHTML).toMatch('Keyboard')
})
