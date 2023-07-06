import { t } from "$lib/trpc/t";
import { list } from "./list";

export const formations = t.router({
  list
});