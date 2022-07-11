import React from "react";
import './MovieManage.scss'
import AdminHeader from "../AdminHeader";
import { Table } from 'reactstrap'
import './MovieManage.scss'
import PaginationComp from "../../PaginationComp";
import MovieModal from "./MovieModal";
import { addNewMovieApi, deleteMovieApi, getMovieApi } from '../../../../services/movieService'

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
      let res = await addNewMovieApi(data)
      console.log("AFTER ADD:", res)

   }

   handleDeleteMovie = async (singleMovieId) => {
      let res = await deleteMovieApi(singleMovieId)
      console.log("REST MOVIE: ", res)
      this.setState({
         listMovies: res.data.restMovies
      })
   }

   render() {
      let listMovies = this.state.listMovies
      console.log(listMovies)
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
                     <th>
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
                                 <button className="btn-edit">Edit</button>
                                 <button className="btn-delete" onClick={() => this.handleDeleteMovie(singleMovie.id)}>Delete</button>
                              </td>
                           </tr>
                        )
                     })
                  }
               </tbody>
            </Table>
            <MovieModal handleAddNewMovie={this.handleAddNewMovie} />
         </>
      )
   }
}

export default MovieManage