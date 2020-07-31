const express = require('express');
const app = express();
const port = 4343;
const ctrl = require('./controller');

app.use(express.json());

app.get('/api/books', ctrl.getBooks)
app.get('/api/books/genre', ctrl.getGenre)
app.post('/api/books', ctrl.addBook)
app.delete('/api/books/:id', ctrl.deleteBook)
app.put('/api/books/complete/:id', ctrl.completeBook)


app.listen(port, () => 
console.log(`Server is here to serve on port ${4343}`))