import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Form from '../components/form/form';

import { Provider } from 'react-redux';
import { store } from '../store/store';

test('card list component should be in the document', () => {
  const { container } = render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
  const cardsContainer = container.getElementsByClassName('cardsContainer');
  expect(cardsContainer[0]).toBeInTheDocument();
});
