import { owner } from "../middlewares/owner";
import { privateProcedure } from "./privateProcedure";

export const ownerProcedure = privateProcedure.use(owner);