import { render, screen } from '@testing-library/react';
import {Container} from './container';

describe('Container', () => {
  it('renders children correctly', () => {
    render(<Container>Test Children</Container>);
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });

  it('applies custom class name', () => {
    render(<Container className="custom-class">Test Children</Container>);
    const containerElement = screen.getByText('Test Children').closest('div');
    expect(containerElement).toHaveClass('custom-class');
  });

  it('applies default class name', () => {
    render(<Container>Test Children</Container>);
    const containerElement = screen.getByText('Test Children').closest('div');
    expect(containerElement).toHaveClass('container');
  });
});
