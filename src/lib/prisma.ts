import { Prisma, PrismaClient, type Gig, type Presence, type Role, type GigVoice, type DisabledVoice, type BandVoice } from '@prisma/client';
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
      bandVoices: true
    }
  },
  gigVoices: true,
  disabledVoices: true
}

const includeMap = new Map<Prisma.ModelName, any>([
  ['Gig', {
    getWhere: (gig: Gig) => ({
      id: gig.id
    })
  }],
  ['Presence', {
    getWhere: (presence: Presence) => ({
      id: presence.gigId
    })
  }],
  ['GigVoice', {
    getWhere: (gigVoice: GigVoice) => ({
      id: gigVoice.gigId
    })
  }],
  ['DisabledVoice', {
    getWhere: (disabledVoice: DisabledVoice) => ({
      id: disabledVoice.gigId
    })
  }],
  ['BandVoice', {
    getWhere: (bandVoice: BandVoice) => ({
      band: {
        id: bandVoice.bandId
      }
    })
  }],
  ['Role', {
    getWhere: (role: Role) => ({
      presences: {
        some: {
          player: {
            id: role.playerId
          }
        }
      }
    })
  }]
]);

prisma.$use(async (params, next) => {

  const { model, action } = params;

  if (!model || !includeMap.has(model) || (action != 'create' && action != 'delete' && (action != 'update' || model == 'Gig'))) {
    return next(params);
  }

  const { getWhere } = includeMap.get(model);

  const result = await next(params);

  if (action == 'delete' && model == 'Gig') {
    return result;
  }

  const gigs = await prisma.gig.findMany({
    where: getWhere(result),
    include: gigInclude
  })

  await computePlayabilities(gigs);

  return result;
});

export default prisma;