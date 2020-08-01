import React from 'react';
// import axios from 'axios';
import './Bookshelf.css';
import Book from './Book';

const Bookshelf = (props) => {
    const bookMap = props.books.map(book => {
        return <Book
                    key={book.id}
                    book={book}
                    completeBook={props.completeBook}
                    deleteBook={props.deleteBook} />
    })
    return (
        <div className="bookshelf">
            {bookMap}
        </div>
    )

}

export default Bookshelf;