import db from '../models/index'

let createRoom = (data) => {
   return new Promise(async (resolve, reject) => {
      try {
         let newRoom = await db.Room.create({
            roomName: data.roomName,
            maxSlot: data.maxSlot,
            availableSlot: data.availableSlot
         })
         resolve(newRoom)
      } catch (e) {
         reject(e)
      }
   })
}

let getRoom = () => {
   return new Promise(async (resolve, reject) => {
      try {
         let roomObj = {}
         let room = await db.Room.findAll({
            attributes: {
               exclude: ['createdAt', 'updatedAt']
            }
         })
         roomObj = room
         resolve(roomObj)
      } catch (e) {
         reject(e)
      }
   })
}

module.exports = {
   createRoom: createRoom,
   getRoom: getRoom,
}