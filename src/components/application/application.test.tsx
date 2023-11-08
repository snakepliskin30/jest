import { render, screen } from '@testing-library/react';
import { Application } from './application';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);
    const pageHeading = screen.getByRole('heading', {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeader = screen.getByRole('heading', {
      level: 2,
    });
    expect(sectionHeader).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocElement = screen.getByRole('combobox');
    expect(jobLocElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole('button');
    expect(submitElement).toBeInTheDocument();

    const paragraphel = screen.getByText('All fields are mandatory');
    expect(paragraphel).toBeInTheDocument();
  });
});
