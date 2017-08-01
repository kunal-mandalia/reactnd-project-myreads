import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'
import SearchBooksBar from './SearchBooksBar'

class SearchBooksContainer extends React.Component {
  render () {
    return (
      <div className="search-books">
        <SearchBooksBar
          searchBooks={() => {}}
        />
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default SearchBooksContainer
