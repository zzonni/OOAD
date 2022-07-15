import instance from '../axios'

const addNewMovieApi = (data) => {
   // console.log('Check data from service: ', data)
   return instance.post('/movie/add', data)
}

const findMovieApi = (keyword) => {
   return instance.get(`/movie/find/${keyword}`)
}

const updateMovieApi = (editedData) => {
   return instance.put('/movie/edit', editedData)
}

const deleteMovieApi = (movieId) => {
   return instance.delete(`/movie/delete/${movieId}`)
}

const getMovieApi = (movieId) => {
   return instance.get(`/movie/${movieId}`)
}



export {
   addNewMovieApi,
   findMovieApi,
   updateMovieApi,
   deleteMovieApi,
   getMovieApi
}