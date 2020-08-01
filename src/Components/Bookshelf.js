import React from 'react';
import axios from 'axios';
import './Book';
import './Bookshelf.css';
import Book from './Book';

const Bookshelf = (props) => {
    const bookMap = props.books.map(book => {
        return <Book
                    key={books.id}
                    book={book}
                    completeBook={props.completeTodo}
                    deleteBook={props.completeBook} />
    })
    return (
        <div className="bookshelf">
            {bookMap}
        </div>
    )

}

export default Bookshelf;