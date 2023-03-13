import { PrismaClient, type Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const bandData: Prisma.BandCreateInput[] = [
  {
    name: 'Feis',
    players: {
      create: [
        {
          name: 'Pierre',
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
            create: {
              name: 'Sousaphone'
            }
          }
        },
        {
          instrument: {
            create: {
              name: 'Trumpet'
            }
          }
        },
        {
          instrument: {
            create: {
              name: 'Euphonium'
            }
          }
        },
      ]
    }
  },
]

async function main() {
  console.log(`Start seeding ...`)

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