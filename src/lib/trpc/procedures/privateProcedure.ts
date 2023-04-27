import { logged } from "../middlewares/logged";
import { publicProcedure } from "./publicProcedure";

export const privateProcedure = publicProcedure.use(logged);