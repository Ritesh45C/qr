// ** React Imports
import { Suspense, useContext, lazy, Fragment, useState, useEffect } from 'react'

// ** Utils
import { isUserLoggedIn } from '@utils'
import { useLayout } from '@hooks/useLayout'
import { AbilityContext } from '@src/utility/context/Can'
import { useRouterTransition } from '@hooks/useRouterTransition'
import LoginBasic from '../views/pages/authentication/LoginBasic'
// ** Custom Components
import LayoutWrapper from '@layouts/components/layout-wrapper'

// ** Router Components
import { BrowserRouter as AppRouter, Route, Switch, Redirect, useParams, withRouter } from 'react-router-dom'

// ** Routes & Default Routes
import { DefaultRoute, Routes } from './routes'

// ** Layouts
import BlankLayout from '@layouts/BlankLayout'
import VerticalLayout from '@src/layouts/VerticalLayout'
import HorizontalLayout from '@src/layouts/HorizontalLayout'
import Tabs from '../views/Tabs'
import Carinsurance from '../views/CarInsurance'
import axios from 'axios'
import KnowledgeBase from '../views/pages/knowledge-base/KnowledgeBase'
import Login from '../views/pages/authentication/Login'
// import Tabs from '../views/components/tabs'
const Router = (props) => {
  // ** Hooks
  const { layout, setLayout, setLastLayout } = useLayout()
  const { transition, setTransition } = useRouterTransition()
  // setLayout("horizontal")
  // ** ACL Ability Context
  const ability = useContext(AbilityContext)
  const url = "https://prod-api.xpcover.com"



  // ** Dynamic Routes setup
  // const { company } = useParams();
  var a = props.history.location.pathname.split('/')[1]
  console.log(props.history)
  const company = a
  const [clientID, setClientID] = useState([]);
  const [loader, setloader] = useState(true);
  // const getClients = () => {
  //   // window.location.reload();
  //   axios
  //     .get(`${url}/onboarding/getClientId/${company}`)
  //     .then((response) => {
  //       localStorage.setItem("company", company);
  //       localStorage.setItem("clientId", response.data[0].xpcClientId);
  //       setClientID(response.data[0].xpcClientId);
  //       localStorage.setItem("customerId", response.data[0]._id);
  //       setloader(false);
  //     })
  //     .catch((err) => {
  //       setloader(false);
  //       setClientID([]);
  //       localStorage.removeItem("company");
  //       localStorage.removeItem("clientId");
  //       localStorage.removeItem("customerId");
  //       // window.location.href = "/misc/coming-soon"
  //     })
  // };
  // useEffect(() => {
  //   // props.setCompany(company);
  //   getClients();
  //   console.log(clientID.length);
  // }, []);
  // ** Dynamic Routes setup end




  // ** Default Layout
  // const DefaultLayout = layout === 'horizontal' ? 'HorizontalLayout' : 'VerticalLayout'
  const DefaultLayout = layout === 'horizontal' ? 'HorizontalLayout' : 'VerticalLayout'

  // ** All of the available layouts
  const Layouts = { BlankLayout, VerticalLayout, HorizontalLayout }

  // ** Current Active Item
  const currentActiveItem = null

  // ** Return Filtered Array of Routes & Paths
  const LayoutRoutesAndPaths = layout => {
    const LayoutRoutes = []
    const LayoutPaths = []

    if (Routes) {
      Routes.filter(route => {
        // ** Checks if Route layout or Default layout matches current layout
        if (route.layout === layout || (route.layout === undefined && DefaultLayout === layout)) {
          LayoutRoutes.push(route)
          LayoutPaths.push(route.path)
        }
      })
    }

    return { LayoutRoutes, LayoutPaths }
  }

  const NotAuthorized = lazy(() => import('@src/views/pages/misc/NotAuthorized'))

  // ** Init Error Component
  const Error = lazy(() => import('@src/views/pages/misc/Error'))

  /**
   ** Final Route Component Checks for Login & User Role and then redirects to the route
   */
  const FinalRoute = props => {
    const route = props.route
    let action, resource

    // ** Assign vars based on route meta
    if (route.meta) {
      action = route.meta.action ? route.meta.action : null
      resource = route.meta.resource ? route.meta.resource : null
    }

    if (route.meta && route.meta.authRoute && isUserLoggedIn()) {
      // ** If route has meta and authRole and user is Logged in then redirect user to home page (DefaultRoute)
      return <Redirect to='/' />
    } else if (isUserLoggedIn() && !ability.can(action || 'read', resource)) {
      // ** If user is Logged in and doesn't have ability to visit the page redirect the user to Not Authorized
      return <Redirect to='/misc/not-authorized' />
    } else {
      // ** If none of the above render component
      return <route.component {...props} />
    }
  }

  // ** Return Route to Render
  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      // ** Convert Layout parameter to Layout Component
      // ? Note: make sure to keep layout and component name equal

      const LayoutTag = Layouts[layout]

      // ** Get Routes and Paths of the Layout
      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout)

      // ** We have freedom to display different layout for different route
      // ** We have made LayoutTag dynamic based on layout, we can also replace it with the only layout component,
      // ** that we want to implement like VerticalLayout or HorizontalLayout
      // ** We segregated all the routes based on the layouts and Resolved all those routes inside layouts

      // ** RouterProps to pass them to Layouts
      const routerProps = {}

      return (
        <Route path={LayoutPaths} key={index}>
        <Route path={LayoutPaths} key={index}>
          <LayoutTag
            layout={layout}
            setLayout={setLayout}
            transition={transition}
            routerProps={routerProps}
            setLastLayout={setLastLayout}
            setTransition={setTransition}
            currentActiveItem={currentActiveItem}
          >
            <Switch>
              {LayoutRoutes.map(route => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact === true}
                    render={props => {
                      // ** Assign props to routerProps
                      Object.assign(routerProps, {
                        ...props,
                        meta: route.meta
                      })

                      return (
                        <Fragment>
                          {/* Layout Wrapper to add classes based on route's layout, appLayout and className */}

                          {route.layout === 'BlankLayout' ? (
                            <Fragment>
                              <FinalRoute route={route} {...props} />
                            </Fragment>
                          ) : (
                            <LayoutWrapper
                              layout={DefaultLayout}
                              transition={transition}
                              setTransition={setTransition}
                              /* Conditional props */
                              /*eslint-disable */
                              {...(route.appLayout
                                ? {
                                  appLayout: route.appLayout
                                }
                                : {})}
                              {...(route.meta
                                ? {
                                  routeMeta: route.meta
                                }
                                : {})}
                              {...(route.className
                                ? {
                                  wrapperClass: route.className
                                }
                                : {})}
                            /*eslint-enable */
                            >
                              <Suspense fallback={null}>
                                <FinalRoute route={route} {...props} />
                              </Suspense>
                            </LayoutWrapper>
                          )}
                        </Fragment>
                      )
                    }}
                  />
                )
              })}
            </Switch>
          </LayoutTag>
        </Route>
        </Route>
      )
    })
  }

  return (
    // <AppRouter basename={process.env.REACT_APP_BASENAME}>
    <Switch>
      {/* If user is logged in Redirect user to DefaultRoute else to login */}
      {/* {(clientID[0] == null && loader == true) ? (
        <h1>page is loading </h1>)
        : <> */}
      <Route path='/:company?' exact render={() => (
        // <Layouts.HorizontalLayout>
        <Login />
        // </Layouts.HorizontalLayout>
      )} />
      <Route path='/tabs' exact component={Tabs} />


      <Route
        exact
        path='/'
        render={() => {
          return isUserLoggedIn() ? <Redirect to={DefaultRoute} /> : <Redirect to='/apps/insurance/car' />
        }}
      />
      {/* </> */}
      {/* } */}
      {/* Not Auth Route */}
      <Route
        exact
        path='/misc/not-authorized'
        render={() => (
          <Layouts.BlankLayout>
            <NotAuthorized />
          </Layouts.BlankLayout>
        )}
      />
      {ResolveRoutes()}

      {/* NotFound Error page */}
      <Route path='*' component={Error} />
    </Switch>
    // </AppRouter>
  )
}

export default withRouter(Router)
