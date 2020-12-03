import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks';
import BookCase from './components/BookCase'
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books: books })
      }
      )
  }

  sortShelf = shelf => {
    return this.state.books.filter(b => b.shelf === shelf)
  }

  handleMove = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(data => console.log(data))

    if (shelf === 'none') {
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id)
      }))
    } else {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }))
    }
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        < Route path='/search' render={() => (
          < SearchBooks
            onMove={this.handleMove}
          />
        )} />

        <Route exact path='/' render={() => (
          < BookCase
            sortShelf={this.sortShelf}
            onMove={this.handleMove}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
