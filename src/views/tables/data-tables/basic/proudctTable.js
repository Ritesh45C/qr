// ** React Imports
import { useState,useEffect } from 'react'

// ** Table columns & Expandable Data
import ExpandableTable, { data, columns } from '../data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
// ** Reactstrap Imports
import { Card, CardHeader, CardTitle } from 'reactstrap'
import axios, { Axios } from 'axios'

const ProductTable = () => {
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  const [data,setData]=useState([])
  const [pageCount,setPageCount]=useState(5)
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
    // axios.get(`https://Warranty.lsin.panasonic.com/api/product`,configs).then(res=>setPageCount(res.data.msg.length/10+1))
    axios.get(`https://Warranty.lsin.panasonic.com/api/product?page=${pages}&limit=10`,configs).then(res=>{
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
    name: 'Business Unit',
    sortable: true,
    minWidth: '100px',
    selector: row => row.businessUnit
  },{
    name: 'Category',
    sortable: true,
    minWidth: '250px',
    selector: row => row.Category
  },{
    name: 'Sub Category',
    sortable: true,
    minWidth: '250px',
    selector: row => row.subCategory
  },{
    name: 'Item Code',
    sortable: true,
    minWidth: '250px',
    selector: row => row.itemCode
  },{
    name: 'Description',
    sortable: true,
    minWidth: '250px',
    selector: row => row.description
  }]
  const tableData = {
    columns,
    data
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>All Products</CardTitle>
      </CardHeader>
      <div className='react-dataTable'>
        {data.length?
           <div className='invoice-list-dataTable react-dataTable'>
                
           <DataTableExtensions {...tableData}>
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
        /></DataTableExtensions>

        </div> :null}
      </div>
    </Card>
  )
}

export default ProductTable
