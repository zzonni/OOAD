import instance from '../axios'

const createBookingApi = (data) => {
   return instance.post('/booking/add', data)
}

const getBookingApi = (bookingID) => {
   return instance.get(`/booking/result/${bookingID}`)
}

const deleteBookingApi = (userID) => {
   return instance.delete(`/booking/delete/${userID}`)
}

export {
   createBookingApi,
   getBookingApi,
   deleteBookingApi
}