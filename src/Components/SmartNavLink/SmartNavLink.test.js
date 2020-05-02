import React from 'react';
import { render } from '@testing-library/react';
import SmartNavLink from '.';

test('renders SmartNavLink without crashing', () => {
  render(<SmartNavLink />);
});