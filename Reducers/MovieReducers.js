import { ADD_MOVIE, FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED } from '../Actions/ActionTypes';
const movieReducers = (movies = [], action) => {
    console.log('START ============ movieReducers ');
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action.receivedMovies;
        case FETCH_FAILED:
            return [];
        case ADD_MOVIE:
            console.log('case add movie in reducer ' + JSON.stringify(action.newMovie));
            return [
                ...movies,
                action.newMovie
            ];
        default:
            return movies; //state does not change
    }
    console.log('END ============ movieReducers ');
    
}

export default movieReducers;