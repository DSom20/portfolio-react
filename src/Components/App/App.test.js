import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

xtest('renders App without crashing', () => {
  render(<App />);
});
