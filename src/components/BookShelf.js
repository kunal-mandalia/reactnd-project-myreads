import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

const BookShelf = ({ title, category, books, handleMoveBook }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          <Book
            bgImage={`http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api`}
            handleChangeCategory={(v) => { console.log(v) }}
            category='currentlyReading'
            title='To Kill a Mockingbird'
            authors='Harper Lee'
          />
        </li>
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
              <div className="book-shelf-changer">
                <select>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">Ender's Game</div>
            <div className="book-authors">Orson Scott Card</div>
          </div>
        </li>
      </ol>
    </div>
  </div>
)

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleMoveBook: PropTypes.func.isRequired
}

export default BookShelf
