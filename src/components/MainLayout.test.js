import React from 'react';
import MainLayout from './MainLayout';
import { shallow } from 'enzyme';

const props = {
  books: [],
  handleMoveBook: () => {}
};

describe('<MainLayout .../>', () => {
  it('should show 3 shelves for books', () => {
    const wrapper = shallow(<MainLayout {...props} />);
    expect(wrapper.find('BookShelf')).toHaveLength(3);
  })

  it('should link to search page', () => {
    const wrapper = shallow(<MainLayout {...props} />);
    expect(wrapper.find('Link').props().to).toEqual('/search');
  })
})
