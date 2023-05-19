import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memoriesRoutes'

const app = fastify()

app.register(cors, {
  origin: true,
})

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
