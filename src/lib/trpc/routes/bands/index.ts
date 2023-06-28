import { t } from "$lib/trpc/t";
import { list } from "./list";
import { read } from "./read";
import { del } from "./delete";
import { create } from "./create";

export const bands = t.router({
  list,
  read,
  delete: del,
  create
});