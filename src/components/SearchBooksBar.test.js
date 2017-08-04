import SearchBooksBar from './SearchBooksBar'
import renderer from 'react-test-renderer'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

const props = {
  searchBooks: () => {}
}

describe('<SearchBooksBar .../>', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<MemoryRouter><SearchBooksBar {...props} /></MemoryRouter>)
    expect(tree).toMatchSnapshot()
  })
})
