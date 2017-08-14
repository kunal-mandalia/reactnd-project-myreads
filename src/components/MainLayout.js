import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import { shelves } from '../data.js';
import PropTypes from 'prop-types';

export const filterBooksByShelf = (books, shelf) => (
  books.filter(b => b.shelf === shelf)
);

const MainLayout = ({ books, handleMoveBook }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      {shelves.map(s => s.showInMainLayout && (
        <BookShelf
          key={s.shelf}
          title={s.title}
          shelf={s.shelf}
          books={filterBooksByShelf(books, s.shelf)}
          handleMoveBook={handleMoveBook}
        />
      ))}
    </div>
    <div className="open-search">
      <Link to='/search'>Add a book</Link>
    </div>
  </div>
)

MainLayout.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleMoveBook: PropTypes.func.isRequired
};

export default MainLayout;
