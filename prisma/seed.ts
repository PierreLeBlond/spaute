import { PrismaClient, type Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const instrumentData: Prisma.InstrumentCreateInput[] = [
  {
    name: 'Flute',
  },
  {
    name: 'Kick Drum',
  },
  {
    name: 'Snare Drum',
  },
  {
    name: 'Trombone',
  },
  {
    name: 'Trumpet',
  },
  {
    name: 'Euphonium',
  },
  {
    name: 'Alto Saxophone',
  },
  {
    name: 'Tenor Saxophone',
  },
  {
    name: 'Clarinet',
  },
  {
    name: 'Sousaphone',
  },
  {
    name: 'Rusty Trombone',
  },
]

async function main() {
  console.log(`Start seeding ...`)

  for (const i of instrumentData) {
    await prisma.instrument.create({
      data: i,
    })
  }

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
