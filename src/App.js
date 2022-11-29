// ** Router Import
import { BrowserRouter as AppRouter, Route, Switch, Redirect, useParams } from 'react-router-dom'
import Router from './router/Router'

const App = () =>
  <AppRouter basename="/">
    <Router />
  </AppRouter>
export default App
