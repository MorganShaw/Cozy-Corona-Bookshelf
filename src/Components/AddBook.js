import React from "react";
import '../reset.css';
import './AddBook.css';
import Book from "./Book";


class AddBook extends React.Component {
    constructor(){
        super();
        this.state = {
            title: '',
            author: '',
            genre: '',
            coverImg: ''
        }
    }

    infoHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const mappedBooks = props.books.map(book => {
            return <Book
                    key={book.id}
                    book={book} />
        })
        return(
            <div>
                <form
                    onSubmit={e => {
                        this.props.addBook
                    }}>
                    <input 
                        name="title"
                        type="text"
                        placeholder="Title"
                        onChange={(e) => this.infoHandler(e)}
                        value={this.state.title}/>
                    <button>Add</button>

                </form>        

            </div>
        )
    }
}

export default AddBook;