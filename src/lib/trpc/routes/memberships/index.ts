import { t } from '$lib/trpc/t';

import { create } from './create';
import { list } from './list';
import { makeAdmin } from './makeAdmin';
import { read } from './read';

export const memberships = t.router({
  list,
  read,
  create,
  makeAdmin
});
