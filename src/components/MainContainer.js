import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'
import { shelves } from '../data.js'

export const filterBooksByShelf = (books, shelf) => (
  books.filter(b => b.shelf === shelf)
)

class MainContainer extends Component {

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
              books={filterBooksByShelf(this.props.books, s.shelf)}
              handleMoveBook={this.props.handleMoveBook}
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
