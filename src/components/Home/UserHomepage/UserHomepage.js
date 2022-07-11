import React from 'react'
import UserHeader from './UserHeader'
import { Button, Input, InputGroup } from 'reactstrap'
import { withRouter } from 'react-router-dom';
import { getAllUsersApi } from "../../../services/userService";
import { getMovieApi } from '../../../services/movieService';

// import * as image from '../../../assets/images'

function importAll(r) {
   let images = {};
   r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
   return images;
}

const images = importAll(require.context('../../../assets/images', false, /\.(png|jpe?g|svg)$/));
class UserHomepage extends React.Component {
   state = {
      userLogin: {},
      listMovies: [],
   }

   handleLogOut = () => {
      localStorage.clear()
      window.location.pathname = '/api/auth/login'
      // alert(1)
   }
   async componentDidMount() {
      let userRes = await getAllUsersApi(localStorage.getItem('userID'))
      let movieRes = await getMovieApi('all')
      console.log(movieRes)
      this.setState({
         userLogin: userRes.data.listUsers,
         listMovies: movieRes.data.listMovies
      })
   }

   handleBooking = (singleMovieId) => {
      localStorage.setItem('movieID', singleMovieId)
      this.props.history.push('/movie/booking')
   }

   render() {
      // console.log
      let { id, firstName, lastName } = this.state.userLogin
      let listMovies = this.state.listMovies
      return (
         <div className="user">
            <UserHeader handleLogOut={this.handleLogOut} />
            <InputGroup className="search-bar" size="lg">
               <Input />
               <Button className="btn btn-secondary">
                  Search
               </Button>
            </InputGroup>
            <div>Login as user ID: {id}</div>
            <h3>Hello, {firstName} {lastName}</h3>
            <div className="user-content">
               {listMovies && listMovies.length &&
                  listMovies.map((singleMovie, index) => {
                     return (
                        <div className="user-item" key={singleMovie.id}>
                           <img src={images[`${singleMovie.image}`]} alt="" width={270} height={400} />
                           <div className="movie-title">{singleMovie.movieName}</div>
                           <div className="movie-category"><b>Category: </b>{singleMovie.category}</div>
                           <div className="movie-duration"><b>Duration: </b>{singleMovie.duration} mins</div>
                           <div className="movie-date"><b>Date: </b>{singleMovie.date.slice(0, 10)}</div>
                           <div className="movie-date"><b>Rating: </b>{singleMovie.rate}/10</div>
                           <Button
                              className="btn btn-danger"
                              onClick={() => this.handleBooking(singleMovie.id)}
                           >
                              Book Now
                           </Button>
                        </div>
                     )
                  })
               }

            </div>
         </div>
      )
   }
}
export default withRouter(UserHomepage)
