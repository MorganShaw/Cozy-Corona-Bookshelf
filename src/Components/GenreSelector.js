import React from "react";
import "./GenreSelector.css"

const GenreSelector = (props) => {
    return (
        <div>
            <div className="genre-box">
                <h1 className="right-pg-text">What genre are you in the mood for?</h1>
                <input 
                    className="input-fields"
                    name="genre"
                    type="text"
                    value={props.books.genre}
                    onChange={props.getGenre}
                    placeholder="Genre"/>
            </div>

        </div>
    )
}

export default GenreSelector;

//Work on genre selector. Need conditional rendering when books in bookshelf match the genre typed in.