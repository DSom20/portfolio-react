import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Routes from '.';

xtest('renders Routes without crashing', () => {
  render(
    <MemoryRouter>
      <Routes />
    </MemoryRouter>
  );
});