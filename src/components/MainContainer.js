import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'
import { getAll, update } from '../BooksAPI'
import { shelves } from '../data.js'

export const filterBooksByShelf = (books, shelf) => (
  books.filter(b => b.shelf === shelf)
)

class MainContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: [],
      error: false
    }
    this.moveBook = this.moveBook.bind(this)
    this.updateBookShelf = this.updateBookShelf.bind(this)
  }

  componentDidMount () {
    if (this.state.books.length === 0) {
      getAll()
      .then(books => {
        this.setState({ books, error: false })
      })
      .catch(() => {
        this.setState({ error: true })
      })
    }
  }

  updateBookShelf (book, shelf) {
    update(book, shelf)
    return Object.assign({}, book, { shelf })
  }

  moveBook (bookId, shelf) {
    this.setState((state) => ({
      books: state.books.map(b => (b.id === bookId) ?  this.updateBookShelf(b, shelf) : b)
    }))
  }

  render () {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((s, i) => (
            <BookShelf
              key={i}
              title={s.title}
              shelf={s.shelf}
              books={filterBooksByShelf(this.state.books, s.shelf)}
              handleMoveBook={this.moveBook}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MainContainer
