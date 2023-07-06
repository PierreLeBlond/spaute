import { t } from "$lib/trpc/t";
import { create } from "./create";
import { del } from "./delete";
import { list } from "./list";
import { update } from "./update";

export const roles = t.router({
  list,
  delete: del,
  create,
  update
})