import { owner } from "../middlewares/owner";
import { verifiedProcedure } from "./verifiedProcedure";

export const ownerProcedure = verifiedProcedure.use(owner);