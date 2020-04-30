import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RoutesAnimated from '.';

xtest('renders RoutesAnimated without crashing', () => {
  render(
    <MemoryRouter>
      <RoutesAnimated />
    </MemoryRouter>
  );
});