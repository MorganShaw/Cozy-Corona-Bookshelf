import React from "react";
import "./GenreSelector.css"
// import express from "express";

class GenreSelector extends React.Component {
    constructor(){
        super()
        this.state = {
            genre: ""
        }
    }

    handleChange = (e) => {
        // e.preventDefault();
        this.setState({
            genre: e.target.value
        })
        // this.setState({
        //     genre: ""
        // })
    }
    
    render(){
        return (
            <div>
                <div className="genre-box">
                    <h1 className="right-pg-text right-pg-genre">
                       What genre are you <br/>in the mood for?</h1>
                    <input 
                        className="input-fields"
                        name="genre"
                        type="text"
                        value={this.state.genre}
                        //Do I need value? What would that mean?
                        onChange={(e) => this.handleChange(e)}
                        placeholder="genre"/>
                    <button
                        onClick={(e) => {
                            this.props.getGenre(this.state.genre)
                            this.setState({genre: ""})
                        }
                        }
                            >SUBMIT</button>
                </div>
    
            </div>
        )

    }
}

export default GenreSelector;

//I'm trying to get the delete function to work when genre selector is active. Right now, it just refreshes the page and shows all the books. I tried to use e.preventDefault but it did nothing.