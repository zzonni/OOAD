import jwt from 'jsonwebtoken'

const middlewareController = {
    verifyToken: async (req,res,next) => {
        const token = req.headers.token
        if (token) {
            const accessToken = token.split(" ")[1]
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    res.status(403).json('Invalid token!')
                }
                req.user = user
                // console.log(user)
                next()
            })
        } else {
            res.status(401).json("Not authenticated!")
        }
    },
    verifyTokenAndAdminAuth: (req, res, next) => {
        middlewareController.verifyToken(req, res, () => {
            if (req.user.id == req.params.id || req.user.roleId){
                next()
            } else {
                res.status(403).json("Can't do that!")
            }
        })
    }
}

module.exports = middlewareController