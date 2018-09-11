import { combineReducers } from 'redux';
import movieReducers from './MovieReducers';

const allReducers = combineReducers({
    movieReducers,
    //you can add more reducers here, separated by , !
});
export default allReducers;