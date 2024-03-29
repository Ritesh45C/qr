import { lazy } from 'react'

const LogsRoutes = [
  
  {
    path: '/logs/accesslogs',
    component: lazy(() => import('../../views/accessLogs/accesslogs'))
  },
//   {
//     path: '/jobs/view-jobs',
//     component: lazy(() => import('../../views/jobs/viewJobs'))
//   },
//   {
//     path: '/forms/add-subcategory',
//     component: lazy(() => import('../../views/forms/form-repeater/add-subcategory'))
//   },
//   {
//     path: '/forms/product-part-category',
//     component: lazy(() => import('../../views/forms/form-repeater/product-part-category'))
//   },
  // {
  //   path: '/forms/product-management',
  //   component: lazy(() => import('../../views/forms/form-repeater/product-management'))
  // },

]

export default LogsRoutes
