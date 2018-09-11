
const urlGetMovies = 'http://10.10.48.82:3000/movies';
const urlPostMovies = 'http://10.10.48.82:3000/movies';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    
    const movies = yield response.status === 200 ? response.json(): []  
    return movies;
}


//Send POST request to add new movie
function* insertNewMovieFromApi(newMovie){
    const response = yield fetch(urlPostMovies, {
        method : 'POST',
        headers :{
            Accept : 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name : newMovie.name,
            releaseYear: newMovie.releaseYear
        }),
    });
    console.log('fc saga insertNewMovieFromApi/ response = ' + response);
    return yield (response.status === 201);
}

export const Api = {
    getMoviesFromApi,
    insertNewMovieFromApi
}; 