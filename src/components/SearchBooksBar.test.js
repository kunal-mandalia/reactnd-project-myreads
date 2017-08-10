import SearchBooksBar from './SearchBooksBar';
import renderer from 'react-test-renderer';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import MountOptions from '../../helper/mountOptions';

const mockHandleSearch = jest.fn();
const mockHandleClearSearch = jest.fn();

const props = {
  handleSearch: mockHandleSearch,
  handleClearSearch: mockHandleClearSearch
};

describe('<SearchBooksBar .../>', () => {
  it('should update search query on input', () => {
    const value = 'learning react';
    const wrapper = mount(<SearchBooksBar {...props} />, MountOptions);
    wrapper.find('#search-input').simulate('change', {target: {value}});
    expect(wrapper.state().searchText).toEqual(value);
  })

  it('should link to main page', () => {
    const wrapper = shallow(<SearchBooksBar {...props} />);
    expect(wrapper.find('Link').props().to).toEqual('/');
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<MemoryRouter><SearchBooksBar {...props} /></MemoryRouter>);
    expect(tree).toMatchSnapshot();
  })
})
