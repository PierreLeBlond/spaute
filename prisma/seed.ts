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
    name: 'Trumpette',
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
    name: 'Clarinettes',
  },
  {
    name: 'Sousaphone',
  },
  {
    name: 'Rusty Trombone',
  },
]

const playerData: Prisma.PlayerCreateInput[] = [
  {
    name: 'Solvej D',
    roles: {
      create: [
        { instrument: { connect: { id: 2 } } },
        { instrument: { connect: { id: 3 } } },
      ],
    },
  },
  {
    name: 'Xavier S',
    roles: { create: [{ instrument: { connect: { id: 2 } } }] },
  },
  {
    name: 'Pedro L',
    roles: {
      create: [
        { instrument: { connect: { id: 2 } } },
        { instrument: { connect: { id: 3 } } },
      ],
    },
  },
  {
    name: 'Simon L',
    roles: {
      create: [
        { instrument: { connect: { id: 2 } } },
        { instrument: { connect: { id: 3 } } },
      ],
    },
  },
  {
    name: 'Louis L',
    roles: {
      create: [
        { instrument: { connect: { id: 2 } } },
        { instrument: { connect: { id: 3 } } },
        { instrument: { connect: { id: 4 } } },
        { instrument: { connect: { id: 10 } } },
      ],
    },
  },
  {
    name: 'Annaïg P',
    roles: { create: [{ instrument: { connect: { id: 6 } } }] },
  },
  {
    name: 'Eléonore T',
    roles: { create: [{ instrument: { connect: { id: 6 } } }] },
  },
  {
    name: 'Loanne M',
    roles: {
      create: [
        { instrument: { connect: { id: 6 } } },
        { instrument: { connect: { id: 5 } } },
      ],
    },
  },
  {
    name: 'Théo G',
    roles: { create: [{ instrument: { connect: { id: 6 } } }] },
  },
  {
    name: 'Pierre L',
    roles: {
      create: [
        { instrument: { connect: { id: 6 } } },
        { instrument: { connect: { id: 10 } } },
        { instrument: { connect: { id: 2 } } },
        { instrument: { connect: { id: 3 } } },
      ],
    },
  },
  {
    name: 'Sophie M',
    roles: { create: [{ instrument: { connect: { id: 4 } } }] },
  },
  {
    name: 'Arthur M',
    roles: { create: [{ instrument: { connect: { id: 4 } } }] },
  },
  {
    name: 'Emerson F',
    roles: {
      create: [
        { instrument: { connect: { id: 4 } } },
        { instrument: { connect: { id: 5 } } },
        { instrument: { connect: { name: 'Kick Drum' } } },
      ],
    },
  },
  {
    name: 'Lucie B',
    roles: { create: [{ instrument: { connect: { id: 4 } } }] },
  },
  {
    name: 'Robinson C',
    roles: { create: [{ instrument: { connect: { id: 4 } } }] },
  },
  {
    name: 'Quentin L',
    roles: { create: [{ instrument: { connect: { id: 4 } } }] },
  },
  {
    name: 'Antoine L',
    roles: { create: [{ instrument: { connect: { id: 5 } } }] },
  },
  {
    name: 'Julien K',
    roles: { create: [{ instrument: { connect: { id: 5 } } }] },
  },
  {
    name: 'Valentin M',
    roles: { create: [{ instrument: { connect: { id: 5 } } }] },
  },
  {
    name: 'Pierre K',
    roles: { create: [{ instrument: { connect: { id: 5 } } }] },
  },
  {
    name: 'Thomas G',
    roles: { create: [{ instrument: { connect: { id: 5 } } }] },
  },
  {
    name: 'Arthur F',
    roles: { create: [{ instrument: { connect: { id: 5 } } }] },
  },
  {
    name: 'Clémentine M',
    roles: { create: [{ instrument: { connect: { id: 5 } } }] },
  },
  {
    name: 'Pierre PPP',
    roles: { create: [{ instrument: { connect: { id: 7 } } }] },
  },
  {
    name: 'Romain F',
    roles: { create: [{ instrument: { connect: { id: 7 } } }] },
  },
  {
    name: 'Samuel M',
    roles: { create: [{ instrument: { connect: { id: 7 } } }] },
  },
  {
    name: 'Cédric A',
    roles: { create: [{ instrument: { connect: { id: 7 } } }] },
  },
  {
    name: 'Ando D',
    roles: { create: [{ instrument: { connect: { id: 7 } } }] },
  },
  {
    name: 'Thibaut E',
    roles: { create: [{ instrument: { connect: { id: 7 } } }] },
  },
  {
    name: 'Eudes C',
    roles: { create: [{ instrument: { connect: { id: 7 } } }] },
  },
  {
    name: 'Orianne F',
    roles: { create: [{ instrument: { connect: { id: 7 } } }] },
  },
  {
    name: 'Simon W',
    roles: { create: [{ instrument: { connect: { id: 8 } } }] },
  },
  {
    name: 'Augustin C',
    roles: { create: [{ instrument: { connect: { id: 8 } } }] },
  },
  {
    name: 'Julien F',
    roles: { create: [{ instrument: { connect: { id: 9 } } }] },
  },
  {
    name: 'Cyril E',
    roles: { create: [{ instrument: { connect: { id: 9 } } }] },
  },
  {
    name: 'Seb F',
    roles: { create: [{ instrument: { connect: { id: 9 } } }] },
  },
  {
    name: 'Lucie M',
    roles: { create: [{ instrument: { connect: { id: 1 } } }] },
  },
  {
    name: 'Violette G',
    roles: { create: [{ instrument: { connect: { id: 1 } } }] },
  },
  {
    name: 'Friedrich A',
    roles: { create: [{ instrument: { connect: { id: 1 } } }] },
  },
  {
    name: 'Elisa K',
    roles: { create: [{ instrument: { connect: { id: 1 } } }] },
  }
]

const bandData: Prisma.BandCreateInput[] = [
  {
    name: 'Feis',
    memberships: {
      create: [{
        player: {
          connect: {
            id: 1
          }
        }
      }, {
        player: {
          connect: {
            id: 2
          }
        }
      }, {
        player: {
          connect: {
            id: 3
          }
        }
      }, {
        player: {
          connect: {
            id: 4
          }
        }
      }, {
        isAdmin: true,
        player: {
          connect: {
            id: 5
          }
        }
      }, {
        player: {
          connect: {
            id: 6
          }
        }
      }, {
        player: {
          connect: {
            id: 7
          }
        }
      }, {
        player: {
          connect: {
            id: 8
          }
        }
      }, {
        player: {
          connect: {
            id: 9
          }
        }
      }, {
        player: {
          connect: {
            id: 10
          }
        }
      }]
    },
    gigs: {
      create: [
        {
          name: '47.1',
          date: new Date(2023, 3, 14),
          location: 'Place de la République',
        },
      ],
    },
    voices: {
      create: [
        {
          instrument: {
            connect: {
              id: 1,
            },
          },
        },
        {
          instrument: {
            connect: {
              id: 2,
            },
          },
        },
        {
          instrument: {
            connect: {
              id: 3,
            },
          },
        },
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)

  for (const i of instrumentData) {
    await prisma.instrument.create({
      data: i,
    })
  }

  for (const p of playerData) {
    await prisma.player.create({
      data: p,
    })
  }

  for (const b of bandData) {
    await prisma.band.create({
      data: b,
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
