import {render} from '@testing-library/react';
import {it, expect} from '@jest/globals';
import Board from '@/components/Board.tsx';

it('Renders the Board', () => {
  const { container } = render(<Board />);
  expect(container.innerHTML).toMatch('Board');
});
