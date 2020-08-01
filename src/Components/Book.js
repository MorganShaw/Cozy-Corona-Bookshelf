import React from 'react';
import "../reset.css";
import "./Book.css";

const Book = (props) => {
    return (
        <div>
            <span className="book-box">
                {/* <img src={props.book.coverImg} alt="Book Cover"/> */}
                <h1 className="book-title">{props.book.title}</h1>
                <h2 className="book-author">{props.book.author}</h2>
                <div className="bk-btn-container">
                    <button onClick={() => props.completeBook(props.book.id)}>Complete</button>
                    <button onClick={() => props.deleteBook(props.book.id)}>Delete</button>
                </div>

            </span>
        </div>
    )
}

export default Book;


//Each book needs a delete and complete button. 

//I want to understand better what to pass as arguments when invoking these functions, and when to use () or (e) at start of arrow function.

//Need conditional rendering for book if status is complete. I think that will live on App.js.