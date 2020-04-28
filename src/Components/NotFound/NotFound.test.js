import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '.';

test('renders NotFound without crashing', () => {
  render(<NotFound />);
});