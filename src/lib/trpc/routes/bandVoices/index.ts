import { t } from "$lib/trpc/t";
import { create } from "./create";
import { del } from "./delete";
import { list } from "./list";

export const bandVoices = t.router({
  list,
  delete: del,
  create,
});