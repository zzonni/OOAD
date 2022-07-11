import roomService from '../services/roomService'

const roomController = {
   handleGetRoom: async (req, res) => {
      try {
         let room = await roomService.getRoom()
         return res.status(200).json({ room })
      } catch (e) {
         return res.status(500).json(e)
      }
   },
   handleCreateRoom: async (req, res) => {
      try {
         let newRoom = await roomService.createRoom(req.body)
         return res.status(200).json(newRoom)
      } catch (e) {
         return res.status(500).json(e)
      }
   }
}

module.exports = roomController