import { t } from '$lib/trpc/t';

import { create } from './create';
import { list } from './list';
import { makeOrganizer } from './makeOrganizer';
import { read } from './read';
import { update } from './update';

export const presences = t.router({
  list,
  read,
  create,
  update,
  makeOrganizer
});
