import { render, screen } from '@testing-library/react';
import { ContactSection } from './contact-section';

describe('ContactSection', () => {
  it('renders the contact section title', () => {
    render(<ContactSection />);
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  it('renders all contact items with correct labels and values', () => {
    render(<ContactSection />);

    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('lukas.paes18@gmail.com')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'lukas.paes18@gmail.com' })).toHaveAttribute('href', 'mailto:lukas.paes18@gmail.com');

    expect(screen.getByText('Telefone:')).toBeInTheDocument();
    expect(screen.getByText('(87) 9 9809-3765')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '(87) 9 9809-3765' })).toHaveAttribute('href', 'tel:+5587998093765');

    expect(screen.getByText('Github:')).toBeInTheDocument();
    expect(screen.getByText('github.com/luca-henrique')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'github.com/luca-henrique' })).toHaveAttribute('href', 'https://www.github.com/luca-henrique');

    expect(screen.getByText('Linkedin:')).toBeInTheDocument();
    expect(screen.getByText('linkedin.com/in/luca-paes')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'linkedin.com/in/luca-paes' })).toHaveAttribute('href', 'https://www.linkedin.com/in/luca-paes/');
  });
});

