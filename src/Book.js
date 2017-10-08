import React, { Component } from 'react'

class Book extends Component {
  state = {
    value: "none"
  }

  handleChange = (e) => {
    this.props.changeShelf({ book: this.props.book, shelf: e.target.value })
  }

  render() {
    return (
      <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors.join(",")}</div>
      </div>
    )
  }
}

export default Book
