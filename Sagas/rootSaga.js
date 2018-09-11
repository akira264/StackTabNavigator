import { all, fork} from 'redux-saga/effects';
import { watchFetchMovies } from './movieSagas';

export default function* rootSaga(){
    yield all([
       fork(watchFetchMovies),
    ]);
}