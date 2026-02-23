import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Mongo } from './database/mongo.js'

dotenv.config({ override: true, debug: true })

async function main() {
  const hostname = 'localhost'
  const port = 3000

  const app = express()

  try {
    await Mongo.connect({
      mongoConnectionString: process.env.MONGO_CS,
      mongoDbName: process.env.MONGO_DB_NAME
    })
  } catch (err) {
    console.error('Falha ao subir o servidor porque o Mongo não conectou ❌')
    process.exit(1)
  }

  app.use(express.json())
  app.use(cors())

  app.get('/', (req, res) => {
    res.send({
      success: true,
      statusCode: 200,
      body: 'Welcome to Sneezeify'
    })
  })

  app.listen(port, () => {
    console.log(`Server is running on: http://${hostname}:${port}`)
  })
}

main()