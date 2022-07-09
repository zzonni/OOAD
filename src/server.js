import express from 'express'
import bodyParser from 'body-parser' // get params that client use. E.g: querry params: /user?id=7 => get id=7
// import configViewEngine from './config/viewEngine'
import initWebRoutes from './route/web'
import dotenv from 'dotenv'
import connectDB from './config/connectDB'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()

let app = express()
app.use(cors({
    origin: true,
    credentials: true,
    methods: 'POST'
}))

// Config app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// configViewEngine(app)
initWebRoutes(app)

// Connect to DB
connectDB()

app.use(cookieParser())
app.use(express.json())


let port = process.env.PORT || 6969

app.listen(port, () => {
    console.log("SERVER IS RUNNING ON PORT: " + port)
})