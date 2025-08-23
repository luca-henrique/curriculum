// graduation-section.test.tsx

import { render, screen } from '@testing-library/react';
import { GraduationSection } from './graduation-section';


// 1. Tell Jest to mock the data module
jest.mock('../../../common/formation', () => ({
  // 2. Provide your own fake data for the test
  formation: [
    {
      course: 'Fake Course 1',
      foundation: 'Fake University A',
      duration: '2 years',
    },
    {
      course: 'Fake Course 2',
      foundation: 'Fake University B',
      duration: '3 years',
    },
  ],
}));

describe('GraduationSection', () => {
  it('should render the section title', () => {
    const {debug} = render(<GraduationSection  />);
    debug();
    expect(screen.getByText('Formação')).toBeInTheDocument();
  });

  it('should render the mocked number of graduation items', () => {
    render(<GraduationSection  />);
    // 3. Now the test checks against your reliable mock data
    const items = screen.getAllByTestId('graduation-item');
    expect(items).toHaveLength(2);

    // You can even check for specific text from your mock
    expect(screen.getByText('Fake Course 1')).toBeInTheDocument();
    expect(screen.getByText('Fake University B')).toBeInTheDocument();
  });
});