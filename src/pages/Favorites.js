import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Favorites = () => {
    const { favoritesList } = useContext(GlobalContext)

    return (
    <div className="container pt-2 pb-2">
        <h2 className="title is-3 is-size-5-mobile">My favorites movies</h2>
        <div className="columns is-multiline">
            {
                favoritesList.map(movie => (
                    <div className="column is-one-quarter is-full-mobile">
                        <div className="card" key={movie.id}>
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
                        </div>
                    </div>
                ))
            }
            
        </div>
    </div>
    );
}
  
export default Favorites