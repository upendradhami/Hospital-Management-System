import { PrismaClient } from "@prisma/client"
import { PrismaMySQL } from "@prisma/adapter-mysql"

const adapter = new PrismaMySQL({
  url: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

async function main() {
  await prisma.role.createMany({
    data: [
      { name: "ADMIN" },
      { name: "DOCTOR" },
      { name: "PATIENT" },
      { name: "RECEPTIONIST" },
    ],
    skipDuplicates: true,
  })

  await prisma.department.createMany({
    data: [
      { name: "Cardiology" },
      { name: "Neurology" },
      { name: "Orthopedics" },
      { name: "Pediatrics" },
    ],
    skipDuplicates: true,
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
