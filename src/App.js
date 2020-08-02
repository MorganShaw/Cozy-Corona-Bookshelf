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
  }

  componentDidMount() {
    this.getBooks();
  }
  
  getBooks = () => {
    axios.get('/api/books')
    .then(res => {
      this.setState({
        books: res.data
      })
    }).catch(err => console.log(err))
  }

  //Look at this - is this right?
  addBook = (e, title, author, genre, coverImg) => {
    // e.preventDefault()
    axios.post('/api/books', {title, author, genre, coverImg})
    .then(res => {
      this.setState({
        books: res.data
      })
    }).catch(err => console.log(err))
  }

  getGenre = (genre) => {
    axios.get('/api/books/genre')
    .then(res => {
      this.setState({
        books: res.data
      })
    }).catch(err => console.log(err))
  }

  deleteBook = (id) => {
    axios.delete(`/api/books/${id}`)
    .then(res => {
      this.setState({
        books: res.data
      })
    }).catch(err => console.log(err))
  }

  completeBook = (id) => {
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

//Work on complete function. Need conditional rendering for when books are completed. 