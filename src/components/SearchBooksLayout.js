import PropTypes from 'prop-types';
import React from 'react';
import SearchBooksBar from './SearchBooksBar';
import Book from './Book';
import keyIndex from 'react-key-index';

const SearchBooksLayout = ({
  handleSearch,
  handleClearSearch,
  handleMoveBook,
  searchResults
}) => {
  const books = keyIndex(searchResults, 1)
  return (
    <div className="search-books">
      <SearchBooksBar
        handleSearch={handleSearch}
        handleClearSearch={handleClearSearch}
      />
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book {...book} handleMoveBook={handleMoveBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

SearchBooksLayout.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleMoveBook: PropTypes.func.isRequired,  
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClearSearch: PropTypes.func.isRequired
};

export default SearchBooksLayout;
