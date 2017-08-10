import React from 'react'
import Book from './Book'
import { shallow } from 'enzyme'

const mockFn = jest.fn()
const props = {
  id: 'abc',
  title: 'reactor',
  authors: ['p1', 'p2'],
  handleMoveBook: mockFn
}
const selectOptions = {
  target: {
    options: [
      { value: 'currentlyReading' },
      { value: 'read' },
      { value: 'wantToRead' },
      { value: 'none' },
    ],
    selectedIndex: 1
  }
}

describe('<Book ... />', () => {
  it(`should handle moving book`, () => {
    const wrapper = shallow(<Book {...props} />)
    wrapper.find('select').simulate('change', selectOptions)
    expect(props.handleMoveBook.mock.calls.length).toEqual(1)
  })

  it(`should show at least 3 options for shelf category`, () => {
    const wrapper = shallow(<Book {...props} />)
    expect(wrapper.find('option').length).toBeGreaterThanOrEqual(3)
  })
})
