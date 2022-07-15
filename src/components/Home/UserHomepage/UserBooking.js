import React from "react";
import { Button } from 'reactstrap'
import { withRouter } from "react-router-dom";
import { createBookingApi } from "../../../services/bookingService";
import { getMovieApi } from "../../../services/movieService";
import { getRoomApi } from "../../../services/roomService";
import { getAllUsersApi } from "../../../services/userService";
import { toast } from 'react-toastify';


class UserBooking extends React.Component {

   state = {
      movie: {},
      rooms: [],
      booking: {
         userID: 0,
         username: '',
         firstName: '',
         lastName: '',
         movieName: '',
         movieID: 0,
         roomName: '',
         roomID: 0,
         date: '',
         showtime: ''
      },
      showtimeArr: ['9:00', '12:00', '15:00', '18:00', '22:00']
   }

   async componentDidMount() {
      let userRes = await getAllUsersApi(localStorage.getItem('userID'))
      let movieRes = await getMovieApi(localStorage.getItem('movieID'))
      let roomRes = await getRoomApi()
      // console.log(userRes)
      // console.log(movieRes)
      // console.log(roomRes)
      this.setState({
         movie: movieRes.data.listMovies,
         rooms: roomRes.data.room,
         booking: {
            userID: userRes.data.listUsers.id,
            username: userRes.data.listUsers.username,
            firstName: userRes.data.listUsers.firstName,
            lastName: userRes.data.listUsers.lastName,
            movieName: movieRes.data.listMovies.movieName,
            movieID: movieRes.data.listMovies.id,
         },
         // showtimeArr: ['9:00', '12:00', '15:00', '18:00', '22:00']

      })
   }
   handleGetDate = (e) => {
      e.target.classList.toggle('active')
      this.setState({
         booking: {
            ...this.state.booking,
            date: e.target.value.slice(0, 10)
         }
      })
   }

   handleGetTime = (e) => {
      e.target.classList.toggle('active')
      this.setState({
         booking: {
            ...this.state.booking,
            showtime: e.target.value
         }
      })
   }

   toggleActive = (e) => {
      e.target.classList.toggle('active')
   }

   handleGetRoomInfo = (e, singleRoomId) => {
      e.target.classList.toggle('active')
      this.setState({
         booking: {
            ...this.state.booking,
            roomName: e.target.value,
            roomID: singleRoomId
         }
      })
   }

   handleCreateBooking = async (data) => {
      if (!this.state.booking.date || !this.state.booking.showtime || !this.state.booking.roomName || !this.state.booking.roomID) {
         toast.error("Missing booking information!", {
            position: 'top-center',
            autoClose: 2000
         })
      } else {
         let createdBooking = await createBookingApi(data)
         // console.log(createBookingApi)
         localStorage.setItem('bookingID', createdBooking.data.id)
         this.setState({
            booking: {
               ...this.state.booking,
               roomName: '',
               roomID: 0,
               date: '',
               showtime: ''
            },
         })
         this.props.history.push('/movie/booking/confirm')
      }
   }
   render() {
      let movie = this.state.movie
      let rooms = this.state.rooms
      let showtimeArr = this.state.showtimeArr
      return (
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
                  {
                     showtimeArr && showtimeArr.length &&
                     showtimeArr.map((singleShowtime, index) => {
                        return (
                           <input
                              className="btn-showtime"
                              type="button"
                              onClick={(e) => this.handleGetTime(e)}
                              value={singleShowtime}
                              key={index + 1}
                           />
                        )
                     })
                  }
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
                           onClick={(e) => this.toggleActive(e)}
                        >
                           <input
                              type="button"
                              value={singleRoom.roomName}
                              onClick={(e) => this.handleGetRoomInfo(e, singleRoom.id)} /><br></br>
                           Max: {singleRoom.maxSlot}<br></br>
                           Avai.: {singleRoom.availableSlot}
                        </button>
                     )
                  })
               }
            </div>
            <Button onClick={() => this.handleCreateBooking(this.state.booking)}>+Add</Button>
         </div>
      )
   }
}

export default withRouter(UserBooking)