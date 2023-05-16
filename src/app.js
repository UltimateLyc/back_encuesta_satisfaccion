import express from 'express'
import { commentRoutes, reactionRoutes } from './config/routes.config.js'
import errorHandler from './middleware/errorMiddleware.js'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Endpoints
app.use(reactionRoutes)
app.use(commentRoutes)

// Catch errors with middleware
app.use(errorHandler)

export default app
