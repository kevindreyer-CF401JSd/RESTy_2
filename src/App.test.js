import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('<App />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('is alive at application start', () => {
    const component = shallow(<App />)
    expect(component.find('div')).toExist()
  })
})


