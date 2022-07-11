
import jwt from 'jsonwebtoken'
import userService from '../services/userService'

let refreshTokenArr = []

const userController = {
    //REGISTER
    handleRegisterUser: async (req, res, next) => {
        try {
            let newUser = await userService.registerUser(req.body)
            return res.status(200).json(newUser)
        } catch (e) {
            console.log(e.message)
            return res.status(500).json(e)
        }
    },
    //LOGIN
    handleLoginUser: async (req, res, next) => {
        try {
            let userLogin = await userService.loginUser(req.body.username, req.body.password)

            if (userLogin) {
                const accessToken = userController.generateAccessToken(userLogin)
                const refreshToken = userController.generateRefreshToken(userLogin)

                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict"
                })
                refreshTokenArr.push(refreshToken)
                return res.status(200).json({ ...userLogin, accessToken, refreshToken })
            }
        } catch (e) {
            return res.status(500).json(e)
        }
    },
    // GENERATE ACCESS TOKEN
    generateAccessToken: (user) => {
        return jwt.sign({
            id: user.id,
            role: user.role
        },
            process.env.JWT_ACCESS_KEY,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRED
            }
        )
    },

    // GENERATE REFRESH TOKEN
    generateRefreshToken: (user) => {
        return jwt.sign({
            id: user.id,
            role: user.role
        },
            process.env.JWT_REFRESH_KEY,
            {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRED
            }
        )
    },

    handleLogoutUser: async (req, res) => {
        try {
            // CLEAR TOKEN, CLEAR REFRESH TOKEN
            res.clearCookie("refreshToken") // remove refreshtoken in cookie
            refreshTokenArr = refreshTokenArr.filter(token => token !== req.cookies.refreshToken)
            res.status(200).json("Logged Out!")
        } catch (err) {
            res.status(500).json(err)
        }
    },

    handleGetAllUsers: async (req, res) => {
        try {
            let listUsers = await userService.getAllUsers(req.params.id)
            if (listUsers) {
                return res.status(200).json({
                    errCode: 0,
                    errMessage: "OK",
                    listUsers
                })
            } else {
                return res.status(404).json({
                    errCode: 4,
                    errMessage: "USER NOT FOUND",
                    listUsers
                })
            }
        } catch (e) {
            res.status(500).json(e)
        }
    },
    handleDeleteUser: async (req, res) => {
        try {
            let userId = req.params.id
            if (userId) {
                let restUsers = await userService.deleteUser(userId)
                return res.status(200).json(restUsers)
            } else {
                return res.status(404).json({
                    errCode: 4,
                    errMessage: "USER NOT FOUND",
                })
            }
        } catch (e) {
            res.status(500).json(e)
            // console.log(e.message)
        }
    },

}

module.exports = userController