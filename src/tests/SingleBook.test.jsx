import { render, fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('user interaction', () => {
  it('shows red border when clicked', () => {
    render(<App />);
    const books = screen.getAllByTestId('singleBookElement');

    const randomBookIndex = Math.floor(Math.random() * 151);

    fireEvent.click(books[randomBookIndex]);

    // console.log(books[randomBookIndex].style.border);

    expect(books[randomBookIndex].style.border).toBe('3px solid red');
  });
});
