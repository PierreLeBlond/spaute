import { t } from "$lib/trpc/t";
import { list } from "./list";

export const instruments = t.router({
  list
});