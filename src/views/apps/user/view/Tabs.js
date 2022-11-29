// ** React Imports
import { Fragment,useContext } from 'react'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Icons Imports
import { User, Lock, Bookmark, Bell, Link } from 'react-feather'
import OrdersBarChart from '@src/views/ui-elements/cards/statistics/OrdersBarChart'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'

// ** User Components
import InvoiceList from './InvoiceList'
import SecurityTab from './SecurityTab'
import Connections from './Connections'
import BillingPlanTab from './BillingTab'
import UserTimeline from './UserTimeline'
import Notifications from './Notifications'
import UserProjectsList from './UserProjectsList'

const UserTabs = ({ active, toggleTab }) => {
  const { colors } = useContext(ThemeColors)

  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <User className='font-medium-3 me-50' />
            <span className='fw-bold'>Overview</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <Lock className='font-medium-3 me-50' />
            <span className='fw-bold'>QR Strings</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
            <Bookmark className='font-medium-3 me-50' />
            <span className='fw-bold'>Batches</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '4'} onClick={() => toggleTab('4')}>
            <Bell className='font-medium-3 me-50' />
            <span className='fw-bold'>Partners</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '5'} onClick={() => toggleTab('5')}>
            <Link className='font-medium-3 me-50' />
            <span className='fw-bold'>Edit</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
        <StatsCard cols={{ xl: '3', sm: '6' }} />

          <UserProjectsList />
         
        </TabPane>
        <TabPane tabId='2'>
        <UserProjectsList />
         
        </TabPane>
        <TabPane tabId='3'>
        <UserProjectsList />
         
        </TabPane>
        <TabPane tabId='4'>
        <UserProjectsList />
         
        </TabPane>
        <TabPane tabId='5'>
        <UserProjectsList />
         
        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default UserTabs
