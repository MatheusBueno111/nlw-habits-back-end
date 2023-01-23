import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({ log: ['query'] }) // acesso a todas as tabelas do banco
