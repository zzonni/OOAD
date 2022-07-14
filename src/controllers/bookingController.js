import db from '../models'
import bookingService from '../services/bookingService'

const bookingController = {
   handleCreateBooking: async (req, res) => {
      try {
         let newBooking = await bookingService.createBooking(req.body)
         return res.status(200).json(newBooking)
      } catch (e) {
         return res.status(500).json(e)
      }
   },
   handleGetBooking: async (req, res) => {
      try {
         let booking = await bookingService.getBooking(req.params.id)
         if (booking) {
            return res.status(200).json({
               errCode: 0,
               errMessage: "OK",
               booking
            })
         } else {
            return res.status(404).json({
               errCode: 4,
               errMessage: "NOT FOUND",
               booking
            })
         }
      } catch (e) {
         return res.status(500).json(e)
      }
   },
   handleUpdateBooking: async (req, res) => {
      try {

      } catch (e) {
         return res.status(500).json(e)
      }
   },
   handleDeleteBooking: async (req, res) => {
      try {
         let booking = await bookingService.deleteBooking(req.params.id)
         return res.status(200).json(booking)
      } catch (e) {
         return res.status(500).json(e)
      }
   }
}

module.exports = bookingController