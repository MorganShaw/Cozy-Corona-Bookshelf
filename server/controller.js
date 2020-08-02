const books = require('./books.json');
let nextId = 21;

module.exports = {
    getBooks: (req, res) => {
        res.status(200).send(books)
    },
   
    getGenre: (req, res) => {
        const {genre} = req.query
        // console.log(req.query)
        let filteredGenre = books.filter(book => book.genre === genre)
        // console.log(filteredGenre)
        res.status(200).send(filteredGenre)
    },
    addBook: (req, res) => {
        // console.log(req.body)
        const {title, author, genre, coverImg} = req.body;
        if(!title || !author || !genre) {
            res.status(405).send('Expected to receive complete book info')
        } else {
            const newBook = {
                id: nextId,
                title,
                author,
                genre,
                coverImg,
                completed: false
            }
            books.push(newBook);
            nextId++;
            res.status(200).send(books)
            // console.log(newBook)
        }
    },
   
    deleteBook: (req, res) => {
        const {id} = req.params
        const index = books.findIndex(book => book.id === +id)
        if(index === -1) {
            res.status(404).send("Book not found in bookshelf.")
        } else {
            books.splice(index, 1)
            res.status(200).send(books)
        }
        // let booksAfterDelete = books.filter(book => book.id !== +id )
        // console.log(req.params)
        res.status(200).send(books)
        
    },
    completeBook: (req, res) => {
        const {id} = req.params
        // console.log(req.params)
        const index = books.findIndex(book => book.id === +id)
        if(index === -1) {
            res.status(404).send("Book not found in the bookshelf.")
        } else {
            books[index].completed = !books[index].completed
            console.log(books[index])
            res.status(200).send(books)
        }
    }
}

// With complete book, I'm trying to
//find id of book that is completed. If the id in the array books matches the id in the req.query, change status from completed false to completed true. There will be a toggle function in react for this with conditional rendering.

//getGenre above - Pro tip from Rob: In the real world, you wouldn't use a query like this, because you already have all the information from the getBooks handler, and you can filter that on the front-end. Some sites charge per http transaction, so having an unnecessary query could increase your cost quite a bit. I'm doing this for the project just to get practice with query (and to get the 2 points). 