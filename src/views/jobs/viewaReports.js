// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import Chart from 'react-apexcharts'
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

// ** Utils
import { kFormatter } from '@utils'
// ** Third Party Components
import ReactPaginate from 'react-paginate'
// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardText,
  Progress,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  CardHeader,
  CardTitle
} from 'reactstrap'
import { Check, ChevronDown, ThumbsDown, ThumbsUp } from 'react-feather'
import DataTable from 'react-data-table-component'

const ViewReports = props => {
  // ** States
  const [currentPage, setCurrentPage] = useState(0)
  const [summary,setSummary]=useState([])
  const [report,setReport]=useState([])
  const [successOpen,setSuccess]=useState(false)

  const [approved,setApproved]=useState({
    "serviceTechnician": {
        "isApproved": true
    },
    "manager": {
        "isApproved": false
    },
    "businessUnitSpoc": {
        "isApproved": false
    },
    "warehouseHead": {
        "isApproved": false
    }
},)
  const [data, setData] = useState({
    "Report": {
        "approvedStatus": {
            "serviceTechnician": {
                "isApproved": true
            },
            "manager": {
                "isApproved": false
            },
            "businessUnitSpoc": {
                "isApproved": false
            },
            "warehouseHead": {
                "isApproved": false
            }
        },
        "_id": "6396b23cf9671e6b29c0baec",
        "reportColId": "99A93GMPL",
        "partnerId": "Pradip Electricals",
        "partnerApproval": false,
        "isReady": true,
        "fake": 10,
        "createdAt": "2022-12-12T04:46:52.551Z",
        "updatedAt": "2022-12-28T06:35:19.058Z",
        "__v": 0
    },
    "ReportData": [
        {
            "summary": {
                "fake": 10,
                "warrenty_already_claimed": 0,
                "out_of_warenty": 0,
                "item_in_warenty": 0
            },
            "_id": "63a9c235e4959a33a45c71bc",
            "reportType": "Type1",
            "status": "active",
            "itemCode": "123124124",
            "units": 67890,
            "codesScanned": [
                "asdasd",
                "asdasd"
            ],
            "reportId": "99A93GMPL",
            "createdAt": "2022-12-26T15:48:05.705Z",
            "updatedAt": "2022-12-26T15:59:26.671Z",
            "__v": 0
        },
        {
            "summary": {
                "fake": 0,
                "warrenty_already_claimed": 0,
                "out_of_warenty": 0,
                "item_in_warenty": 0
            },
            "_id": "63abe400f59712301794e2e7",
            "reportType": "Type1",
            "status": "active",
            "itemCode": "888888",
            "units": 777999,
            "codesScanned": [
                "abcd",
                "sd"
            ],
            "reportId": "99A93GMPL",
            "createdAt": "2022-12-28T06:36:48.515Z",
            "updatedAt": "2022-12-28T06:36:48.515Z",
            "__v": 0
        }
    ]
},)
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
  useEffect(() => {
    let id = props.match.params.id;
    const configs = {
        headers: { Authorization: `Bearer ${localStorage.getItem("tokens")}` },
      };
    
    axios.get(`https://warranty.lsin.panasonic.com/api/report/${id}/summary`,configs)
    .then(res =>{
        return(
            setData(res.data.data),
            setReport(res.data.data.report),
            setSummary(res.data.data.items)
        )
    } )
    .catch(()=>setData(null))

  }, [])

  const handleApprove=async(id)=>{
    const configs = {
        headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
    }
    const data={
      "approvalRole": "manager"
  }
    // axios.get(`https://Warranty.lsin.panasonic.com/api/product`,configs).then(res=>setPageCount(res.data.msg.length/10+1))
    axios.put(`https://Warranty.lsin.panasonic.com/api/report/approve/${id}`,data,configs).then(res=>{
        // console.log(res.data.msg)
        setSuccess(true)
      })
  }


  var columns= [{
    name: 'Report Id',
    sortable: true,
    minWidth: '100px',
    selector: row => row.reportId,
    
  },
  {
    name: 'itemCode',
    sortable: true,
    minWidth: '100px',
    selector: row => row.itemCode
  },
  {
    name: 'Units',
    sortable: true,
    minWidth: '100px',
    selector: row => row.units
  },
  {
    name: 'fake',
    sortable: true,
    minWidth: '100px',
    selector: row => row.summary.fake
  },{
    name: 'Warranty Claimed',
    sortable: true,
    minWidth: '100px',
    selector: row =>row.summary.warrenty_already_claimed
  },]

  

  return data !== null ? (
    <>
    <Modal isOpen={successOpen} toggle={() => setSuccess(!successOpen)} className='modal-dialog-centered'>
          <ModalHeader >Report Successfully Approved!</ModalHeader>
        
          <ModalFooter>
            <Button color='primary' onClick={() => setSuccess(!successOpen)}>
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>
    <Card style={{maxWidth:"800px", padding:"20px"}}>
      <CardBody>
        <div onClick={(id)=>handleApprove(data?.report?.reportColId)} style={{display:"flex",justifyContent:"space-between",marginBottom:"20px"}}><Button>Reject</Button> <Button  color='primary'>Approve</Button></div>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
            
        <h4>Report Status</h4>
        <div  >Report Id:{data?.report?.reportColId}</div>
        </div>
        <br/>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between",marginTop:"20px"}}>
            <div>
                <h5>
           Service Technician
                </h5> <br/>
                {report?.approvedStatus?.serviceTechnician.isApproved?      <ThumbsUp color='green'/>: <ThumbsUp  color="green"/>}
            </div>
            <div>
                <h5>
                Manager
                </h5> <br/>
                               {report?.approvedStatus?.manager.isApproved?      <ThumbsUp/>: <ThumbsDown  color="red"/>}

            </div> <div>
                <h5>
                Business UnitSpoc
                </h5> <br/>
                               {report?.approvedStatus?.businessUnitSpoc.isApproved?      <ThumbsUp/>: <ThumbsDown  color="red"/>}

            </div>  <div>
                <h5>
                Warehouse Head
                </h5> <br/>
                               {report?.approvedStatus?.warehouseHead.isApproved?      <ThumbsUp color='green'/>: <ThumbsDown  color="red"/>}

            </div>
            </div>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"70px"}}>
            <div>
                <h5>
               Partner Id
                </h5> <br/>
                               {report?.partnerId}

            </div>
            <div>
                <h5>
                Partner Approvel
                </h5> <br/>
                               {report?.partnerApproval?      <ThumbsUp color='green'/>: <ThumbsDown  color="red"/>}

            </div> <div>
                <h5>
               Ready
                </h5> <br/>
                               {report?.isReady?      <ThumbsUp color='green'/>: <ThumbsDown  color="red"/>}

            </div>
            <div>
                <h5>
               Fake
                </h5> <br/>
                               {report?.fake}

            </div>
            
            </div>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"70px"}}>
            <div>
                <h5>
                Assigned to
                </h5> <br/>
                               {report?.approvedStatus?.manager.assignedTo?.name}

            </div> 
</div>
        <br/>
        <div>

        </div>

      </CardBody>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Report Summary</CardTitle>
      </CardHeader>
      <div className='react-dataTable'>
        {summary.length?
        <DataTable
          noHeader
          pagination
          data={summary}
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
    </>
  ) : null
}
export default ViewReports
