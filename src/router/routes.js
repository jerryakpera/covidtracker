const routes = [{
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [{
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/country/:countryName',
        component: () => import("pages/PageCountry.vue"),
        props: true
      },
      {
        path: '/stats',
        component: () => import("pages/PageGlobal.vue"),
        props: true
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
