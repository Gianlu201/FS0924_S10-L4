import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';
import bookList from '../data/fantasy.json';

describe('mounting phase', () => {
  it('all books from data file are showed', () => {
    render(<App />);
    const bookInJSON = bookList.length;
    const books = screen.queryAllByTestId('singleBookItem');
    expect(books).toHaveLength(bookInJSON);
  });
});
