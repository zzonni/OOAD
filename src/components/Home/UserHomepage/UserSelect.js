import React from 'react'
import UserHeader from './UserHeader'
import { Button, ButtonGroup, Input, InputGroup, Collapse, Card, CardBody } from 'reactstrap'
import { withRouter } from 'react-router-dom';
import { getMovieApi } from '../../../services/movieService';
import { getRoomApi } from '../../../services/roomService';
// import * as image from '../../../assets/images'

class UserSelect extends React.Component {
   state = {
      isOpen: true,
      date: '',
      showtime: '',
      movie: {},
      rooms: [],
   }

   async componentDidMount() {
      let movieRes = await getMovieApi(localStorage.getItem('movieID'))
      let roomRes = await getRoomApi()
      console.log(roomRes)
      this.setState({
         movie: movieRes.data.listMovies,
         rooms: roomRes.data.room
      })

   }

   handleGetDate = (e) => {
      e.target.classList.toggle('active')
      this.setState({
         date: e.target.value
      })
   }

   handleGetTime = (e) => {
      e.target.classList.toggle('active')
      this.setState({
         showtime: e.target.value,
      })
   }

   handleGetRoomInfo = (e, singleRoomId) => {
      e.target.classList.toggle('active')
   }

   render() {
      let movie = this.state.movie
      let rooms = this.state.rooms
      // movie.date = movie.date.slice(0, 10)
      // console.log(movie.date.slice(0, 10))
      return (
         <div className="user">
            <UserHeader />
            <InputGroup className="search-bar" size="lg">
               <Input />
               <Button className="btn btn-secondary">
                  Search
               </Button>
            </InputGroup>
            <div className="booking">
               <h4>Movie selected: <b><i>{movie.movieName}</i></b></h4>
               <h4>Showtime:</h4>

               <div className="showtime-container">
                  <input
                     className="btn-date"
                     type="button"
                     value={movie.date}
                     onClick={(e) => this.handleGetDate(e)}
                  />
                  <div className="showtime">
                     <input
                        className="btn-showtime"
                        type="button"
                        onClick={(e) => this.handleGetTime(e)}
                        value="9:00"
                     />
                     <input
                        className="btn-showtime"
                        type="button"
                        onClick={(e) => this.handleGetTime(e)}
                        value="12:00"
                     />
                     <input
                        className="btn-showtime"
                        type="button"
                        onClick={(e) => this.handleGetTime(e)}
                        value="15:00"
                     />
                     <input
                        className="btn-showtime"
                        type="button"
                        onClick={(e) => this.handleGetTime(e)}
                        value="18:00"
                     />
                  </div>
               </div>
               <h4>Select Room:</h4>
               <div className="room-select">
                  {rooms && rooms.length &&
                     rooms.map((singleRoom, index) => {
                        return (
                           <button
                              type="button"
                              className="room"
                              key={singleRoom.id}
                              onClick={(e) => this.handleGetRoomInfo(e, singleRoom.id)}
                           >
                              R:{singleRoom.roomName}<br></br>
                              Max: {singleRoom.maxSlot}<br></br>
                              Avai.: {singleRoom.availableSlot}
                           </button>
                        )
                     })
                  }
               </div>

            </div>
         </div>
      )
   }
}
export default withRouter(UserSelect)