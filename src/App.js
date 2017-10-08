import React, { Component } from 'react'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'

class BooksApp extends Component {
  state = {
    books: [],
    results: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }
  changeShelf = ({ book, shelf }) => {
    BooksAPI.update(book, shelf).then((data) => {
      BooksAPI.get(book.id).then((updatedBook) => {
        // Update state based on previous state
        this.setState((state) => {
          state.books = state.books
            .filter((filterBook) => filterBook.id !== book.id)
            .concat(updatedBook)
        })
      })
    })
  }
  searchBooks = (e) => {
    const query = e.target.value
    BooksAPI.search(query, 20).then((data) => {
      if (data) {
        data = data.map((resultBook) => {
          const existingBook = this.state.books.filter((book) => resultBook.id === book.id)
          return (existingBook.length > 0) ? existingBook[0] : resultBook
        })
      }
      this.setState({ results: data || [] })
    })
  }
  resetSearchBooks = (e) => {
    this.setState({ results: [] })
  }
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks
            results={this.state.results}
            onSearchBooks={this.searchBooks}
            onResetSearch={this.resetSearchBooks}
            onChangeShelf={this.changeShelf}
          />
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            onChangeShelf={this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
