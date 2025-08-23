import { render, screen } from '@testing-library/react';
import { WorkExperience } from './work-experience';

describe('WorkExperience', () => {
  const mockItem = {
    role: 'Software Engineer',
    enterprise: 'Tech Solutions Inc.',
    dateStart: 'Jan 2020',
    dateEnd: 'Dec 2022',
    description: 'Developed and maintained software applications.',
    projects: [
      {
        name: 'Project Alpha',
        description: 'Developed a new feature.',
        technologies: ['React'],
        responsibilities: ['Coding'],
        startDate: 'Jan 2021',
        endDate: 'Mar 2021',
      },
    ],
  };

  it('renders the role, enterprise, and dates correctly', () => {
    render(<WorkExperience item={mockItem} />);

    expect(screen.getByText(mockItem.role)).toBeInTheDocument();
    expect(screen.getByText(`na ${mockItem.enterprise}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockItem.dateStart} - ${mockItem.dateEnd}`)).toBeInTheDocument();
  });

  it('renders the description correctly', () => {
    render(<WorkExperience item={mockItem} />);
    expect(screen.getByText(mockItem.description)).toBeInTheDocument();
  });

  it('renders the ProjectExperienceList component', () => {
    render(<WorkExperience item={mockItem} />);
    expect(screen.getByText('Project Alpha')).toBeInTheDocument();
  });

  it('applies correct typography styles to role', () => {
    render(<WorkExperience item={mockItem} />);
    const roleElement = screen.getByText(mockItem.role);
    expect(roleElement.tagName).toBe('H3');
    expect(roleElement).toHaveClass('text-sm');
    expect(roleElement).toHaveClass('font-bold');
    expect(roleElement).toHaveClass('text-primaryText');
  });
});