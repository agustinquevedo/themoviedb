import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
    const { favoritesList } = useContext(GlobalContext)

    return (
    <div className="container pt-2 pb-2">
        <h2 className="title is-3 is-size-5-mobile">My favorites movies</h2>
        { favoritesList.length > 0 ? (
            <div className="columns is-multiline">
                {
                    favoritesList.map(movie => (
                        <div className="column is-one-quarter is-full-mobile" key={movie.id}>
                            <MovieCard movie={movie} type="favoritesList"/>
                        </div>
                    ))
                }
            </div>
        ) : (
            
            <div className="notification is-link is-light">
                <p>No movies in your favorites list, add some!</p>
            </div>
            
        )
    }
        
    </div>
    );
}
  
export default Favorites