import { PrismaClient } from "@prisma/client"
import { PrismaMySQL } from "@prisma/adapter-mysql"

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

const adapter = new PrismaMySQL({
  url: process.env.DATABASE_URL!,
})

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: ["query"],
  })

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}
