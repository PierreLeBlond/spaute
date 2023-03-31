import type { PageLoad } from "./$types"

export const load: PageLoad = async () => ({
  tabs: [
    {
      href: '/logout',
      key: '/logout',
      label: 'logout'
    }
  ],
  title: 'Logout',
  index: 2
});