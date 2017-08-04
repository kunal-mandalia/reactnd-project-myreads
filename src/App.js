import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooksContainer from './components/SearchBooksContainer'
import MainContainer from './components/MainContainer'

class BooksApp extends React.Component {
    constructor (props) {
    super(props)
    this.state = {
      books: [],
      error: false,
      searchResults: []
    }
    this.handleMoveBook = this.handleMoveBook.bind(this)
    this.updateBookShelf = this.updateBookShelf.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount () {
    if (this.state.books.length === 0) {
      BooksAPI.getAll()
      .then(books => {
        this.setState({ books, error: false })
      })
      .catch(() => {
        this.setState({ error: true })
      })
    }
  }

  updateBookShelf (book, shelf) {
    BooksAPI.update(book, shelf)
    return Object.assign({}, book, { shelf })
  }

  handleMoveBook (bookId, shelf, book) {
    // if book doesn't exist in state, add it
    console.log(bookId, shelf, book)
    this.setState((state) => ({
      books: state.books.map(b => (b.id === bookId) ?  this.updateBookShelf(b, shelf) : b)
    }))
  }

  handleSearch (query) {
    BooksAPI.search(query, 20)
      .then(searchResults => {
        this.setState({ searchResults, error: false })
      })
      .catch(() => {
        this.setState({ error: true })
      })
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooksContainer
            searchResults={this.state.searchResults}
            handleSearch={this.handleSearch}
            handleMoveBook={this.handleMoveBook}            
          />
        )}
      />

      <Route exact path='/' render={() => (
        <MainContainer
          books={this.state.books}
          handleMoveBook={this.handleMoveBook}
        />
        )}
      />
    </div>
    )
  }
}

export default BooksApp
