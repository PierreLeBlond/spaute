import { organizer } from '../middlewares/organizer';
import { publicProcedure } from './publicProcedure';

export const organizerProcedure = publicProcedure.use(organizer);
