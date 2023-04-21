import { auth } from "../middlewares/auth";
import { publicProcedure } from "./publicProcedure";

export const privateProcedure = publicProcedure.use(auth);