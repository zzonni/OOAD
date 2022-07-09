import db from '../models/index'
import CRUDservice from '../services/CRUDservice'

let getUsersFromDb = async (req, res) => {
    try {
        let data = await db.User.findAll()
        return res.send(data)
    } catch (e) {
        console.log(e)
    }
}

let getCRUD = async (req, res) => {
    return res.render('crud.ejs')
}
let postCRUD = async (req, res) => {
    await CRUDservice.createNewUser(req.body)
    let data = await CRUDservice.getAllUsers()
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}

let displayCRUD = async (req, res) => {
    let data = await CRUDservice.getAllUsers()
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}

let editCRUD = async (req, res) => {
    let userId = req.query.id
    if (userId) {
        let userData = await CRUDservice.getUserInfoById(userId)

        return res.render('editCRUD.ejs', {
            userData: userData
        })
    } else {
        return res.send("USER NOT FOUND!")
    }
}

let putCRUD = async (req, res) => {
    let dataEdited = req.body
    let allUsers = await CRUDservice.updateUserData(dataEdited)
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id
    if (id) {
        let allUsers = await CRUDservice.deleteUserById(id)
        return res.render('displayCRUD.ejs', {
            dataTable: allUsers
        })
    } else {
        return res.send("USER NOT FOUND!")
    }

}

module.exports = {
    getUsersFromDb: getUsersFromDb,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
    editCRUD: editCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}