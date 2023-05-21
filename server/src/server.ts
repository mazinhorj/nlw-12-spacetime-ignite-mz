import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { authRoutes } from './routes/authRoutes'
import { memoriesRoutes } from './routes/memoriesRoutes'
import { usersRoutes } from './routes/usersRoutes'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'spctm',
})

app.register(authRoutes)
app.register(usersRoutes)
app.register(memoriesRoutes)

app.get('/1st', () => {
  return 'Hello, world! \n To Infinity and Beyond!'
})

const theAuthor: string = 'Osmar Menezes da Silva (Mazinho)'
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(
      `-> Desenvolvido por ${theAuthor} \n-> ✅ Servidor rodando em http://localhost:3333`,
    )
  })
