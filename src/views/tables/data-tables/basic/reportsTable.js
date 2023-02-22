// ** React Imports
import { useState,useEffect } from 'react'

// ** Table columns & Expandable Data
import ExpandableTable, { data, columns } from '../data'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { Button, Card, CardHeader, CardTitle,Label } from 'reactstrap'
import axios, { Axios } from 'axios'
import { useHistory } from 'react-router-dom'
import Flatpickr from 'react-flatpickr'
import { CSVLink } from 'react-csv';
import moment from 'moment/moment';

const ReportsTable = () => {
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  const [daterange,setDate]=useState(([new Date(), new Date()]))
  const [pageCount,setPageCount]=useState(5)
  const [value, onChange] = useState([new Date(), new Date()]);
  const [jobcsv,setJobcsv]=useState([])
  const [loading,setLoading]=useState(false)
  const [initiateDownload, setInitiateDownload] = useState(false)
  const [data,setData]=useState([])
  const history = useHistory()
  // ** Function to handle filter
  const handlePagination = page => {
    console.log(page)
    setCurrentPage(page.selected)
    getCategories(page.selected)
  }
  useEffect(() => {
    if (jobcsv.length) {
      setInitiateDownload(true)
    }
  }, [jobcsv])
  useEffect(() => {
   getCategories(0)
  }, [])
  
  const changedate=(value)=>{
    setInitiateDownload(false)
    console.log(value)
    setDate(value)
  const fromDate=value[0].toISOString().substring(0, 10)
  const toDate=value[1].toISOString().substring(0, 10)
  const configs = {
    headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
}

axios.get(`https://warranty.lsin.panasonic.com/api/report/getDump?startDate=${fromDate}&endDate=${toDate}`,configs).then(res=>
{
var modifiedData= res.data.msg.map(a=>
  
    ( {
      "businessUnitSpoc":a.approvedStatus.businessUnitSpoc.approveState,
      "managerApproval": a.approvedStatus.manager.approveState,
      "serviceTechnician":a.approvedStatus.serviceTechnician.approveState,
      "warehouseHead":a.approvedStatus.warehouseHead.approveState,
"fake":a.fake,
"isReady":a.isReady,
"partnerApproval":a.partnerApproval,
"partnerId":a.partnerId,
"reportColId":a.reportColId,

    }))
    setJobcsv(modifiedData)

setInitiateDownload(true)
    console.log(modifiedData)
  }
)
}



  

  const getCategories=async(page)=>{
    const configs = {
        headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
    }
    const pages=page+1
    axios.get(`https://Warranty.lsin.panasonic.com/api/report`,configs).then(res=>setPageCount(res.data.msg.length/10+1))

    axios.get(`https://Warranty.lsin.panasonic.com/api/report?page=${pages}&limit=10`,configs).then(res=>{
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
      pageCount={pageCount}
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
    name: 'Report Id',
    sortable: true,
    minWidth: '100px',
    selector: row => row.reportId,
    cell: row =>
<div className='jobid' onClick={()=>history.push(`/view-reports/report/${row.reportId}`)} >{row.reportId}</div>
  },
  {
    name: 'itemCode',
    sortable: true,
    minWidth: '100px',
    selector: row => row.ReportData[0]?.itemCode
  },
  {
    name: 'Units',
    sortable: true,
    minWidth: '100px',
    selector: row => row.ReportData[0]?.units
  },
  {
    name: 'fake',
    sortable: true,
    minWidth: '100px',
    selector: row => row.ReportData[0]?.summary.fake
  },{
    name: 'Warranty Claimed',
    sortable: true,
    minWidth: '100px',
    selector: row =>row.ReportData[0]?.summary.warrenty_already_claimed
  },]

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>All Reports</CardTitle>
        <div>
        <DateRangePicker onChange={(e)=>changedate(e)} value={daterange} />
        <br/>
        {initiateDownload && (
        <>
      
        <div className='csvdownload'>  <CSVLink
    data={jobcsv}
    filename={`${"report"}`}     
    >{`Download ${"Report"}`} </CSVLink></div>
  
            </>

  )}

        </div>
        
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
        /> : <div className='nodatapagination'> 
        <h4 style={{textAlign:"center"}}>No More Data !</h4>
          <CustomPagination/>
          </div>}
      </div>
    </Card>
  )
}

export default ReportsTable
