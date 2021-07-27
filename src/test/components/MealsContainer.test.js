import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import MealsContainer from '../../containers/MealsContainer';
import store from '../../redux/store';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<BrowserRouter> <Provider store={store}><MealsContainer/></Provider></BrowserRouter>);
  expect(asFragment(<Provider store={store}><MealsContainer /></Provider>)).toMatchSnapshot();
});

it('displays correct first child', () => {
  const { container } = render(<BrowserRouter><Provider store={store}><MealsContainer /></Provider></BrowserRouter>);
  expect(container.firstChild).toMatchSnapshot();
});

it('negative check', () => {
  render(<BrowserRouter><Provider store={store}><MealsContainer /></Provider></BrowserRouter>);
  expect(screen.queryByText('some text!')).not.toBeInTheDocument();
});