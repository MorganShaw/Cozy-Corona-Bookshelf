const books = require('./books.json');
let nextId = 21;

module.exports = {
    getBooks: (req, res) => {
        res.status(200).send(books)
    },
    addBook: (req, res) => {
        const {title, author, genre, coverImg} = req.body;
        // if(!title) {
        //     res.status(405).send('Expected to receive book info')
        // } else {
            const newBook = {
                id: nextId,
                title,
                author,
                genre,
                coverImg,
                completed: false
            }
            nextId++;
            books.push(newBook);
            res.status(200).send(books)
            console.log(newBook)
        // }
    },
//     deleteBook: (req, res) => {
//         res.status(200).send(books)
//     },
//     completeBook: (req, res) => {
//         res.status(200).send(books)
//     }
}