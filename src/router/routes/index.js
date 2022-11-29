// ** Routes Imports
import { React, useState, useEffect } from 'react';
import AppRoutes from './Apps'
import FormRoutes from './Forms'
import PagesRoutes from './Pages'
import TablesRoutes from './Tables'
import ChartsRoutes from './Charts'
import DashboardRoutes from './Dashboard'
import UiElementRoutes from './UiElements'
import ExtensionsRoutes from './Extensions'
import PageLayoutsRoutes from './PageLayouts'
import Jobs from './Jobs'
import Reports from './Reports'
import Profile from'./Profile'

// ** Document title
// const TemplateTitle = 'Panasonic Warranty App'

// ** Default Route
const DefaultRoute = '/dashboard/ecommerce'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...AppRoutes,
  ...PagesRoutes,
  ...UiElementRoutes,
  ...ExtensionsRoutes,
  ...PageLayoutsRoutes,
  ...FormRoutes,
  ...Jobs,
  ...Reports,
  ...Profile,
  ...TablesRoutes,
  ...ChartsRoutes
]

export { DefaultRoute,  Routes }
