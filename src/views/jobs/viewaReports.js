// ** React Imports
import { useEffect, useState } from 'react'
// ** Third Party Components
import axios from 'axios'
import Chart from 'react-apexcharts'
import {  Modal, ModalHeader, ModalBody, ModalFooter,Form,FormGroup, Label } from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select from 'react-select'

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
import Reportpdf from '../tables/data-tables/basic/reportspdf'

const ViewReports = props => {
  // ** States
  const [centeredModal, setCenteredModal] = useState(false)
  const [showButton,setShowButton]=useState(false)
const [check,setCheck]=useState(false)
const [totalData,setTotalData]=useState({})
  const [currentPage, setCurrentPage] = useState(0)
  const [category,setCategory]=useState("")
  const [summary,setSummary]=useState([])
  const [report,setReport]=useState([])
  const [successOpen,setSuccess]=useState(false)
  const [approvedStatus,setApprovedStatus]=useState({})
  const [reject,setReject]=useState(false)
  const [options,setOptions]=useState([])
  const [role,setRole]=useState("")
  const [pdfTable,setPdfTable]=useState([])
  const [headerData,setHeaderData]=useState({})
  const userId= localStorage.getItem("id")
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
const [pdfData,setPdfData]=useState()
  const [data, setData] = useState({
    "Report": {
        "approvedStatus": {
            "serviceTechnician": {
                "isApproved": true
            },
            "manager": {
                "isApproved": false
            },
            "others": [{
                "isApproved": false
            }],
            
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
    getCategories()
    reportpdf(props.match.params.id)
    let id = props.match.params.id;
    const configs = {
        headers: { Authorization: `Bearer ${localStorage.getItem("tokens")}` },
      };
    
    axios.get(`https://warranty.lsin.panasonic.com/api/report/${id}/summary`,configs)
    .then(res =>{
        return(
            setData(res.data.data),
            setReport(res.data.data.report),
            setApprovedStatus(res.data.data.report.approvedStatus),

            setSummary(res.data.data.items),
            setCheck(true)
            
        )
    } )
    .catch(()=>setData(null))

  }, [])



  const openModel=(id)=>{
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
  const data={
    "approvalRole": role
} 
axios.put(`https://Warranty.lsin.panasonic.com/api/report/approve/${id}`,data,configs).then(res=>{
  // console.log(res.data.msg)
})
setCenteredModal(!centeredModal)
  }
  
  const handleReject=(id)=>{
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
  const data={
    "approvalRole": role
} 
axios.put(`https://Warranty.lsin.panasonic.com/api/report/reject/${id}`,data,configs).then(res=>{
  // console.log(res.data.msg)
})
setReject(!reject)
  }


  const handleApprove=async(id)=>{
    // setCenteredModal(true)
    const configs = {
        headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
    }
  //   const data={
  //     "approvalRole": role
  // }
  var notifyRole;
  if(category.role==="Manager"){
    notifyRole="manager"
  }
 else if(category.role==="servicetechnician"){
  notifyRole="serviceTechnician"
  }else{
    notifyRole="others"
  }
  const notifyData={
    "id":id,
    userId:category.value,
    role:notifyRole,
  }
    // axios.get(`https://Warranty.lsin.panasonic.com/api/product`,configs).then(res=>setPageCount(res.data.msg.length/10+1))
    // axios.put(`https://Warranty.lsin.panasonic.com/api/report/approve/${id}`,data,configs).then(res=>{
    //     // console.log(res.data.msg)
    //     setSuccess(true)
    //   })
      axios.post(`https://Warranty.lsin.panasonic.com/api/report/notify`,notifyData,configs).then(res=>{
        // console.log(res.data.msg)
        setSuccess(true)
        setCenteredModal(false)
      })
  }
  const getCategories=async()=>{
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.get('https://warranty.lsin.panasonic.com/api/user',configs).then(res=>{
        console.log(res.data)
        var data = res.data.msg.map((a) => {
            return({
                value: a.id,
            label: a.name,
            role:a.userType
            })
          
          });
          setOptions(data);    })
  }

  const reportpdf=async(id)=>{
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.get(`https://warranty.lsin.panasonic.com/api/report/report-pdf/${id}`,configs).then(res=>{
        console.log(res.data.msg)
        var data = res.data.msg.map((a) => {
          return({
              summary:a.reportId.summary,
              unit:a.reportId.units,
              itemCode:a.reportId.itemCode,
              description:a.reportId.products.description,

          })
        
        });
        const summary = res.data.msg.map(a=>a.reportId.summary)
        let fakeSum = 0;
let warrantyClaimedSum = 0;
let outOfWarrantySum = 0;
let itemInWarrantySum = 0;
summary.forEach(item => {
  fakeSum += item.fake ? item.fake : 0;
  warrantyClaimedSum += item.warrenty_already_claimed ? item.warrenty_already_claimed : 0;
  outOfWarrantySum += item.out_of_warenty ? item.out_of_warenty : 0;
  itemInWarrantySum += item.item_in_warenty ? item.item_in_warenty : 0;
});
var totaldata={fakeSum,
  warrantyClaimedSum,outOfWarrantySum,itemInWarrantySum
}
setTotalData(totaldata)


        var headerDatas={
          customerCode:res.data.msg[0].reportId.partners.partnerId,
          partnerData:res.data.msg[0].reportId.partners,
          region:res.data.msg[0].reportId.partners.pincode,
          inspectionDate:res.data.msg[0].reportId.createdAt,
          inspectionEndDate:res.data.msg[0].reportId.updatedAt,
          inspectionEndDate:res.data.msg[0].reportId.updatedAt,
          reportId:res.data.msg[0].reportId.reportId,
        }
        setPdfTable(data)
        console.log(headerDatas)
        setHeaderData(headerDatas)
        console.log(data)
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


useEffect(() => {
  if(check){
    var _id = userId; // the _id value you want to check

// check in serviceTechnician object
if (report?.approvedStatus?.serviceTechnician?.assignedTo?.hasOwnProperty('_id') && report?.approvedStatus?.serviceTechnician?.assignedTo._id === _id) {
  console.log("The _id value exists in the serviceTechnician object.");
  // alert("found")
  setRole("serviceTechnician")
  setShowButton(true)
}

// check in manager object
if (report?.approvedStatus?.manager?.assignedTo?.hasOwnProperty('_id') && report?.approvedStatus?.manager?.assignedTo?._id === _id) {
  console.log("The _id value exists in the manager object.");
  // alert("found")
  setShowButton(true)
  setRole("manager")

}

// check in others array
if(report?.approvedStatus?.others.length){
  // if (report.approvedStatus.others[i].assignedTo?.hasOwnProperty('_id') && report.approvedStatus.others[i].assignedTo?._id === _id) {
  //   setRole("others")}
  setRole("others")
  var otherCheck= report.approvedStatus.others.filter(a=>a.assignedTo._id===_id)
  if(otherCheck.length){
    setShowButton(true)
  }

  for (var i = 0; i < report?.approvedStatus?.others.length; i++) {
  if (report.approvedStatus.others[i].assignedTo?.hasOwnProperty('_id') && report.approvedStatus.others[i].assignedTo?._id === _id) {

    console.log("The _id value exists in the others array at index " + i + ".");
    // alert("found")

  }
}
}

  }
  
}, [check])


  
  
 
  return data !== null ? (
    <>
     <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Choose User</ModalHeader>
          <ModalBody>
          <Form >
        {/* <FormGroup>

<Label className='form-label'>Select Bussiness Unit</Label>
      <Select
        theme={selectThemeColors}
        className='react-select'
        classNamePrefix='select'
        defaultValue={colourOptions[1]}
        value={bu}
        name='clear'
        options={colourOptions}
        onChange={e=>setBu(e)}
        isClearable
      />

</FormGroup> */}
      <FormGroup>
      <Label className='form-label'>Select User</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={options[1]}
              name='clear'
              value={category}
              options={options}
              onChange={e=>setCategory(e)}
              isClearable
            />
      </FormGroup>
     
      

      <Button onClick={()=>handleApprove(data?.report?.reportColId)} color='primary'>Submit</Button>
    </Form>
          </ModalBody>
         
        </Modal>
    <Modal isOpen={successOpen} toggle={() => setSuccess(!successOpen)} className='modal-dialog-centered'>
          <ModalHeader >Report Successfully Approved!</ModalHeader>
        
          <ModalFooter>
            <Button color='primary' onClick={() => setSuccess(!successOpen)}>
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>
        <Modal isOpen={reject} toggle={() => setReject(!reject)} className='modal-dialog-centered'>
          <ModalHeader >Report Successfully Rejected!</ModalHeader>
        
          <ModalFooter>
            <Button color='primary' onClick={() => setReject(!reject)}>
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>
        <div >
    <Card style={{width:"1100px", padding:"20px"}}>
      <CardBody>
        <div  style={{display:"flex",justifyContent:"space-between",marginBottom:"20px"}}> {showButton? <Button onClick={(id)=>handleReject(data?.report?.reportColId)}>Reject</Button>:null}
      {showButton?   <Button onClick={(id)=>openModel(data?.report?.reportColId)} color='primary'>Approve</Button>:null}</div>
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
                {report?.approvedStatus?.serviceTechnician.approveState==="accepted"?      <ThumbsUp color='green'/>: <ThumbsUp  color="green"/>}
            </div>
            <div>
                <h5>
                Manager
                </h5> <br/>
                               {report?.approvedStatus?.manager.approveState==="accepted"?      <ThumbsUp color='green'/>: <ThumbsDown  color="red"/>}

            </div> 


            {/* <div>
                <h5>
                Business UnitSpoc
                </h5> <br/>
                               {report?.approvedStatus?.businessUnitSpoc.isApproved?      <ThumbsUp/>: <ThumbsDown  color="red"/>}

            </div>  <div>
                <h5>
                Warehouse Head
                </h5> <br/>
                               {report?.approvedStatus?.warehouseHead.isApproved?      <ThumbsUp color='green'/>: <ThumbsDown  color="red"/>}

            </div> */}
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
      

      </CardBody>
    </Card>
    <Card>
      <CardBody>
      <div style={{paddingTop:"14px"}}>
            <h4 style={{padding:"4px"}}>Others Approval</h4>
        <table className="assigntable">
                    <tr>
                      <th className="assigntd">Name</th>
                      <th className="assigntd">Email</th>
                      <th className="assigntd">Status</th>

                    </tr>
                    
                    {report?.approvedStatus?.others.map((a)=>{
                    return(
                         <tr>
                        <td className="assigntd">{a.assignedTo.name}</td>
                        <td className="assigntd">{a.assignedTo.email}</td>
                        <td className="assigntd">{a.approveState}</td>

                        </tr>
                    )

                    })}
                    </table>

                    
        </div>
      </CardBody>
    </Card>
    </div>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Report Summary</CardTitle>
      </CardHeader>
      <div className='react-dataTable'>
        {summary.length?
        <DataTable
          noHeader
          // pagination
          data={summary}
        //   expandableRows
          columns={columns}
          expandOnRowClicked
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          // paginationComponent={CustomPagination}
          paginationDefaultPage={currentPage + 1}
        //   expandableRowsComponent={ExpandableTable}
          // paginationRowsPerPageOptions={[10, 25, 50, 100]}
        /> :null}
      </div>
    </Card>
    <Card style={{padding:"12px"}}>
          <Reportpdf pdfTable={pdfTable}headerData={headerData}  totalData={totalData}approvedStatus={approvedStatus}/>
          </Card>
    </>
  ) : null
}
export default ViewReports
