import express from 'express'
import homeController from '../controllers/homeController'
// import authController from '../controllers/authController'
// import middlewareController from '../controllers/middlewareController'
import userController from '../controllers/userController'
import movieController from '../controllers/movieController'
import roomController from '../controllers/roomController'
import bookingController from '../controllers/bookingController'

let router = express.Router() // when user clicks into a website, app has to find 'router' first

let initWebRoutes = (app) => {

    // HOMEPAGE
    router.get('/', homeController.getUsersFromDb)
    router.get('/crud', homeController.getCRUD)
    router.post('/post-crud', homeController.postCRUD)
    router.get('/get-crud', homeController.displayCRUD)
    router.get('/edit-crud', homeController.editCRUD)
    router.post('/put-crud', homeController.putCRUD)
    router.get('/delete-crud', homeController.deleteCRUD)

    router.get('/api/users/:id', userController.handleGetAllUsers)
    router.delete('/api/user/:id', userController.handleDeleteUser)


    router.post('/api/auth/login', userController.handleLoginUser)
    router.post('/api/auth/register', userController.handleRegisterUser)
    router.post('/api/auth/logout', userController.handleLogoutUser)

    router.post('/api/movie/add', movieController.handleAddNewMovie)
    router.get('/api/movie/:id', movieController.handleGetMovie)
    router.delete('/api/movie/delete/:id', movieController.handleDeleteMovie)

    router.post('/api/room/add', roomController.handleCreateRoom)
    router.get('/api/room/all', roomController.handleGetRoom)

    router.post('/api/booking/add', bookingController.handleCreateBooking)
    router.get('/api/booking/result', bookingController.handleGetBooking)

    return app.use("/", router)
}

module.exports = initWebRoutes