import React from 'react';
// import { render } from '@testing-library/react';
import {shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'fetch-mock-jest';
import waitForExpect from 'wait-for-expect';

import App from './App';

configure({adapter: new Adapter()});

describe('<App/> (enzyme test)', () => {
  beforeEach(() => {
    fetchMock.restore()
  })
  it('App is alive', () => {
    let app = shallow(<App />)
    expect(app.find({ children: 'RUN' }).exists()).toBeTruthy()
  })
})
