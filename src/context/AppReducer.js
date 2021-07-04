export default function AppReducer(state, action) {
    switch(action.type) {

        case "ADD_TO_FAVORITES":
            return {
                ...state,
                favoritesList: [action.payload, ...state.favoritesList]
            };
        case "REMOVE_FROM_FAVORITES":
            return {
                ...state,
                favoritesList: state.favoritesList.filter(movie => movie.id !== action.payload)
            }
        default:
            return state;
    }
}