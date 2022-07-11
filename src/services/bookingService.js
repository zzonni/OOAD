import db from '../models/index'

let createBooking = (data) => {
   return new Promise(async (resolve, reject) => {
      try {
         let newBooking = await db.Booking.create({
            userID: data.userID,
            username: data.username,
            firstName: data.firstName,
            lastName: data.lastName,
            movieName: data.movieName,
            movieID: data.movieID,
            roomName: data.roomName,
            roomID: data.roomID,
            date: data.date,
            showtime: data.showtime
         })
         resolve(newBooking)
      } catch (e) {
         reject(e)
      }
   })
}

let getBooking = () => {
   return new Promise(async (resolve, reject) => {
      try {

      } catch (e) {
         reject(e)
      }
   })
}

module.exports = {
   createBooking: createBooking,
   getBooking: getBooking,
}