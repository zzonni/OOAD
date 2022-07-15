
import db from '../models/index'


let addNewMovie = (data) => {
   return new Promise(async (resolve, reject) => {
      try {
         let newMovie = await db.Movie.create({
            movieName: data.movieName,
            date: data.date,
            category: data.category,
            duration: data.duration,
            rate: data.rate,
            image: data.image
         })
         resolve(newMovie)
      } catch (e) {
         reject(e)
      }
   })
}

let getMovie = (movieId) => {
   return new Promise(async (resolve, reject) => {
      try {
         let movieObj = {}
         if (movieId === 'all') {
            let movies = await db.Movie.findAll({
               attributes: {
                  exclude: ['createdAt', 'updatedAt']
               }
            })
            movieObj = movies
            resolve(movieObj)
         }
         let movie = await db.Movie.findOne({
            attributes: {
               exclude: ['createdAt', 'updatedAt']
            },
            where: {
               id: movieId
            }
         })
         movieObj = movie
         resolve(movieObj)

      } catch (e) {
         reject(e)
      }
   })
}

let deleteMovie = (movieId) => {
   return new Promise(async (resolve, reject) => {
      try {
         let movie = await db.Movie.findOne({
            where: {
               id: movieId
            }
         })
         if (movie) {
            await movie.destroy()
         }
         let restMovie = await db.Movie.findAll()
         resolve(restMovie)
      } catch (e) {
         reject(e)
      }
   })
}

let updateMovie = (editedMovie) => {
   return new Promise(async (resolve, reject) => {
      try {
         let movie = await db.Movie.findOne({
            where: {
               id: editedMovie.id
            }
         })
         if (movie) {
            let movieUpdated = await movie.update({
               // id: editedMovie.id,
               movieName: editedMovie.movieName,
               date: editedMovie.date,
               category: editedMovie.category,
               duration: editedMovie.duration,
               rate: editedMovie.rating,
               image: editedMovie.image,
            })
            await movieUpdated.save()
            // let allMovie = await db.Movie.findAll()
            resolve(movieUpdated)
         }
      } catch (e) {
         reject(e)
      }
   })
}

let findMovie = (keyword) => {
   return new Promise(async (resolve, reject) => {
      try {
         if (keyword) {
            let movie = await db.Movie.findOne({
               where: {
                  movieName: keyword
               }
            })
            if (movie) {
               resolve(movie)
            }
         }
      } catch (e) {
         reject(e)
      }
   })
}

module.exports = {
   addNewMovie: addNewMovie,
   getMovie: getMovie,
   deleteMovie: deleteMovie,
   updateMovie: updateMovie,
   findMovie: findMovie,
}