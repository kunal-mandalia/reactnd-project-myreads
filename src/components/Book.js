import PropTypes from 'prop-types';
import React from 'react';
import { shelves } from '../data.js';

const Book = ({
  id,
  title,
  authors,
  imageLinks,
  shelf,
  handleMoveBook
}) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks ? (imageLinks.smallThumbnail || imageLinks.thumbnail) : ''})` }}></div>
      <div className="book-shelf-changer">
        <select
          value={shelf}
          onChange={(e) => {
            handleMoveBook(id, e.target.options[e.target.selectedIndex].value, {
              id,
              title,
              authors,
              imageLinks,
              shelf: e.target.options[e.target.selectedIndex].value
            })}}
        >
          <option disabled>Move to...</option>
          {shelves.map((s, i) => (
            <option key={s.shelf} value={s.shelf}>{s.title}</option>
          ))}
        </select>
      </div>
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{authors}</div>
  </div>
)

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  imageLinks: PropTypes.shape({
    smallThumbnail: PropTypes.string,
    thumbnail: PropTypes.string
  }),
  shelf: PropTypes.string,  
  handleMoveBook: PropTypes.func.isRequired,
}

export default Book;
