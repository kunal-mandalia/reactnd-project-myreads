import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBooksBar extends Component {
  state = {
    searchText: ''
  };

  handleChange (value) {
    this.setState({ searchText: value });
    value === '' ? this.props.handleClearSearch() : this.props.handleSearch(value);
  }

  render () {
    return (
      <div className="search-books-bar">
        <Link to='/' className='close-search'>Close</Link>
        <div className="search-books-input-wrapper">
          <input
            id='search-input'
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => this.handleChange(e.target.value)}
            value={this.state.searchText}
            autoFocus
          />
        </div>
      </div>
    )
  }
}

SearchBooksBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleClearSearch: PropTypes.func.isRequired
};

export default SearchBooksBar;
