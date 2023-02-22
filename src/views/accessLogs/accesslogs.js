import React from 'react'
// ** React Imports
import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

// ** Icons Imports
import { X, Plus, ChevronDown } from 'react-feather'
import { selectThemeColors } from '@utils'
import axios, { Axios } from 'axios'
import { AsyncTypeahead, Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
// ** Custom Components
import Select from 'react-select'
// ** Custom Components
import Repeater from '@components/repeater'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, Form, Label, Input, Alert ,FormGroup} from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type }  from 'react-bootstrap-table2-editor';
import { useEffect } from 'react'
import DataTable from 'react-data-table-component'
import ReactPaginate from 'react-paginate'

const accesslogs = () => {
  const [currentPage, setCurrentPage] = useState(0)
    const [data, setData] = useState([]);
    const[Category, setCategory] = useState([]);
    const [subCategory,setSubcategory]=useState([])
    const [options, setOptions] = useState([]);
    useEffect(() => {
        getCategories();
      }, []);
    
      const getCategories = async () => {
        const configs = {
          headers: { Authorization: `Bearer ${localStorage.getItem("tokens")}` },
        };
        axios
          .get("https://warranty.lsin.panasonic.com/api/accessLog", configs)
          .then((res) => {
            console.log(res.data.msg.accessLog);
            
            setData(res.data.msg.accessLog.reverse());
          });
      };
      const handlePagination = page => {
        setCurrentPage(page.selected)
      }
// ** Custom Pagination
const CustomPagination = () => (
  <ReactPaginate
    previousLabel={''}
    nextLabel={''}
    forcePage={currentPage}
    onPageChange={page => handlePagination(page)}
    pageCount={100}
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
  name: 'Action',
  sortable: true,
  minWidth: '100px',
  selector: row => row.actions,
},
{
  name: 'userId',
  sortable: true,
  minWidth: '100px',
  selector: row => row.userId
},
{
  name: 'IP Address',
  sortable: true,
  minWidth: '100px',
  selector: row => row.ipAddress
},
{
  name: 'createdAt',
  sortable: true,
  minWidth: '250px',
  selector: "createdAt",
  cell: row => <span>{new Date(row.createdAt).toLocaleDateString()}</span>

},]

  return (
    <div><Card >
    
 <CardHeader>
   <h4 style={{marginLeft:"30px"}} className='card-title'>Access Logs</h4>
   <Row style={{width:"700px"}}>
   {/* <Col className='mb-1' md='3' sm='3'>
       <Label className='form-label'>Select User</Label>
       <Select
        styles={{width:"250px"}}
        theme={selectThemeColors}
        className="react-select"
        classNamePrefix="select"
        defaultValue={options[1]}
        name="clear"
        options={options}
        onChange={(e) => setCategory(e.value)}
        isClearable
       />
     </Col>
   */}
    
   
     </Row>
 </CardHeader>

 <CardBody  className='jobsTable'>
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
{/* <div>
<div className='customColumns'>
<div>Product Code</div>
<div style={{width:"350px"}} className='description'>Description</div>
<div style={{width:"200px"}} className='units'
>Units</div>

</div>
 {formData.map((item, index) => (
   <div key={index} style={{display:"flex"}}>
     <AsyncTypeahead
       id={`typeahead-${index}`}
       options={itemCodes}
       labelKey="label"
       onSearch={handleSearch}
       style={{marginRight:"20px"}}
       selected={item.selectedOption}
       onChange={(selected) => handleSelectChange(selected, index)}
     />
     <Input
       type="text"
       style={{width:"450px",marginRight:"20px"}}

       value={item.description}
     />
     <Input
       type="text"
       style={{width:"250px",marginRight:"20px"}}
       value={item.units}
       onChange={(event) => handleInputChange(event, index)}
     />
   </div>
 ))}
 <Button className='mt-2' color='primary' onClick={callApi}>Create Job</Button>
</div> */}
 </CardBody>
</Card></div>
  )
}

export default accesslogs