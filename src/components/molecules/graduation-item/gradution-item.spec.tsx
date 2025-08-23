import { render, screen } from '@testing-library/react';
import { GraduationItem } from './graduation-item';

describe('GraduationItem', () => {
  const defaultProps = {
    graduate: 'Software Engineer',
    foundation: 'University of Example',
    dateStart: '2020',
    dateEnd: '2024',
  };

  it('renders the graduate, foundation, and dates correctly', () => {
    render(<GraduationItem {...defaultProps} />);

    expect(screen.getByText(defaultProps.graduate)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.foundation)).toBeInTheDocument();
    expect(screen.getByText(`${defaultProps.dateStart}-${defaultProps.dateEnd}`)).toBeInTheDocument();
  });

  it('applies correct typography styles to graduate', () => {
    render(<GraduationItem {...defaultProps} />);
    const graduateElement = screen.getByText(defaultProps.graduate);
    expect(graduateElement.tagName).toBe('H3');
    expect(graduateElement).toHaveClass('text-xs');
    expect(graduateElement).toHaveClass('font-bold');
  });

  it('applies correct typography styles to foundation and dates', () => {
    render(<GraduationItem {...defaultProps} />);
    expect(screen.getByText(defaultProps.foundation)).toHaveClass('text-xs');
    expect(screen.getByText(`${defaultProps.dateStart}-${defaultProps.dateEnd}`)).toHaveClass('text-xs');
  });

  it('renders within a CustomContainer with correct props', () => {
    render(<GraduationItem {...defaultProps} />);
    const containerElement = screen.getByText(defaultProps.graduate).closest('div');
    expect(containerElement).toHaveClass('flex'); // CustomContainer uses flexbox
    expect(containerElement).toHaveClass('flex-row');
});
});