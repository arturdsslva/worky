import express from 'express'
import type { Request, Response } from 'express'
import { env } from 'config/'
import { AppDataSource } from '@/data/datasources'

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected!')

    const app = express()

    app.get('/', (req: Request, res: Response) => {
      res.send('Hello World!')
    })

    const port: number = env.PORT

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.log('Database connection error:', error)
  })
