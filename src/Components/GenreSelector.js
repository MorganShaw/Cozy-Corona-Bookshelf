import React from "react";
import "./GenreSelector.css"

const GenreSelector = (props) => {
    // const filteredGenre = props.books.filter(book => book.genre === 
    // })
    const {genre} = props.books;
    return (
        <div>
            <div className="genre-box">
                <h1 className="right-pg-text-small">
                    Keep track of books on your bookshelf that you now have time to read. <br/>Thanks, Covid!</h1>
                <h1 className="right-pg-text"> 
                   What genre are you in the mood for?</h1>
                <input 
                    className="input-fields"
                    name="genre"
                    type="text"
                    value={genre}
                    //Do I need value? What would that mean?
                    onChange={(e) => props.getGenre(genre)}
                    placeholder="genre"/>
            </div>

        </div>
    )
}

export default GenreSelector;

//Work on genre selector.