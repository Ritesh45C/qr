// ** React Imports
import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/apps/email',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email'))
  },
  {
    path: '/apps/email/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/:company/super-top-up/:_id?',
    component: lazy(() => import("../../views/productPages/SuperTopup")),
    meta: {
      menuHidden: true
    }
  },
  {
    path: '/:company/super-top-up-proposal',
    component: lazy(() => import("../../views/productPages/detail/proposal")),
    exact: true,
    meta: {
      menuHidden: true
    }
  },
  // {
  //   path: '/:company/:productName/:_id?',
  //   component: lazy(() => import("../../views/productPages/detail/microInsurance")),
  //   meta: {
  //     menuHidden: true
  //   }
  // },
  {
    path: '/apps/email/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/:filter',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat'))
  },
  {
    path: '/apps/todo',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo'))
  },
  {
    path: '/apps/todo/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/todo/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/calendar',
    component: lazy(() => import('../../views/apps/calendar'))
  },
  {
    path: '/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },
  {
    path: '/apps/ecommerce/shop',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/shop'))
  },
  {
    path: '/:company/Car Insurance/:_id?',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/CarInsurance'))
  },
  {
    path: '/apps/insurance/health',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/health/index'))
  },
  {
    path: '/:company?/apps/insurance/health-buffer/:id?',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/HealthBuffer'))
  },
  {
    path: '/apps/insurance/questions',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/CarQuestionToggle'))
  },
  {
    path: '/:company?/Family Health Insurance/:id?',
    component: lazy(() => import('../../views/HealthForm')),
  },
  {

    path: '/apps/ecommerce/wishlist',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/wishlist'))
  },
  {
    path: '/apps/ecommerce/product-detail',
    exact: true,
    className: 'ecommerce-application',
    component: () => <Redirect to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
    path: '/apps/ecommerce/product-detail/:product',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/detail')),
    meta: {
      navLink: '/apps/ecommerce/product-detail'
    }
  },
  {
    path: '/apps/ecommerce/checkout',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/checkout'))
  },
  {
    path: '/apps/user/list',
    component: lazy(() => import('../../views/apps/user/list'))
  },
  {
    path: '/apps/user/view',
    exact: true,
    component: () => <Redirect to='/apps/user/view/1' />
  },
  {
    path: '/apps/user/view/:id',
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: '/apps/user/view'
    }
  },
  {
    path: '/apps/roles',
    component: lazy(() => import('../../views/apps/roles-permissions/roles'))
  },
  {
    path: '/apps/permissions',
    component: lazy(() => import('../../views/apps/roles-permissions/permissions'))
  }
]

export default AppRoutes
