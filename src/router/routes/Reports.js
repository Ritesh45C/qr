import { lazy } from 'react'

const FormRoutes = [
  


  {
    path: '/reports/view-reports',
    component: lazy(() => import('../../views/tables/data-tables/basic/reportsTable'))
  },
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

export default FormRoutes
