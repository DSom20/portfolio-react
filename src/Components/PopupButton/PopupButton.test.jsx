import React from 'react';
import { render } from '@testing-library/react';
import PopupButton from '.';

test('renders PopupButton without crashing', () => {
  render(<PopupButton />);
});