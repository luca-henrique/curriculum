import { render, screen } from '@testing-library/react';
import { Divider } from './divider';

describe('Divider', () => {
  it('should render a horizontal divider by default', () => {
    render(<Divider />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('w-full');
    expect(divider).toHaveClass('h-[1px]');
  });

});
