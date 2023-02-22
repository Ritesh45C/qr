import { lazy } from 'react'

const PartnerRoutes = [
  
  {
    path: '/partner/view-partner',
    component: lazy(() => import('../../views/tables/data-tables/basic/partnerTable'))
  },
  {
    path: '/partner/add-partner',
    component: lazy(() => import('../../views/pages/partners/createPartner'))
  },


]

export default PartnerRoutes
