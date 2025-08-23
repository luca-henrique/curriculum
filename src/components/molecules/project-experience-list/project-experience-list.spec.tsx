import { render, screen } from '@testing-library/react';
import { ProjectExperienceList } from './project-experience-list';

describe('ProjectExperienceList', () => {
  const mockProjects = [
    {
      name: 'Project 1',
      description: 'Description for Project 1',
      technologies: ['React', 'TypeScript'],
      responsibilities: ['Develop UI', 'Integrate API'],
      startDate: '2022-01-01',
      endDate: '2022-06-30',
    },
    {
      name: 'Project 2',
      description: 'Description for Project 2',
      technologies: ['Angular', 'Node.js'],
      responsibilities: ['Build backend', 'Database design'],
      startDate: '2022-07-01',
      endDate: '2022-12-31',
    },
  ];

  it('should render a list of project experience items', () => {
    render(<ProjectExperienceList projects={mockProjects} />);

    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Description for Project 1')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
    expect(screen.getByText('Description for Project 2')).toBeInTheDocument();
  });

  it('should render the correct number of project experience items', () => {
    render(<ProjectExperienceList projects={mockProjects} />);

    const projectItems = screen.getAllByRole('heading', { level: 3 }); // Assuming ProjectExperienceItem renders name as h3
    expect(projectItems).toHaveLength(mockProjects.length);
  });

  it('should pass correct props to each ProjectExperienceItem', () => {
    render(<ProjectExperienceList projects={mockProjects} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Angular')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });
});
