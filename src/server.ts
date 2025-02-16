import express from 'express'
import type { Request, Response } from 'express'
import { env } from 'config/env'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

const port: number = env.PORT

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
