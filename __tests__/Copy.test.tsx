import React from 'react';
import { render } from '@testing-library/react';
import Copy from '@/components/Copy/Copy';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';

describe('Copy component', () => {
  it('renders children prop', () => {
    const text = 'This is a test copy';
    const { getByText } = render(<Copy>{text}</Copy>);
    expect(getByText(text)).toBeInTheDocument();
  });

  it('has correct class name', () => {
    const text = 'This is a test copy';
    const { container } = render(<Copy>{text}</Copy>);
    expect(container.firstChild).toHaveClass('pn-copy');
  });
});