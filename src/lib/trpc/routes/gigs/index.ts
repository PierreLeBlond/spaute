import { t } from '$lib/trpc/t';

import { create } from './create';
import { del } from './delete';
import { list } from './list';
import { listForPlayer } from './listForPlayer';
import { read } from './read';
import { update } from './update';

export const gigs = t.router({
  list,
  listForPlayer,
  read,
  delete: del,
  create,
  update
});
