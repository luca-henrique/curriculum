import { render, screen } from '@testing-library/react';
import { WorkExperienceList } from './work-experience-list';

// Mock the experience data
jest.mock('../../../common/experience', () => ({
  experience: [
    {
      company: 'Fake Company A',
      role: 'Fake Role A',
      duration: 'Jan 2020 - Dec 2021',
      description: ['Description A1', 'Description A2'],
    },
    {
      company: 'Fake Company B',
      role: 'Fake Role B',
      duration: 'Jan 2022 - Present',
      description: ['Description B1'],
    },
  ],
}));

describe('WorkExperienceList', () => {
  it('should render the section title', () => {
    render(<WorkExperienceList />);
    expect(screen.getByText('Experiências de trabalho')).toBeInTheDocument();
  });

  it('should render the mocked number of work experience items', () => {
    render(<WorkExperienceList />);
    const items = screen.getAllByTestId('work-experience-item');
    expect(items).toHaveLength(2);
  });

  it('should render the mocked work experience details', () => {
    render(<WorkExperienceList />);
    expect(screen.getByText('Fake Company A')).toBeInTheDocument();
    expect(screen.getByText('Fake Role B')).toBeInTheDocument();
    expect(screen.getByText('Jan 2020 - Dec 2021')).toBeInTheDocument();
    expect(screen.getByText('Description B1')).toBeInTheDocument();
  });
});
