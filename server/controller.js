const books = require('./books.json');
let id = 21;

module.exports = {
    getBooks: (req, res) => {
        res.status(200).send(books)
    },
//     addBook: (req, res) => {
//         res.status(200).send(books)
//     },
//     deleteBook: (req, res) => {
//         res.status(200).send(books)
//     },
//     completeBook: (req, res) => {
//         res.status(200).send(books)
//     }
}