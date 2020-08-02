import React from 'react';
import "../reset.css";
import "./Book.css";

const Book = (props) => {
    const style = {
        backgroundImage: "url("+props.book.coverImg+")",
        backgroundSize: "100% 100%"
    }
    return (
        <div>
            <div className="book-box" style={style}>
                <div className="ttl-author-container">
                    <h1 className="book-title">{props.book.title}</h1>
                    <h2 className="book-author">{props.book.author}</h2>
                </div>
                <div className="bk-btn-container">
                    <button onClick={() => props.completeBook(props.book.id)}>DONE</button>
                    <button onClick={() => props.deleteBook(props.book.id)}>DELETE</button>
                </div>
            </div>
            
        </div>
    )
}

export default Book;


//Each book needs a delete and complete button. 

//I want to understand better what to pass as arguments when invoking these functions, and when to use () or (e) at start of arrow function.

//Need conditional rendering for book if status is complete. I think that will live on App.js.