import express from 'express'
import homeController from '../controllers/homeController'
// import authController from '../controllers/authController'
// import middlewareController from '../controllers/middlewareController'
import userController from '../controllers/userController'

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
    router.delete('/user/:id', userController.deleteAnUser)


    router.post('/api/auth/login', userController.handleLoginUser)
    router.post('/api/auth/register', userController.handleRegisterUser)
    router.post('/api/auth/logout', userController.handleLogoutUser)

    return app.use("/", router)
}

module.exports = initWebRoutes