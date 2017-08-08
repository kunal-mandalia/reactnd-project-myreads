import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBooksBar extends Component {
  state = {
    searchText: ''
  }

  handleChange (value) {
    this.setState({ searchText: value })
    value === '' ? this.props.handleClearSearch() : this.props.handleSearch(value)
  }

  render () {
    return (
      <div className="search-books-bar">
        <Link to='/' className='close-search'>Close</Link>
        <div className="search-books-input-wrapper">
          {/* 
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
            
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input
            id='search-input'
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => this.handleChange(e.target.value)}
            value={this.state.searchText}
          />
        </div>
      </div>
    )
  }
}

SearchBooksBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleClearSearch: PropTypes.func.isRequired
}

export default SearchBooksBar
