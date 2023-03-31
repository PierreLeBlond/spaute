import { Prisma, PrismaClient, type Band, type Gig, type Player, type Presence, type Role, type Voice } from '@prisma/client';
import { computePlayabilities } from './hook/computePlayability';

const prisma = new PrismaClient();

const gigInclude = {
  presences: {
    include: {
      player: {
        include: {
          roles: true
        }
      }
    }
  },
  band: {
    include: {
      voices: true
    }
  }
}

type GigPayload = Gig & { band: Band & { voices: Voice[] }, presences: (Presence & { player: Player & { roles: Role[] } })[] };

const includeMap = new Map<Prisma.ModelName, any>([
  ['Gig', {
    getGigs: (data: GigPayload) => [data],
    include: gigInclude
  }],
  ['Presence', {
    getGigs: (data: { gig: GigPayload }) => [data.gig],
    include: {
      gig: {
        include: gigInclude
      }
    }
  }],
  ['Voice', {
    getGigs: (data: { band: { gigs: GigPayload[] } }) => data.band.gigs,
    include: {
      band: {
        include: {
          gigs: {
            include: gigInclude
          }
        }
      }
    }
  }],
  ['Role', {
    getGigs: (data: { player: { presences: { gig: GigPayload }[] } }) => data.player.presences.map(presence => presence.gig),
    include: {
      player: {
        include: {
          presences: {
            include: {
              gig: {
                include: gigInclude
              }
            }
          }
        }
      }
    }
  }]
]);

prisma.$use(async (params, next) => {

  const { model, action } = params;

  if (!model || !includeMap.has(model) || (action != 'create' && action != 'delete' && (action != 'update' || model == 'Gig'))) {
    return next(params);
  }

  const { include, getGigs } = includeMap.get(model);

  params.args.include = {
    ...params.args.include,
    ...include
  };

  const result = await next(params);

  if (action == 'delete' && model == 'Gig') {
    return result;
  }

  const gigs = getGigs(result);
  await computePlayabilities(gigs);

  return result;
});

export default prisma;