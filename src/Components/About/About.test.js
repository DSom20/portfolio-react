import React from 'react';
import { render } from '@testing-library/react';
import About from '.';

test('renders About without crashing', () => {
  render(<About />);
});