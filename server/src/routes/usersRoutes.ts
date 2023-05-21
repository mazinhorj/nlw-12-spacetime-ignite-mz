import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function usersRoutes(app: FastifyInstance) {
  // todas as memórias
  app.get('/users', async () => {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })
    return users.map((user) => {
      return {
        id: user.id,
        login: user.login,
        avatarUrl: user.avatarUrl,
      }
    })
  })
}
