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

const SellersTable = () => {
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  const [data,setData]=useState([])
  // ** Function to handle filter
  const handlePagination = page => {
    setCurrentPage(page.selected)
    getCategories(page.selected)

  }
  useEffect(() => {
   getCategories(0)
  }, [])
  

  const getCategories=async(page)=>{
    const configs = {
        headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
    }
    const pages=page+1

    axios.get(`https://Warranty.lsin.panasonic.com/api/partner/sellers?page=${pages}&limit=10`,configs).then(res=>{
        console.log(res.data.msg)
        setData(res.data.msg)
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
    name: 'Seller Name',
    sortable: true,
    minWidth: '100px',
    selector: row => row.partnerName
  },{
    name: 'Id',
    sortable: true,
    minWidth: '250px',
    selector: row => row.partnerId
  },{
    name: 'Email',
    sortable: true,
    minWidth: '250px',
    selector: row => row.partnerUserEmailId
  },{
    name: 'Phone No.',
    sortable: true,
    minWidth: '250px',
    selector: row => row.partnerUserPhoneNo
  },{
    name: 'City',
    sortable: true,
    minWidth: '250px',
    selector: row => row.city
  }]

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>All Sellers</CardTitle>
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

export default SellersTable
