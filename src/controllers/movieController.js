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
         return res.status(500).json(e)
         // console.log(e.message)
      }
   },
   handleUpdateMovie: async (req, res) => {
      try {
         let newListMovies = await movieService.updateMovie(req.body)
         return res.status(200).json(newListMovies)
      } catch (e) {
         return res.status(500).json(e)
      }
   },
   handleFindMovie: async (req, res) => {
      try {
         let name = req.params.name
         let movieFound = await movieService.findMovie(name)
         return res.status(200).json(movieFound)
      } catch (e) {
         return res.status(500).json(e)
      }
   }
}

module.exports = movieController