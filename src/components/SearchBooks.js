import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom'


class SearchBooks extends Component {

    state = {
        query: '',
        booksFound: [],
    }

    handleChange = e => {
        const search = e.target.value;
        this.setState({ query: search })

        if (search.length > 0) {
            BooksAPI.search(search)
                .then(books => {
                    books.error ? this.setState({ booksFound: [] }) : this.assignShelf(books)
                })
        } else {
            this.setState({ booksFound: [], query: '' })
        }
    }

    assignShelf = (searchBooks) => {
        const books = searchBooks.map(book => {
            const bookOnShelf = this.props.books.find(b => b.id === book.id);
             
            bookOnShelf ? book.shelf = bookOnShelf.shelf : book.shelf = 'none';
             
            return book;
        })
        
        this.setState({ booksFound: books })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.booksFound.map(book => (
                            < Book
                                key={book.id}
                                book={book}
                                onMove={this.props.onMove}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks;