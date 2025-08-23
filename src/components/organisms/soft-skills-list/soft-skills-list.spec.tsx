// soft-skills-list.test.tsx

import { render, screen } from '@testing-library/react';
import { SoftSkillsList } from './soft-skills-list';

// Mock the skills data
jest.mock('../../../common/skills', () => ({
  skills: ['React', 'TypeScript', 'Node.js'],
}));

describe('SoftSkillsList', () => {
  it('should render the section title', () => {
    render(<SoftSkillsList />);
    expect(screen.getByText('Tecnologias')).toBeInTheDocument();
  });

  it('should render the mocked number of skills', () => {
    render(<SoftSkillsList />);
    const skillItems = screen.getAllByText(/^(React|TypeScript|Node\.js)-?$/);
    expect(skillItems).toHaveLength(3);
  });

  it('should render the mocked skills correctly', () => {
    render(<SoftSkillsList />);
    expect(screen.getByText('React-')).toBeInTheDocument();
    expect(screen.getByText('TypeScript-')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument(); // Last item should not have a hyphen
  });
});
