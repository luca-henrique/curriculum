import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Header', () => {
  it('should render the name correctly', () => {
    render(<Header />);
    expect(
      screen.getByText('Lucas Henrique Paes de Carvalho'),
    ).toBeInTheDocument();
  });

  it('should render the role correctly', () => {
    render(<Header />);
    expect(
      screen.getByText('Software engineering full stack javascript.'),
    ).toBeInTheDocument();
  });

  it('should render the location correctly', () => {
    render(<Header />);
    expect(
      screen.getByText('Arcoverde - Pernambuco - Brasil'),
    ).toBeInTheDocument();
  });

  it('should render the description correctly', () => {
    render(<Header />);
    expect(
      screen.getByText(
        /Sou um desenvolvedor full-stack e mobile desde 2019 com experiência com projetos JavaScript e TypeScript./i,
      ),
    ).toBeInTheDocument();
  });

  it('should apply correct typography styles to name', () => {
    render(<Header />);

    
    const nameElement = screen.getByText('Lucas Henrique Paes de Carvalho');
    expect(nameElement).toHaveClass('font-bold');
    expect(nameElement).toHaveClass('text-lg');
  });

  it('should apply correct typography styles to role', () => {
    render(<Header />);
    const roleElement = screen.getByText(
      'Software engineering full stack javascript.',
    );
    expect(roleElement).not.toHaveClass('font-bold'); // Default weight
    expect(roleElement).not.toHaveClass('text-lg'); // Default size
  });

  it('should apply correct typography styles to location', () => {
    render(<Header />);
    const locationElement = screen.getByText('Arcoverde - Pernambuco - Brasil');
    expect(locationElement).toHaveClass('font-bold');
  });
});
