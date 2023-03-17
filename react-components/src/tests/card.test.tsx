import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from '../components/card';

afterEach(cleanup);

it('this script should take a snapshot', () => {
  const { asFragment } = render(
    <Card author="test author" title="test title" description="test description" />
  );
  expect(asFragment()).toMatchSnapshot();
});
