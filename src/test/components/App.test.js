import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import App from '../../App'
import store from '../../redux/store'
import {Provider} from 'react-redux'
import '@testing-library/jest-dom';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Provider store={store}><App /></Provider>);
  expect(asFragment(<Provider store={store}><App /></Provider>)).toMatchSnapshot();
});
