import React from "react";
import '../reset.css';
import './AddBook.css';

class AddBook extends React.Component {
    constructor(props){
        super(props);
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
        const {title, author, genre, coverImg} = this.state;
        const {addBook} = this.props;
        return(
            <div className="add-form">
                <h1 className="right-pg-text">Add a book to your bookshelf</h1>
                <form
                    onSubmit={e => {
                        addBook(e, title, author, genre, coverImg)
                        this.setState({
                            title: "",
                            author: "",
                            genre: "",
                            coverImg: ""
                        })
                    }}>
                    <input 
                        name="title"
                        type="text"
                        placeholder="title"
                        onChange={(e) => this.infoHandler(e)}
                        value={title}/>
                    <input 
                        name="author"
                        type="text"
                        placeholder="author"
                        onChange={(e) => this.infoHandler(e)}
                        value={author}/>
                    <input 
                        name="genre"
                        type="text"
                        placeholder="genre"
                        onChange={(e) => this.infoHandler(e)}
                        value={genre}/>
                    <input 
                        name="coverImg"
                        type="text"
                        placeholder="cover Image URL (optional)"
                        onChange={(e) => this.infoHandler(e)}
                        value={coverImg}/>
                    <button>SUBMIT</button>

                </form>        

            </div>
        )
    }
}

export default AddBook;