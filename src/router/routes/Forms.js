import { lazy } from 'react'

const FormRoutes = [
  {
    path: '/forms/elements/input',
    component: lazy(() => import('../../views/forms/form-elements/input'))
  },
  {
    path: '/forms/elements/input-group',
    component: lazy(() => import('../../views/forms/form-elements/input-groups'))
  },
  {
    path: '/forms/elements/input-mask',
    component: lazy(() => import('../../views/forms/form-elements/input-mask'))
  },
  {
    path: '/forms/elements/textarea',
    component: lazy(() => import('../../views/forms/form-elements/textarea'))
  },
  {
    path: '/forms/elements/checkbox',
    component: lazy(() => import('../../views/forms/form-elements/checkboxes'))
  },
  {
    path: '/forms/elements/radio',
    component: lazy(() => import('../../views/forms/form-elements/radio'))
  },
  {
    path: '/forms/elements/switch',
    component: lazy(() => import('../../views/forms/form-elements/switch'))
  },
  {
    path: '/forms/elements/select',
    component: lazy(() => import('../../views/forms/form-elements/select'))
  },
  {
    path: '/forms/elements/number-input',
    component: lazy(() => import('../../views/forms/form-elements/number-input'))
  },
  {
    path: '/forms/elements/file-uploader',
    component: lazy(() => import('../../views/forms/form-elements/file-uploader'))
  },
  {
    path: '/forms/elements/editor',
    component: lazy(() => import('../../views/forms/form-elements/editor'))
  },
  {
    path: '/forms/elements/pickers',
    component: lazy(() => import('../../views/forms/form-elements/datepicker'))
  },
  {
    path: '/forms/layout/form-layout',
    component: lazy(() => import('../../views/forms/form-layouts'))
  },
  {
    path: '/forms/wizard',
    component: lazy(() => import('../../views/forms/wizard'))
  },
  {
    path: '/forms/form-validation',
    component: lazy(() => import('../../views/forms/validation'))
  },
  {
    path: '/forms/form-repeater',
    component: lazy(() => import('../../views/forms/form-repeater'))
  },
  {
    path: '/forms/add-designation',
    component: lazy(() => import('../../views/forms/form-repeater/add-designation'))
  },
  {
    path: '/forms/add-employee',
    component: lazy(() => import('../../views/forms/form-repeater/add-employees'))
  },
  {
    path: '/forms/add-partners',
    component: lazy(() => import('../../views/forms/form-repeater/add-partners'))
  },
  //  {
  //   path: '/forms/product-management',
  //   component: lazy(() => import('../../views/forms/form-repeater/product-management'))
  // },
  {
    path: '/forms/add-category',
    component: lazy(() => import('../../views/forms/form-repeater/add-category'))
  },
  {
    path: '/forms/add-subcategory',
    component: lazy(() => import('../../views/forms/form-repeater/add-subcategory'))
  },
  {
    path: '/forms/product-part-category',
    component: lazy(() => import('../../views/forms/form-repeater/product-part-category'))
  },
  // {
  //   path: '/forms/product-management',
  //   component: lazy(() => import('../../views/forms/form-repeater/product-management'))
  // },

]

export default FormRoutes
