import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/first', () => {
  return 'Hello, world! \n To Infinity and Beyond!'
})
app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(
      '-> ✅ Servidor rodando em http://localhost:3000 \n-> Use Ctrl+click para navegar.',
    )
  })

const theAuthor: string = 'Desenvolvido por Osmar Menezes da Silva (Mazinho)'

console.log(theAuthor)
