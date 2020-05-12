import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AnimatedOpacityText from '.';

test('renders AnimatedOpacityText without crashing', () => {
  render(
    <MemoryRouter>
      <AnimatedOpacityText />
    </MemoryRouter>
  );
});