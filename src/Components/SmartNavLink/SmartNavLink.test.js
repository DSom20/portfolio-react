import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SmartNavLink from '.';

test('renders SmartNavLink without crashing', () => {
  render(
    <MemoryRouter>
      <SmartNavLink toPath="/"/>
    </MemoryRouter>
  );
});