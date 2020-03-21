import React from 'react';
import { render } from '@testing-library/react';
import {shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock-jest';
import waitForExpect from 'wait-for-expect';

import App from './App';

describe('<App/> (enzyme test)', () => {
  beforeEach(() => {
    fetchMock.restore()
  })
  it('App is alive, RUN button exists', () => {
    let app = shallow(<App />)
    expect(app.find({ children: 'RUN' }).exists()).toBeTruthy()
  })

  it('the Run button gets ', async () => {
    const testRESTy =
      [
        { name: 'test 1 RESTy get from api', url: 'http://example.com/1' },
        { name: 'test 2 RESTy get from api', url: 'http://example.com/2' }
      ]
    fetchMock.getAny(JSON.stringify(testRESTy))
    const app = mount(<App />)
    const button = app.find({ children: 'RUN' })
    button.simulate('click')
    await waitForExpect(() => {
      expect(app.state('results')).toEqual(JSON.stringify(testRESTy))
    })
  })
})
