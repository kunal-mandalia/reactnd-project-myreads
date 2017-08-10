import React from 'react';
import * as BooksAPI from '../BooksAPI';
import '../styles/App.css';
import { Route } from 'react-router-dom';
import SearchBooksLayout from './SearchBooksLayout';
import MainLayout from './MainLayout';

export const isBookInArray = (bookId, books) => books.map(b => b.id).indexOf(bookId) !== -1;

export const setShelfProp = (booksTo, booksFrom) => {
  let booksIdShelfMap = {};
  booksFrom.forEach(b => { booksIdShelfMap[b.id] = b.shelf });
  return booksTo.map(b => ({ ...b, shelf: booksIdShelfMap[b.id] || 'none' }));
}

class BooksApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      books: [],
      error: false,
      searchResults: []
    }
    this.handleMoveBook = this.handleMoveBook.bind(this);
    this.updateBookShelf = this.updateBookShelf.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
  }

  componentDidMount () {
    if (this.state.books.length === 0) {
      BooksAPI.getAll()
      .then(books => {
        this.setState({ books, error: false })
      })
      .catch(() => {
        this.setState({ error: true })
      });
    }
  }

  updateBookShelf (book, shelf) {
    BooksAPI.update(book, shelf);
    return Object.assign({}, book, { shelf });
  }

  handleMoveBook (bookId, shelf, book) {
    // if book doesn't exist in state, add it
    this.setState((state) => ({
      books: isBookInArray(bookId, state.books) ? 
        state.books.map(b => (b.id === bookId) ?  this.updateBookShelf(b, shelf) : b) :
        state.books.concat(this.updateBookShelf(book, shelf)),
      searchResults: state.searchResults.map(b => b.id === bookId ? book : b)
    }));
  }

  handleSearch (query) {
    BooksAPI.search(query, 20)
      .then(searchResults => {
        searchResults.error ?
          this.setState({ error: true })  :
          this.setState((state) => ({ searchResults: setShelfProp(searchResults, state.books), error: false }))
      })
      .catch(() => {
        this.setState({ error: true })
      });
  }

  handleClearSearch () {
    this.setState({ searchResults: [] });
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooksLayout
            searchResults={this.state.searchResults}
            handleSearch={this.handleSearch}
            handleMoveBook={this.handleMoveBook}
            handleClearSearch={this.handleClearSearch}
          />
        )}
      />

      <Route exact path='/' render={() => (
        <MainLayout
          books={this.state.books}
          handleMoveBook={this.handleMoveBook}
        />
        )}
      />
    </div>
    )
  }
}

export default BooksApp;
