# NoDB Project To Do List

Visual mockup <a href ="https://www.figma.com/file/T96hsjPDiG18zqsOp6WzwU/DevMtn---No-DB---Cozy-COVID-Bookshelf---Wireframe?node-id=0%3A1">here</a>.

### MVP
Description: A small bookshelf app inspired by COVID-induced downtime that displays a selection of books I want to read.


Features:
- User can view all books on bookshelf
- User can add a new book to the bookshelf
- User can delete a book from the bookshelf
- User can update the status of book to complete 

### ICEBOX
- Add pseudo selector to reveal book info on hover
- Add counter to show many books completed
- Add edit title feature

### SERVER
Dependencies:
- Express

Endpoints: 
- app.get("/api/books")
- app.post("/api/books")
- app.delete("/api/books/:id")
- app.put("/api/books/complete/:id")

Structure:
- server/
    - index.js
    - controller.js
    - books.js

### CLIENT
Dependencies:
- Axios

Structure:
- src/
    - App.js
    - App.css
    - reset.css
    - Components/
        - Header.js
        - Form.js
        - Book.js
        - Bookshelf.js

#### ***Connecting front end and backend config in package.json***
<code>
"main": "./server/index.js", </br>
"proxy": "http://localhost:4343",
</code>
