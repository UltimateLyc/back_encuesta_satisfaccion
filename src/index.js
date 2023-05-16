import app from './app.js'
import dotenv from 'dotenv'
import colors from 'colors' // eslint-disable-line no-unused-vars
import { sequelize } from './config/config.js'

// import modules
import { Reaction, Comment } from './config/module.config.js' // eslint-disable-line no-unused-vars
import { defaultReactions } from './config/default.config.js'

async function main () {
  try {
    dotenv.config({ path: '.env' }) // Config .env with dotenv
    await sequelize.sync({ force: false })
    await sequelize.authenticate()
    console.log(`Connection with the server successful on port ${process.env.DBPORT}`.green.underline)
    app.listen(process.env.PORT)
    console.log(`Server connection on port ${process.env.PORT}`.cyan.underline)
    defaultReactions()
  } catch (error) {
    console.log(error)
  }
}

main()
