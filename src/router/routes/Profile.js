import { lazy } from 'react'

const FormRoutes = [
  


  {
    path: '/profile/view-profile',
    component: lazy(() => import('../../views/profile/profile'))
  },


]

export default FormRoutes
