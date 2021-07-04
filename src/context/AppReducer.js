export default function AppReducer(state, action) {
    switch(action.type) {
        case "ADD_TO_FAVORITES":
            return {
                ...state,
                favoritesList: [action.payload, ...state.favoritesList]
            }
        default:
            return state;
    }
}