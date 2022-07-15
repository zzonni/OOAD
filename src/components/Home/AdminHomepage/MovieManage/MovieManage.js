import React from "react";
import './MovieManage.scss'
import AdminHeader from "../AdminHeader";
import { Table, Button } from 'reactstrap'
import './MovieManage.scss'
// import PaginationComp from "../../PaginationComp";
import MovieModal from "./MovieModal";
import { addNewMovieApi, deleteMovieApi, getMovieApi, updateMovieApi } from '../../../../services/movieService'
import EditModal from "./EditModal";

class MovieManage extends React.Component {
   state = {
      listMovies: [],
   }
   async componentDidMount() {
      let res = await getMovieApi('all')
      this.setState({
         listMovies: res.data.listMovies
      })
   }

   handleLogOut = () => {
      localStorage.clear()
      window.location.pathname = '/api/auth/login'
      // alert(1)
   }

   handleAddNewMovie = async (data) => {
      await addNewMovieApi(data)
      // console.log("AFTER ADD:", res)
      let movieRes = await getMovieApi('all')
      this.setState({
         listMovies: movieRes.data.listMovies
      })
   }

   handleDeleteMovie = async (singleMovieId) => {
      let res = await deleteMovieApi(singleMovieId)
      // console.log("REST MOVIE: ", res)
      this.setState({
         listMovies: res.data.restMovies
      })
   }

   handleEditMovie = async (data) => {
      try {
         // console.log(data)
         await updateMovieApi(data)
         let res = await getMovieApi('all')
         this.setState({
            listMovies: res.data.listMovies
         })
         // console.log(editedData)
      } catch (e) {
         console.log(e)
      }
      // this.setState({

      // })
   }

   render() {
      let listMovies = this.state.listMovies
      // console.log(listMovies)
      return (
         <>
            <AdminHeader handleLogOut={this.handleLogOut} />
            {/* <PaginationComp /> */}
            <Table bordered className="movie-table">
               <thead>
                  <tr>
                     <th>
                        #
                     </th>
                     <th>
                        id
                     </th>
                     <th>
                        Name
                     </th>
                     <th>
                        Date
                     </th>
                     <th>
                        Category
                     </th>
                     <th>
                        Duration
                     </th>
                     <th>
                        Rate
                     </th>
                     <th>
                        Image
                     </th>
                     <th colSpan={2}>
                        Actions
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {listMovies && listMovies.length &&
                     listMovies.map((singleMovie, index) => {
                        return (
                           <tr key={singleMovie.id}>
                              <th scope="row">
                                 {index + 1}
                              </th>
                              <td>
                                 {singleMovie.id}
                              </td>
                              <td>
                                 {singleMovie.movieName}
                              </td>
                              <td>
                                 {singleMovie.date.slice(0, 10)}
                              </td>
                              <td>
                                 {singleMovie.category}
                              </td>
                              <td>
                                 {singleMovie.duration}
                              </td>
                              <td>
                                 {singleMovie.rate}
                              </td>
                              <td>
                                 {singleMovie.image}
                              </td>
                              <td>
                                 <EditModal
                                    handleEditMovie={this.handleEditMovie}
                                    editMovieID={singleMovie.id}
                                 />
                              </td>
                              <td>
                                 <Button className="btn-delete" onClick={() => this.handleDeleteMovie(singleMovie.id)}>Del</Button>
                              </td>
                           </tr>
                        )
                     })
                  }
               </tbody>
            </Table>
            <MovieModal
               handleAddNewMovie={this.handleAddNewMovie}
            />
         </>
      )
   }
}

export default MovieManage