import React from 'react';
import Book from './Book'

function Bookshelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map(book => (
                        < Book
                            key={book.id}
                            book={book}
                            onMove={props.onMove}
                        />
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Bookshelf;