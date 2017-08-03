import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

const BookShelf = ({ title, shelf, books, handleMoveBook }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book, i) => (
          <li key={i}>
            <Book {...book} handleMoveBook={handleMoveBook} />
          </li>
        ))}
      </ol>
    </div>
  </div>
)

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleMoveBook: PropTypes.func.isRequired
}

export default BookShelf
