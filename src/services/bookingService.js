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

let getBooking = (bookingID) => {
   return new Promise(async (resolve, reject) => {
      try {
         let bookingObj = {}
         if (bookingID === 'all') {
            let bookings = await db.Booking.findAll({
               attributes: {
                  exclude: ['createdAt', 'updatedAt']
               }
            })
            bookingObj = bookings
            resolve(bookingObj)
         }
         let booking = await db.Booking.findOne({
            attributes: {
               exclude: ['createdAt', 'updatedAt']
            },
            where: {
               id: bookingID
            }
         })
         bookingObj = booking
         resolve(bookingObj)
      } catch (e) {
         reject(e)
      }
   })
}

let updateBooking = () => {
   return new Promise(async (resolve, reject) => {
      try {

      } catch (e) {
         reject(e)
      }
   })
}

let deleteBooking = (userID) => {
   return new Promise(async (resolve, reject) => {
      try {
         let deleteResult = await db.Booking.destroy({
            where: {
               userID: userID
            }
         })
         resolve(deleteResult) // 1 if delete suceess, 0 if nothing to delete
         // if (bookings && bookings.length) {
         //    bookings.map((bookingItem, index) => {
         //       await bookingItem.destroy()
         //    })
         // }
         // let restBookings = await db.Booking.findAll()
         // resolve(restBookings)
      } catch (e) {
         reject(e)
      }
   })
}
let confirmBooking = () => {
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
   updateBooking: updateBooking,
   confirmBooking: confirmBooking,
   deleteBooking: deleteBooking
}