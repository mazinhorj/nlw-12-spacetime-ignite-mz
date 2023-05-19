import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function memoriesRoutes(app: FastifyInstance) {
  // todas as memórias
  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })
    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excrept: memory.content.substring(0, 123).concat('...'),
      }
    })
  })

  // memória por id
  app.get('/memories/:id', async (req, res) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })
    const { id } = paramsSchema.parse(req.params)

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })
    // if (!memory) {
    //   res.status(404).json({ message: 'Memória não localizada.' })
    //   return
    // }
    return memory
  })

  // gravar nova memória
  app.post('/memories', async (req, res) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })
    const { content, coverUrl, isPublic } = bodySchema.parse(req.body)
    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: '68cbea14-cd5a-477c-9ed3-5224c686cd28',
      },
    })
    return memory
  })

  // atualizar uma memória
  app.put('/memories/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { id } = paramsSchema.parse(req.params)
    const { content, coverUrl, isPublic } = bodySchema.parse(req.body)

    const memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
      },
    })
    return memory
  })

  // deletar uma memória
  app.delete('/memories/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })
    const { id } = paramsSchema.parse(req.params)

    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
