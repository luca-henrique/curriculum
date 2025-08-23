import { render, screen } from '@testing-library/react';
import { CustomContainer } from './custom-container';

describe('CustomContainer', () => {
  it('renders the custom container with correct text', () => {
    render(<CustomContainer />);
    expect(screen.getByText('Custom Container Example')).toBeInTheDocument();
    expect(screen.getByText('This is a custom container with a blue background and padding.')).toBeInTheDocument();
  });

  it('applies the correct background and padding classes', () => {
    render(<CustomContainer wrap='true' />);
    const containerElement = screen.getByText('Custom Container Example').closest('div');
    expect(containerElement).toHaveClass('bg-blue-200');
    expect(containerElement).toHaveClass('p-4');
    expect(containerElement).toHaveClass('rounded-lg');
  });
});
