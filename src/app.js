import express from 'express'
import errorHandler from './middleware/errorMiddleware.js'

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json)

app.use(errorHandler)

export default app
