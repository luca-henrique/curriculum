import { render, screen } from '@testing-library/react';
import { Typography } from './typography';

describe('Typography', () => {
  it('renders children correctly', () => {
    render(<Typography>Test Children</Typography>);
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });

  it('renders with default tag "p"', () => {
    const { container } = render(<Typography>Test Children</Typography>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('renders with specified tag', () => {
    const { container } = render(<Typography tag="h1">Test Children</Typography>);
    expect(container.querySelector('h1')).toBeInTheDocument();
  });

  it('applies size variant class', () => {
    render(<Typography size="lg">Test Children</Typography>);
    expect(screen.getByText('Test Children')).toHaveClass('text-lg');
  });

  it('applies weight variant class', () => {
    render(<Typography weight="bold">Test Children</Typography>);
    expect(screen.getByText('Test Children')).toHaveClass('font-bold');
  });

  it('applies color variant class', () => {
    render(<Typography color="primaryText">Test Children</Typography>);
    expect(screen.getByText('Test Children')).toHaveClass('text-primaryText');
  });

  it('applies line height variant class', () => {
    render(<Typography lineHeight="md">Test Children</Typography>);
    expect(screen.getByText('Test Children')).toHaveClass('leading-md');
  });

  it('applies additional props', () => {
    render(<Typography data-testid="typography-element">Test Children</Typography>);
    expect(screen.getByTestId('typography-element')).toBeInTheDocument();
  });
});
