import React from 'react'

const Movie = ({movie}) => {

    return (
        <div className="container">
            <h1 className="title">{movie.title}</h1>
        </div>
    )
}

export default Movie