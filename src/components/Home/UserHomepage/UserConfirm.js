import React from 'react'
import { deleteBookingApi, getBookingApi } from '../../../services/bookingService'
import { withRouter } from 'react-router-dom'
import UserHeader from './UserHeader'

import { Button, Input, Col, Form, FormGroup, Label } from 'reactstrap'
import { toast } from 'react-toastify'

class UserConfirm extends React.Component {
   state = {
      booking: {

      }
   }
   async componentDidMount() {
      let bookingRes = await getBookingApi(localStorage.getItem('bookingID'))
      this.setState({
         booking: bookingRes.data.booking
      })
   }


   handleLogOut = () => {
      localStorage.clear()
      window.location.pathname = '/api/auth/login'
   }

   handleConfirmBooking = () => {
      toast.success("Booking confirmed!", {
         position: 'top-center',
         autoClose: 2000
      })
   }
   handleDeleteBooking = async (userID) => {
      let deleteRes = await deleteBookingApi(userID)
      if (deleteRes) {
         this.props.history.push('/movie/booking')
      } else {
         console.log("Error")
      }
   }
   render() {
      let booking = this.state.booking
      // console.log(booking)

      return (
         <div>
            <UserHeader handleLogOut={this.handleLogOut} />
            <div className="confirm-movie">
               <Form>
                  <FormGroup row>
                     <Label
                        for="movieID"
                        sm={2}
                     >
                        Booking ID:
                     </Label>
                     <Col sm={10}>
                        <Input
                           type="text"
                           value={booking.id}
                           disabled
                        />
                     </Col>
                  </FormGroup>
                  <FormGroup row>
                     <Label
                        for="movieID"
                        sm={2}
                     >
                        Movie Name:
                     </Label>
                     <Col sm={10}>
                        <Input
                           type="text"
                           value={booking.movieName}
                           disabled
                        />
                     </Col>
                  </FormGroup>
                  <FormGroup row>
                     <Label
                        for="movieID"
                        sm={2}
                     >
                        Room:
                     </Label>
                     <Col sm={10}>
                        <Input
                           type="text"
                           value={booking.roomName}
                           disabled
                        />
                     </Col>
                  </FormGroup>
                  <FormGroup row>
                     <Label
                        for="movieID"
                        sm={2}
                     >
                        Datetime:
                     </Label>
                     <Col sm={10}>
                        <Input
                           type="text"
                           value={booking.date}
                           disabled
                        />
                     </Col>
                  </FormGroup>
                  <FormGroup row>
                     <Label
                        for="movieID"
                        sm={2}
                     >
                        Showtime:
                     </Label>
                     <Col sm={10}>
                        <Input
                           type="text"
                           value={booking.showtime}
                           disabled
                        />
                     </Col>
                  </FormGroup>
                  <FormGroup row>
                     <Label
                        for="movieID"
                        sm={2}
                     >
                        Name:
                     </Label>
                     <Col sm={10}>
                        <Input
                           type="text"
                           value={`${booking.firstName} ${booking.lastName}`}
                           disabled
                        />
                     </Col>
                  </FormGroup>
                  <FormGroup
                     check
                     row
                  >
                     <Col
                        sm={{
                           offset: 2,
                           size: 10
                        }}
                     >
                        <Button onClick={() => this.handleDeleteBooking(booking.userID)} >
                           Edit
                        </Button>
                        <Button onClick={() => this.handleConfirmBooking()} className="btn btn-danger">
                           Submit
                        </Button>
                     </Col>
                  </FormGroup>
               </Form>
            </div>
         </div>
      )
   }
}

export default withRouter(UserConfirm)