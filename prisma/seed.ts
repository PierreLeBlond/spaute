import { PrismaClient, type Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const instrumentData: Prisma.InstrumentCreateInput[] = [
  {
    name: 'Sousaphone'
  },
  {
    name: 'Trumpet'
  },
  {
    name: 'Euphonium'
  },
]

const bandData: Prisma.BandCreateInput[] = [
  {
    name: 'Feis',
    players: {
      create: [
        {
          name: 'Pierre'
        }, {
          name: 'Thomas'
        }
      ],
    },
    gigs: {
      create: [
        {
          name: '47.1',
          date: new Date(2023, 3, 14),
          location: 'Place de la République'
        }
      ]
    },
    voices: {
      create: [
        {
          instrument: {
            connect: {
              id: 1
            }
          }
        },
        {
          instrument: {
            connect: {
              id: 2
            }
          }
        },
        {
          instrument: {
            connect: {
              id: 3
            }
          }
        },
      ]
    }
  },
]

async function main() {
  console.log(`Start seeding ...`)

  for (const i of instrumentData) {
    await prisma.instrument.create({
      data: i
    })
  }

  for (const b of bandData) {
    await prisma.band.create({
      data: b
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