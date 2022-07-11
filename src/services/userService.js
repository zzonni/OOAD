import instance from '../axios'

const registerUserApi = (data) => {
   // console.log('Check data from service: ', data)
   return instance.post('/auth/register', data)
}

const loginUserApi = (username, password) => {
   return instance.post('/auth/login', { username: username, password: password })
}

const deleteUserApi = (userId) => {
   return instance.delete(`/user/${userId}`)
}

const getAllUsersApi = (userId) => {
   return instance.get(`/users/${userId}`)
}

export {
   registerUserApi,
   loginUserApi,
   deleteUserApi,
   getAllUsersApi,
}