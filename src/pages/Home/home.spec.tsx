import { render, screen } from '@testing-library/react';
import { Home } from './Home';

// Mock child components to simplify testing of Home component
jest.mock('../../components/organisms/header/header', () => ({
  Header: () => <div>Mock Header</div>,
}));

jest.mock('../../components/organisms/contact-section/contact-section', () => ({
  ContactSection: () => <div>Mock Contact Section</div>,
}));

jest.mock('../../components/organisms/graduation-section/graduation-section', () => ({
  GraduationSection: () => <div>Mock Graduation Section</div>,
}));

jest.mock('../../components/organisms/soft-skills-list/soft-skills-list', () => ({
  SoftSkillsList: () => <div>Mock Soft Skills List</div>,
}));

jest.mock('../../components/organisms/work-experience-list/work-experience-list', () => ({
  WorkExperienceList: () => <div>Mock Work Experience List</div>,
}));

describe('Home', () => {
  it('should render the Header component', () => {
    render(<Home />);
    expect(screen.getByText('Mock Header')).toBeInTheDocument();
  });

  it('should render the ContactSection component', () => {
    render(<Home />);
    expect(screen.getByText('Mock Contact Section')).toBeInTheDocument();
  });

  it('should render the GraduationSection component', async () => {
    render(<Home />);
    expect(await screen.findByText('Mock Graduation Section')).toBeInTheDocument();
  });

  it('should render the SoftSkillsList component', async () => {
    render(<Home />);
    expect(await screen.findByText('Mock Soft Skills List')).toBeInTheDocument();
  });

  it('should render the WorkExperienceList component', async () => {
    render(<Home />);
    expect(await screen.findByText('Mock Work Experience List')).toBeInTheDocument();
  });
});
