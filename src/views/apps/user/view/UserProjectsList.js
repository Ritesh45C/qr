// ** Reactstrap Imports
import { Card, CardHeader, Progress } from 'reactstrap'

// ** Third Party Components
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const projectsArr = [
  {
    progress: 60,
    hours: '210:30h',
    progressColor: 'info',
    totalTasks:"cell text",
    title: 'aswedh',
  },
  {
    hours: '89h',
    progress: 15,
    totalTasks:"cell text",
    progressColor: 'danger',
    title: 'aswedh',
    img: require('@src/assets/images/icons/brands/xd-label.png').default
  },
  {
    progress: 90,
    hours: '129:45h',
    totalTasks:"cell text",
    progressColor: 'success',
    title: 'aswedh',
    img: require('@src/assets/images/icons/brands/vue-label.png').default
  },
  {
    hours: '45h',
    progress: 49,
    totalTasks:"cell text",
    progressColor: 'warning',
    title: 'aswedh',
    img: require('@src/assets/images/icons/brands/sketch-label.png').default
  },

  {
    progress: 73,
    hours: '67:10h',
    totalTasks:"cell text",
    progressColor: 'info',
    title: 'aswedh',

  },
  {
    progress: 81,
    hours: '108:39h',
    totalTasks:"cell text",
    title: 'aswedh',
    progressColor: 'success',
    img: require('@src/assets/images/icons/brands/html-label.png').default
  },
  {
    progress: 78,
    hours: '88:19h',
    totalTasks:"cell text",
    progressColor: 'success',
    title: 'aswedh',
    img: require('@src/assets/images/icons/brands/vue-label.png').default
  }
]

export const columns = [
  {
    sortable: true,
    minWidth: '300px',
    name: 'QR String',
    selector: row => row.title,
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
         
          <div className='d-flex flex-column'>
            <span className='text-truncate fw-bolder'>{row.title}</span>
          </div>
        </div>
      )
    }
  },
  {
    name: 'Vendor',
    selector: row => row.totalTasks,
    cell: row => {
      return (
        <div className='d-flex flex-column'>
        <span className='text-truncate fw-bolder'>Cell Text</span>
      </div>
      )
    }
  },
  {
    name: 'Created On',
    selector: row => row.progress,
    sortable: true,
    cell: row => {
      return (
        <div className='d-flex flex-column'>
        <span className='text-truncate fw-bolder'>Cell Text</span>
      </div>
      )
    }
  },
  {
    name: 'Under Warrantey',
    selector: row => row.hours,
    cell: row => {
      return (
        <div className='d-flex flex-column'>
        <span className='text-truncate fw-bolder'>Cell Text</span>
      </div>
      )
    }
  }
]

const UserProjectsList = () => {
  return (
    <Card>
      <CardHeader tag='h4'>QR String List</CardHeader>
      <div className='react-dataTable user-view-account-projects'>
        <DataTable
          noHeader
          responsive
          columns={columns}
          data={projectsArr}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
        />
      </div>
    </Card>
  )
}

export default UserProjectsList
