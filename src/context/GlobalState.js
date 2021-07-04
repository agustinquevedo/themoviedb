import React, { createContext, useReducer, useEffect  } from 'react'
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    favoritesList: [],
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    const addToFavoritesList = movie => {
        dispatch({type: "ADD_TO_FAVORITES", payload: movie})
    }

    return (
        <GlobalContext.Provider value={{ favoritesList: state.favoritesList, addToFavoritesList }}>
            {props.children}
        </GlobalContext.Provider>
    )
}