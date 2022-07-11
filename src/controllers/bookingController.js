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

      } catch (e) {
         return res.status(500).json(e)
      }
   },
}

module.exports = bookingController