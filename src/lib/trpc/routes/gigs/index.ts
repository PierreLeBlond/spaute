import { list } from "./list";
import { listForPlayer } from "./listForPlayer";
import { read } from "./read";
import { create } from "./create";
import { update } from "./update";
import { t } from "$lib/trpc/t";
import { del } from "./delete";

export const gigs = t.router({
  list,
  listForPlayer,
  read,
  delete: del,
  create,
  update
})