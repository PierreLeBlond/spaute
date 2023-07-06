import { t } from "$lib/trpc/t";
import { create } from "./create";
import { del } from "./delete";
import { list } from "./list";
import { read } from "./read";

export const disabledVoices = t.router({
  list,
  read,
  delete: del,
  create,
});