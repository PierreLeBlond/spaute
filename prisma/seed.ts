import { PrismaClient, type Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const instrumentData: Prisma.InstrumentCreateInput[] = [
  {
    name: 'Flute'
  } ,{
    name: 'Kick Drum'
  } ,{
    name: 'Snare Drum'
  } ,{
    name: 'Trombone'
  } ,{
    name: 'Trumpette'
  } ,{
    name: 'Euphonium'
  } ,{
    name: 'Alto Saxophone'
  } ,{
    name: 'Tenor Saxophone'
  } ,{
    name: 'Clarinettes'
  } ,{
    name: 'Sousaphone'
  } ,{
    name: 'Rusty Trombone'
  },
]

const bandData: Prisma.BandCreateInput[] = [
  {
    name: 'Feis',
    players: {
      create: [
        {
          name: 'Solvej D'
        } ,{
          Name: 'Xavier S'
        } ,{
          name: 'Pedro L'
        } ,{
          name: 'Simon L'
        } ,{
          name: 'Louis L'
        } ,{
          name: 'Annaïg P'
        } ,{
          name: 'Eléonore T'
        } ,{
          name: 'Loanne M'
        } ,{
          name: 'Théo G'
        } ,{
          name: 'Pierre L'
        } ,{
          name: 'Sophie M'
        } ,{
          name: 'Arthur M'
        } ,{
          name: 'Emerson F'
        } ,{
          name: 'Lucie B'
        } ,{
          name: 'Robinson C'
        } ,{
          name: 'Quentin L'
        } ,{
          name: 'Antoine L'
        } ,{
          name: 'Julien K'
        } ,{
          name: 'Valentin M'
        } ,{
          name: 'Pierre K'
        } ,{
          name: 'Thomas G'
        } ,{
          name: 'Arthur F'
        } ,{
          name: 'Clémentine M'
        } ,{
          name: 'Pierre PPP'
        } ,{
          Name: 'Romain F'
        } ,{
          name: 'Samuel M'
        } ,{
          name: 'Cédric A'
        } ,{
          name: 'Ando D'
        } ,{
          name: 'Thibaut E'
        } ,{
          name: 'Eudes C'
        } ,{
          name: 'Orianne F'
        } ,{
          name: 'Simon W'
        } ,{
          name: 'Augustin C'
        } ,{
          name: 'Julien F'
        } ,{
          name: 'Cyril E'
        } ,{
          name: 'Seb F'
        } ,{
          name: 'Lucie M'
        } ,{
          name: 'Violette G'
        } ,{
          name: 'Friedrich A'
        } ,{
          name: 'Elisa K'
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
