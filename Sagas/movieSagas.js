import { ADD_MOVIE, FETCH_FAILED, FETCH_SUCCEEDED, FETCH_MOVIES } from '../Actions/ActionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';
import { fetchMoviesAction } from '../Actions/Index';

function* fetchMovies(){
    try {
        const receivedMovies = yield Api.getMoviesFromApi();
        yield put({type: FETCH_SUCCEEDED, receivedMovies : receivedMovies})
        
    } catch (error) {
        yield put({type : FETCH_FAILED, error});
    }
}

   
function* sayHello(){
    console.log('Hello world saga!');
}

export function* watchFetchMovies(){
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}