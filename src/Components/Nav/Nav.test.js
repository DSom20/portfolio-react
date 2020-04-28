import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from '.';

test('renders Nav without crashing', () => {
  render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>);
});