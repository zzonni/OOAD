import db from '../models/index'
import bcrypt from 'bcrypt'
import { reset } from 'nodemon'


// check if username existed or not
let checkUsername = (username) => {
   return new Promise(async (resolve, reject) => {
      try {
         let user = await db.User.findOne({
            where: {
               username: username
            }
         })
         if (user) {

            resolve(true)
         } else {

            resolve(false)
         }
      } catch (e) {
         reject(e)
      }
   })
}

let registerUser = (data) => {
   return new Promise(async (resolve, reject) => {
      try {
         let errorObj = {}
         const salt = bcrypt.genSaltSync(10)
         let hashPassword = bcrypt.hashSync(data.password, salt)
         let isUsernameExisted = await checkUsername(data.username)
         if (!isUsernameExisted) {
            let newUser = await db.User.create({
               username: data.username,
               password: hashPassword,
               firstName: data.firstName,
               lastName: data.lastName,
               address: data.address,
               gender: data.gender,
               roleId: data.roleId
            })
            resolve(newUser)
         } else {
            errorObj.message = "Username existed! Please try another one!"
            resolve(errorObj)
         }
      } catch (e) {
         reject(e)
      }
   })
}

let loginUser = (username, userPassword) => {
   return new Promise(async (resolve, reject) => {
      try {
         let userObj = {}
         let isUsernameExisted = await checkUsername(username)
         if (isUsernameExisted) {
            let user = await db.User.findOne({
               attributes: ['username', 'password', 'roleId'],
               where: {
                  username: username,
               }
            })
            if (user) {
               let isCorrectPassword = bcrypt.compareSync(userPassword, user.password)
               if (isCorrectPassword && isUsernameExisted) {
                  userObj.errCode = 0
                  userObj.errMessage = "OK"
                  userObj.user = user
               } else {
                  userObj.errCode = 1
                  userObj.errMessage = "Wrong password"
               }
            }
         } else {
            userObj.errCode = 2
            userObj.errMessage = "Username not found"
         }
         resolve(userObj)

      } catch (e) {
         reject(e)
      }
   })
}

// let logoutUser = () => {
//    return new Promise()
// }

let getAllUsers = (userId) => {
   return new Promise(async (resolve, reject) => {
      try {
         let userObj = {}
         if (userId === 'all') {
            let users = await db.User.findAll({
               attributes: {
                  exclude: ['password', 'createdAt', 'updatedAt']
               }
            })
            userObj = users
            resolve(userObj)
         }
         let user = await db.User.findOne({
            attributes: {
               exclude: ['password', 'createdAt', 'updatedAt']
            },
            where: {
               id: userId
            }
         })
         userObj = user
         resolve(userObj)
      } catch (e) {
         reject(e)
      }
   })
}

module.exports = {
   checkUsername: checkUsername,
   registerUser: registerUser,
   loginUser: loginUser,
   getAllUsers: getAllUsers,
}