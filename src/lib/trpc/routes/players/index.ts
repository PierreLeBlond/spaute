import { t } from "$lib/trpc/t";
import { create } from "./create";
import { list } from "./list";
import { read } from "./read";

export const players = t.router({
  list,
  read,
  create
});