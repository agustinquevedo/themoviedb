import React, { createContext, useReducer, useEffect  } from 'react'
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    favoritesList: localStorage.getItem('favoritesList') 
    ? JSON.parse(localStorage.getItem('favoritesList')) 
    : [],
    selectedMovie: null
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem('favoritesList', JSON.stringify(state.favoritesList))
    }, [state])

    // Actions
    // Add to favorites
    const addToFavoritesList = movie => {
        dispatch({type: "ADD_TO_FAVORITES", payload: movie})
    }
    // Remove from favorites
    const removeFromFavoritesList = id => {
        dispatch({type: "REMOVE_FROM_FAVORITES", payload: id})
    }

    return (
        <GlobalContext.Provider 
            value={{ 
                favoritesList: state.favoritesList, 
                addToFavoritesList, 
                removeFromFavoritesList
                 }}>
            {props.children}
        </GlobalContext.Provider>
    )
}