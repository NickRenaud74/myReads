import React from 'react';
import Bookshelf from './BookShelf';
import { Link } from 'react-router-dom'

function BookCase(props) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    < Bookshelf
                        shelf='Currently Reading'
                        books={props.sortShelf('currentlyReading')}
                        onMove={props.onMove}
                    />
                    < Bookshelf
                        shelf='Want to Read'
                        books={props.sortShelf('wantToRead')}
                        onMove={props.onMove}
                    />
                    < Bookshelf
                        shelf='Read'
                        books={props.sortShelf('read')}
                        onMove={props.onMove}
                    />
                </div>
            </div>
            <div className="open-search">
                < Link
                    to='/search'
                    className='open-search'
                >
                <button>Add a book</button>
                </Link>
            </div>
        </div>
    )
}

export default BookCase;