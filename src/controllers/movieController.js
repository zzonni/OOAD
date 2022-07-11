import movieService from '../services/movieService'

const movieController = {
   handleAddNewMovie: async (req, res) => {
      try {
         let newMovie = await movieService.addNewMovie(req.body)
         return res.status(200).json(newMovie)
      } catch (e) {
         return res.status(500).json(e)
      }
   },
   handleGetMovie: async (req, res) => {
      try {
         let listMovies = await movieService.getMovie(req.params.id)
         if (listMovies) {
            return res.status(200).json({ listMovies })
         } else {
            return res.status(404).json({
               errCode: 4,
               errMessage: "MOVIE NOT FOUND",
               listMovies
            })
         }
      } catch (e) {
         return res.status(500).json(e)
      }
   },
   handleDeleteMovie: async (req, res) => {
      try {
         let movieId = req.params.id
         if (movieId) {
            let restMovies = await movieService.deleteMovie(movieId)
            return res.status(200).json({ restMovies })
         } else {
            return res.status(404).json({
               errCode: 4,
               errMessage: "MOVIE NOT FOUND",
            })
         }
      } catch (e) {
         res.status(500).json(e)
         // console.log(e.message)
      }
   },
}

module.exports = movieController