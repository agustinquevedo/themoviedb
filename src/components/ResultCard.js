const ResultCard = ({movie}) => {
    return (
    <div className="box mt-2">
        <div className="media">
            <div className="media-left">
                <figure className="image is-128x128 is-2by3">
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
            <div className="media-content">
                <div className="content">
                    <h3 className="title is-3">{movie.title}</h3>
                    <p className="subtitle is-5">
                        {movie.release_date ? movie.release_date.substring(0,4) : "-"}
                    </p>
                    <div className="field is-grouped">
                        <p className="control">
                            <button className="button is-link is-outlined">Add to Favorites</button>
                        </p>
                        <p className="control">
                            <button className="button is-primary is-outlined">Movie Details</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
  
export default ResultCard