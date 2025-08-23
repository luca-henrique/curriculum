import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Header', () => {
  it('renders children correctly', () => {
    render(<Header>Test Children</Header>);
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });

  it('applies custom class name', () => {
    render(<Header className="custom-class">Test Children</Header>);
    const headerElement = screen.getByText('Test Children').closest('header');
    expect(headerElement).toHaveClass('custom-class');
  });

  it('applies default class names', () => {
    render(<Header>Test Children</Header>);
    const headerElement = screen.getByText('Test Children').closest('header');
    expect(headerElement).toHaveClass('py-4');
    expect(headerElement).toHaveClass('px-4');
    expect(headerElement).toHaveClass('bg-gray-800');
    expect(headerElement).toHaveClass('text-white');
  });
});
