import { render, screen } from '@testing-library/react';
import { Section } from './section';

describe('Section', () => {
  it('renders children correctly', () => {
    render(<Section>Test Children</Section>);
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });

  it('applies custom class name', () => {
    render(<Section className="custom-class">Test Children</Section>);
    const sectionElement = screen.getByText('Test Children').closest('section');
    expect(sectionElement).toHaveClass('custom-class');
  });

  it('applies default class name', () => {
    render(<Section>Test Children</Section>);
    const sectionElement = screen.getByText('Test Children').closest('section');
    expect(sectionElement).toHaveClass('py-8');
    expect(sectionElement).toHaveClass('px-4');
  });
});
