import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'
import SearchBooksBar from './SearchBooksBar'
import Book from './Book'

class SearchBooksContainer extends React.Component {
  render () {
    return (
      <div className="search-books">
        <SearchBooksBar
          handleSearch={this.props.handleSearch}
        />
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.searchResults.map((book, i) => (
              <li key={i}>
                <Book {...book} handleMoveBook={this.props.handleMoveBook} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooksContainer
