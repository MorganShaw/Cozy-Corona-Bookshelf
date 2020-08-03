import React from 'react';
import axios from 'axios';
import './reset.css';
import './App.css';
import Header from './Components/Header';
import AddBook from './Components/AddBook';
import Bookshelf from './Components/Bookshelf';
import GenreSelector from './Components/GenreSelector'
class App extends React.Component {
  constructor() {
    super();
    this.state  = {
      books: [] 
    }
    this.getBooks = this.getBooks.bind(this)
    this.getGenre = this.getGenre.bind(this)
    this.addBook = this.addBook.bind(this)
    this.deleteBook = this.deleteBook.bind(this)
    this.completeBook = this.completeBook.bind(this)
  }

  componentDidMount() {
    this.getBooks();
  }
  
  getBooks = (genre) => {
    axios.get('/api/books')
    .then(res => {
      this.setState({
        books: res.data
      })
    }).catch(err => console.log(err))
  }

  //Look at this - is this right?
  addBook = (e, title, author, genre, coverImg) => {
    e.preventDefault()
    axios.post('/api/books', {title, author, genre, coverImg})
    .then(res => {
      this.setState({
        books: res.data
      })
    }).catch(err => console.log(err))
  }

  getGenre = (e, genre) => {
    e.preventDefault()
    axios.get(`/api/books/genre?genre=${genre}`)
    .then(res => {
      this.setState({
        books: res.data
      })
    }).catch(err => console.log(err))
  }

  deleteBook = (e, id) => {
    e.preventDefault();
    axios.delete(`/api/books/${id}`)
    .then(res => {
      this.setState({
        books: res.data
      })
    }).catch(err => console.log(err))
  }

  completeBook = (e, id) => {
    e.preventDefault();
    axios.put(`/api/books/complete/${id}`)
    .then(res => {
      this.setState({
        books: res.data
      })
    }).catch(err => console.log(err))
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="page">
          <Header />
          <div className="under-header">
            <Bookshelf 
              completeBook={this.completeBook}
              deleteBook={this.deleteBook}
              books={this.state.books} />
            <div className="right-components">
              <GenreSelector 
                books={this.state.books}
                getGenre={this.getGenre} />  
              <AddBook 
                addBook={this.addBook} />
            </div>    
          </div>
        </div>  
      </div>
    );
  }
}

export default App;

//The getGenre isn't working. 

//What's the e.preventDefault for?

//Do I need to bind all those functions? I know they're arrow functions. Does it matter?