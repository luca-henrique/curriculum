import { render, screen } from '@testing-library/react';
import { App } from './app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../style/theme';

// Mock the Home component as it's a child component and its internal logic
// is tested in its own spec file (home.spec.tsx).
jest.mock('../pages/Home/Home', () => ({
  Home: () => <div>Mock Home Component</div>,
}));

describe('App', () => {
  it('should render the Home component wrapped in ThemeProvider', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );

    // Check if the mocked Home component is rendered
    expect(screen.getByText('Mock Home Component')).toBeInTheDocument();
  });
});
