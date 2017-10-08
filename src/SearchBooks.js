import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class SearchBooks extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={() => {
            this.props.onResetSearch()
          }}>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.props.onSearchBooks}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <Bookshelf books={this.props.results} changeShelf={this.props.onChangeShelf} />
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
