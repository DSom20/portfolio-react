import React from 'react';
import { render } from '@testing-library/react';
import Home from '.';

xtest('renders Home without crashing', () => {
  render(<Home />);
});