import { render, screen } from '@testing-library/react';
import { ProjectExperienceItem } from './project-item';

describe('ProjectExperienceItem', () => {
  const defaultProps = {
    name: 'Test Project',
    description: 'This is a test project description.',
    technologies: ['React', 'Node.js'],
    responsibilities: ['Develop features', 'Write tests'],
    startDate: '2023-01-01',
    endDate: '2023-06-30',
  };

  it('renders the project name and description correctly', () => {
    render(<ProjectExperienceItem {...defaultProps} />);

    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it('applies correct typography styles to project name', () => {
    render(<ProjectExperienceItem {...defaultProps} />);
    const nameElement = screen.getByText(defaultProps.name);
    expect(nameElement.tagName).toBe('H5');
    expect(nameElement).toHaveClass('text-md');
    expect(nameElement).toHaveClass('font-bold');
    expect(nameElement).toHaveClass('text-primaryText');
  });

  it('applies correct typography styles to project description', () => {
    render(<ProjectExperienceItem {...defaultProps} />);
    const descriptionElement = screen.getByText(defaultProps.description);
    expect(descriptionElement.tagName).toBe('P');
    expect(descriptionElement).toHaveClass('text-xs');
  });

  it('renders within a CustomContainer with correct props', () => {
    render(<ProjectExperienceItem {...defaultProps} />);
    const containerElement = screen.getByText(defaultProps.name).closest('div');
    expect(containerElement).toHaveClass('flex');
    expect(containerElement).toHaveClass('flex-col');
    expect(containerElement).toHaveClass('items-start');
    expect(containerElement).toHaveClass('gap-1'); // gap-4px is equivalent to gap-1 in TailwindCSS default spacing
  });
});
