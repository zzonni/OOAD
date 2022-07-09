import instance from '../axios'

const addNewMovieApi = (data) => {
   // console.log('Check data from service: ', data)
   return instance.post('/register', data)
}

const editMovieApi = () => {

}

const updateMovieApi = () => {

}

const deleteMovieApi = () => {

}



export {
   addNewMovieApi,
   editMovieApi,
   updateMovieApi,
   deleteMovieApi
}