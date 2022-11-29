// ** React Imports
import { useState,useEffect } from 'react'

// ** Table columns & Expandable Data
import ExpandableTable, { data, columns } from '../data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle } from 'reactstrap'
import axios, { Axios } from 'axios'

const CateogryTable = () => {
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  const [data,setData]=useState([])
  // ** Function to handle filter
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }
  useEffect(() => {
   getCategories()
  }, [])
  

  const getCategories=async()=>{
    axios.get('https://prod-api.xpiee.com/onboarding/get-categories').then(res=>{
        console.log(res.data)
        setData(res.data)
    })
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={''}
      nextLabel={''}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={10}
      breakLabel={'...'}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      nextLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakLinkClassName='page-link'
      previousLinkClassName='page-link'
      nextClassName='page-item next-item'
      previousClassName='page-item prev-item'
      containerClassName={'pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1'}
    />
  )
 var columns= [{
    name: 'Columns',
    sortable: true,
    minWidth: '250px',
    selector: row => row.category
  }]

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Designation</CardTitle>
      </CardHeader>
      <div className='react-dataTable'>
        {data.length?
        <DataTable
          noHeader
          pagination
          data={data}
        //   expandableRows
          columns={columns}
          expandOnRowClicked
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationComponent={CustomPagination}
          paginationDefaultPage={currentPage + 1}
        //   expandableRowsComponent={ExpandableTable}
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
        /> :null}
      </div>
    </Card>
  )
}

export default CateogryTable
