import { render, screen } from '@testing-library/react';
import { Skills } from './skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'Javascript'];
  test('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });

  test('renders login button', () => {
    render(<Skills skills={skills} />);
    const loginBtn = screen.getByRole('button', {
      name: 'Login',
    });
    expect(loginBtn).toBeInTheDocument();
  });

  test('Start Learning button is not rendered', () => {
    render(<Skills skills={skills} />);
    const learningBtn = screen.queryByRole('button', {
      name: 'Start Learning',
    });
    expect(learningBtn).not.toBeInTheDocument();
  });

  test('Start Learning button will be displayed after 2s', async () => {
    render(<Skills skills={skills} />);
    const learningBtn = await screen.findByRole(
      'button',
      {
        name: 'Start Learning',
      },
      {
        timeout: 2000,
      },
    );
    expect(learningBtn).toBeInTheDocument();
  });
});
