import React from 'react';

class Book extends React.Component {

    handleChange = e => {
        const shelf = e.target.value;
        this.props.onMove(this.props.book, shelf)
    }

    bookShelf = () => {
        let shelf;
        this.props.book.shelf ? shelf = this.props.book.shelf : shelf = 'none'
        return shelf
    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                            style={{
                                width: 128,
                                hieght: 193,
                                backgroundImage: this.props.book.imageLinks ?
                                    this.props.book.imageLinks.smallThumbnail :
                                    ''
                            }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select onChange={this.handleChange} value={this.props.book.shelf}>
                                <option value="move">Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book;