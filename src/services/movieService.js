import instance from '../axios'

const addNewMovieApi = (data) => {
   // console.log('Check data from service: ', data)
   return instance.post('/movie/add', data)
}

const editMovieApi = () => {

}

const updateMovieApi = () => {

}

const deleteMovieApi = (movieId) => {
   return instance.delete(`/movie/delete/${movieId}`)
}

const getMovieApi = (movieId) => {
   return instance.get(`/movie/${movieId}`)
}



export {
   addNewMovieApi,
   editMovieApi,
   updateMovieApi,
   deleteMovieApi,
   getMovieApi
}