import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              title="Currently Reading"
              books={this.props.books.filter((book) => book.shelf === "currentlyReading")}
              changeShelf={this.props.onChangeShelf}
            />
            <Bookshelf
              title="Want to Read"
              books={this.props.books.filter((book) => book.shelf === "wantToRead")}
              changeShelf={this.props.onChangeShelf}
            />
            <Bookshelf
              title="Read"
              books={this.props.books.filter((book) => book.shelf === "read")}
              changeShelf={this.props.onChangeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks

