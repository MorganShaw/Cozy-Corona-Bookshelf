import React from 'react';
import axios from 'axios';
import './reset.css';
import './App.css';
import Header from './Components/Header';
import AddBook from './Components/AddBook';
import Bookshelf from './Components/Bookshelf'
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

  getOneBook(genre){
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
    axios.put(`/api/books/${id}`)
    .then(res => {
      this.setState({
        books: res.data
      })
    }).catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Bookshelf 
          completeBook={this.completeBook}
          deleteBook={this.deleteBook}
          
          />
        <AddBook 
          newBook={this.addBook}/>
      </div>
    );
  }
}

export default App;
