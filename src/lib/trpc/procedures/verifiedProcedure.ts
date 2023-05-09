import { verified } from "../middlewares/verified";
import { publicProcedure } from "./publicProcedure";

export const verifiedProcedure = publicProcedure.use(verified);