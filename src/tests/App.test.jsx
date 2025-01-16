import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('mounting phase', () => {
  it('no SingleComment in page at first rendering', () => {
    render(<App />);
    const singleCommentInstances = screen.queryAllByTestId('singleComment');
    console.log(singleCommentInstances.length);

    expect(singleCommentInstances).toHaveLength(0);
  });
});
