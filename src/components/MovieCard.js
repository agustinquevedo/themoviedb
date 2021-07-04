import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const MovieCard = ({movie, type}) => {
    const {removeFromFavoritesList} = useContext(GlobalContext)

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-2by3">
                    {
                        movie.poster_path ? (
                            <img 
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                                alt={`${movie.title} Poster`}
                                
                            />
                        ) : (
                            <img 
                                src={"https://via.placeholder.com/200x300/0D253F/FFFFFF?text=Poster+not+found"}
                                alt={"Poster not found"}
                            />
                        )
                    }
                </figure>
            </div>
            <div className="custom-card-content">
                <h4 className="title is-6">{movie.title}</h4>
                <button 
                    className="button is-small is-danger is-outlined"
                    onClick={() => removeFromFavoritesList(movie.id)}
                >
                    <span className="icon is-small">
                        <FontAwesomeIcon icon={faTrash} />
                    </span>
                    <span>Remove</span>
                </button>
                    
                
            </div>
        </div>
    )
}

export default MovieCard