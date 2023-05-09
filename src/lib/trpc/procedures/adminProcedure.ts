import { admin } from "../middlewares/admin";
import { publicProcedure } from "./publicProcedure";

export const adminProcedure = publicProcedure.use(admin);