import instance from '../axios'

const getRoomApi = () => {
   return instance.get('/room/all')
}

export {
   getRoomApi
}