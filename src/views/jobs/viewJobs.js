// ** React Imports
import { useState,useEffect } from 'react'

// ** Table columns & Expandable Data
// import ExpandableTable, { data, columns } from '../data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
// ** Reactstrap Imports
import { CSVLink } from "react-csv";

import { Card, CardHeader, CardTitle } from 'reactstrap'
import axios, { Axios } from 'axios'
import Viewajob from './viewajob';
import { useHistory } from 'react-router-dom';
const JobsTable = () => {
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  const [data,setData]=useState([])
  const [pageCount,setPageCount]=useState(5)
  const [jobcsv,setJobcsv]=useState([])
  const [loading,setLoading]=useState(false)
  const [initiateDownload, setInitiateDownload] = useState(false)
  const [jobId,setJobid]=useState(false)
const history = useHistory(history)
  // ** Function to handle filter
  const handlePagination = page => {
    setCurrentPage(page.selected)
    getAllJobs(page.selected)
  }
  useEffect(() => {
   getAllJobs(0)
  }, [])
  useEffect(() => {
    if (jobcsv.length) {
      setInitiateDownload(true)
    }
  }, [jobcsv])
  
  // useEffect(() => {
  //   // Enables user to download data more than once
  //   if (initiateDownload) {
  //     setInitiateDownload(false)
  //   }
  // }, [initiateDownload])
  
//   const checkmonth=(createdAt)=>{
//     var selecteddate = new Date(createdAt).toLocaleDateString() 
// var datestr = selecteddate.split('/');

// var month = datestr[0];
// var day = datestr[1]; 
// var year = datestr[2];

// var currentdate = new Date();
// var cur_month = currentdate.getMonth() + 1;
// var cur_day =currentdate.getDate();
// var cur_year =currentdate.getFullYear();

// if(cur_month==month && year >= cur_year)
// {
// return true
// }

//    else
//    {
//   return false
//    }
//   }

 const getJobids=async(jobid,id,total)=>{



  history.push(`/view-job/${id}/${total}`)
  setInitiateDownload(false)
  setJobid(id)
  setLoading(true)
  const configs = {
    headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
}
  axios.get(`https://Warranty.lsin.panasonic.com/api/job/${id}/raw`,configs).then(res=>{
      console.log(res.data)
    var modstring= res.data.msg.map(a=>[`https://pns.fyi/`+a])
      setJobcsv(modstring)
      setJobid(id)
      setInitiateDownload(true)
setData(data)
      setLoading(false)
      
  }).catch(err=>console.log(err))
 }
  const getAllJobs=async(page)=>{
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }

  const pages=page+1
  axios.get(`https://Warranty.lsin.panasonic.com/api/job`,configs).then(res=>setPageCount(res.data.msg.length/10+1))
    axios.get(`https://Warranty.lsin.panasonic.com/api/job/?page=${pages}&limit=10`,configs).then(res=>{
        console.log(res.data)
        setData(res.data.msg)
    })
  }
 const dataFromListOfUsersState = () => {
    return jobcsv
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
    name: 'Id',
    sortable: true,
    minWidth: '250px',
    selector: "jobID",
    // cell: row =>
    //   initiateDownload?<CSVLink
    //   data={dataFromListOfUsersState()}
    //   asyncOnClick={true}
    //   filename={`${row.jobID}${new Date().toLocaleDateString()}`}
    //   onClick={(event,done)=>getJobids(event,done,row._id)}
    // >
    // {  row.jobID}
    cell: row =>
<div className='jobid' onClick={()=>getJobids(row._id,row.jobID,row.generated)} >{row.jobID}</div>
    

  },{
    name: 'Generated',
    sortable: true,
    minWidth: '250px',
    selector: "generated"
  },{
    name: 'Pending',
    sortable: true,
    minWidth: '250px',
    selector: "pending"
  },{
    name: 'isCompleted',
    sortable: true,
    minWidth: '250px',
    selector: "isCompleted",
    cell: row => <span>{row.isCompleted.toString()}</span>

  },{
    name: 'createdAt',
    sortable: true,
    minWidth: '250px',
    selector: "createdAt",
    cell: row => <span>{new Date(row.createdAt).toLocaleDateString()}</span>

  }]
  const tableData = {
    columns,
    data
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>All Jobs</CardTitle>
      </CardHeader>
      <div className='csvdownload'>{loading?"Initiating Download...":null}</div>
      {initiateDownload && (
        <>
      
        <div className='csvdownload'>  <CSVLink
    data={jobcsv}
    filename={`${jobId}`}     
    >{`Download ${jobId}`} </CSVLink></div>
  
            </>

  )}
      <div className='react-dataTable'>
        {data.length?
         <div className='invoice-list-dataTable react-dataTable'>
                
         <DataTableExtensions {...tableData}>
   
        <DataTable
          noHeader
          pagination
          data={data}
          noDataComponent="Your Text Here"
        //   expandableRows
          columns={columns}
          expandOnRowClicked
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationComponent={data.length===0?null:CustomPagination}
          paginationDefaultPage={currentPage + 1}
        //   expandableRowsComponent={ExpandableTable}
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
        />     
           </DataTableExtensions>

      </div>
         :        
       <div className='nodatapagination'> 
        <h4 style={{textAlign:"center"}}>No More Data !</h4>
          <CustomPagination/>
          </div>
         
           }
         </div>
         {/* <Viewajob/> */}
    </Card>
  )
}

export default JobsTable
