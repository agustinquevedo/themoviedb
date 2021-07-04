import React, { useState } from "react";
// Components
import ResultCard from "../components/ResultCard";

const Home = () => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    const onChange = e => {
        e.preventDefault()
        setQuery(e.target.value)

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then( res => res.json())
            .then( data => {
                if(!data.errors){
                    setResults(data.results)
                } else {
                    setResults([])
                }
            })
    }

    return (
        <>
        <div className="hero is-primary">
            <div className="hero-body">
                <div className="container is-max-desktop">
                    <h1 className="title is-1 is-size-3-mobile">Welcome to The Movie Data Base.</h1>
                    <h2 className="subtitle is-3 is-size-6-mobile">Explore now millions of movies</h2>
                    <input 
                        className="input is-medium is-rounded" 
                        type="text" 
                        placeholder="Search for a movie" 
                        value={query}
                        onChange={onChange}
                    />
                    
                </div>
            </div>
        </div>
        <div className="container pb-2">
        {
            results.length > 0 && (
                <ul>
                    { results.map(movie => (
                        <li key={movie.id}>
                            <ResultCard movie={movie}/>
                        </li>
                    ))}
                </ul>
            )
        }
        </div>
        </>
    );
}
  
export default Home