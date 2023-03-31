import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = () => ({
  backPathname: '/',
  tabs: [{
    href: `/admin/instruments`,
    key: `/admin/instrument`,
    label: 'instruments'
  }],
  title: 'Admin'
});