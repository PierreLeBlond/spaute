import { authenticated } from '../middlewares/authenticated';
import { publicProcedure } from './publicProcedure';

export const authenticatedProcedure = publicProcedure.use(authenticated);
