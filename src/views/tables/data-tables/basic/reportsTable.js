// ** React Imports
import { useState,useEffect, useRef } from 'react'
import html2pdf from 'html2pdf.js/dist/html2pdf.min';
import ReactDOMServer from 'react-dom/server';

// ** Table columns & Expandable Data
import ExpandableTable, { data, columns } from '../data'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import Html from 'react-pdf-html';

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
import { Document,Page } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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
  const containerRef = useRef();

  const PdfDownloadComponent = ( htmlContent ) => {
   
      const container = document.createElement('div');
      container.innerHTML = htmlContent;
  
      // Use html2canvas to capture the rendered HTML content
      html2canvas(container)
        .then((canvas) => {
          // Calculate the ratio to fit the content on the PDF page
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm');
          const width = pdf.internal.pageSize.getWidth();
          const height = (canvas.height * width) / canvas.width;
  
          // Add the captured image to the PDF
          pdf.addImage(imgData, 'PNG', 0, 0, width, height);
  
          // Download the PDF
          pdf.save('download.pdf');
        });
    
  
    // Trigger the download immediately
  
  
  };
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
    setLoading(true)
    setInitiateDownload(false)
    console.log(value)
    setDate(value)
  const fromDate=value[0].toISOString().substring(0, 10)
  const toDate=value[1].toISOString().substring(0, 10)
  const configs = {
    headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
}

axios.get(`https://Warranty.lsin.panasonic.com/api/report/getDump?startDate=${fromDate}&endDate=${toDate}`,configs).then(res=>
{
  console.log(res)
var modifiedData= res.data.msg.map(a=>
  
    ( {
      "Report Id":a.itemCode.reportId,
      "Report Date":new Date(a.itemCode.createdAt).toLocaleDateString(),
      "Month":new Date(a.itemCode.createdAt).toLocaleString('default', { month: 'long' }),
      "Year":new Date(a.itemCode.createdAt).getFullYear(),
      "Item Code":a.itemCode.itemCode,
      "Partner Name": a.partners.partnerName,
      "City": a.partners.city,
      "Description":a.products.description,
      "Units":a.itemCode.units,
      "Fake":a.itemCode.summary.fake,
      "Item in Warranty":a.itemCode.summary.item_in_warenty,
      "Out of Warranty":a.itemCode.summary.out_of_warenty,
      "Warranty already claimed":a.itemCode.summary.warrenty_already_claimed,
      "Product Category":a.products.Category,
      "Prouduct Subcategory":a.products.subCategory,


    }))
    setLoading(false)
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


  const printHandler = () => {
    var opt = {
      margin:       0,
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 1 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
     
    const printElement =reportpdfjs();

    // const printElement = pdfJSX();

    html2pdf().from(printElement).set(opt).save();
  }

  return (
    <Card>
      <div className="App">
      <button onClick={printHandler}>Print</button>
    </div>
    <div>
      
    </div>
      <CardHeader>
        <CardTitle tag='h4'>All Reports</CardTitle>
        <div>
        <DateRangePicker onChange={(e)=>changedate(e)} value={daterange} />
        <br/>
        {loading?<p style={{padding:"15px"}}>Loading....</p>:null}
        {initiateDownload && (
        <>
      
        <div className='csvdownload'>
         
            <CSVLink
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
