import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import Footer from '../../components/Footer';
import store from '../../redux/store';
import Navbar from '../../components/Navbar';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<BrowserRouter><Provider store={store}><Navbar /></Provider></BrowserRouter>);
  expect(asFragment(<Provider store={store}><Navbar /></Provider>)).toMatchSnapshot();
});

it('displays correct first child', () => {
  const { container } = render(<BrowserRouter><Provider store={store}><Navbar /></Provider></BrowserRouter>);
  expect(container.firstChild).toMatchSnapshot();
});

it('negative check', () => {
  render(<BrowserRouter><Provider store={store}><Footer /></Provider></BrowserRouter>);
  expect(screen.queryByText('some text!')).not.toBeInTheDocument();
});