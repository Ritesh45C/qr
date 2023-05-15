// ** React Imports
import { useState,useEffect } from 'react'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
// ** Table columns & Expandable Data
import ExpandableTable, { data, columns } from '../data'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Row, Col, Card, CardHeader, CardBody, Form, Label, Input ,FormGroup} from 'reactstrap'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown, Search } from 'react-feather'
import DataTable from 'react-data-table-component'
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
// ** Reactstrap Imports
import {  CardTitle} from 'reactstrap'
import axios, { Axios } from 'axios'

const ProductTable = () => {
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  const [centeredModal, setCenteredModal] = useState(false)
  const [successOpen,setSuccess]=useState(false)

  const [data,setData]=useState([])
  const [bu,setBu]=useState('')
  const [id,setId]=useState('')
  // ** Function to handle filter
  const handlePagination = page => {
    setCurrentPage(page.selected)
    getCategories(page.selected)

  }
  useEffect(() => {
   getCategories(0)
  }, [])
  const handleSearch=(value)=>{
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
  axios.get(`https://Warranty.lsin.panasonic.com/api/product?search=${value}`,configs).then(res=>{
    console.log(res.data.msg)
    setData(res.data.msg)
})
  }  

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
  const openeditModal=(row)=>{
    console.log(row)
    setCenteredModal(true)

    setId(row._id)
    
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
  const colourOptions = [
    { value: "true", label: "true" },
    { value: "false", label: "false" },
   
  ]
  const handleSubmit=(event)=>{
    event.preventDefault();

    var data={
    isActive:Boolean(bu.value),company:"Panasonic"
    }
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.put(`https://Warranty.lsin.panasonic.com/api/product/${id}`,data,configs).then(res=>{
      setSuccess(true)

      getCategories()

    setCenteredModal(false)
 
    setSuccess(true)
    })
  }
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
  }, {
    name: 'Actions',
    sortable: true,
    minWidth: '250px',
    cell:row=> 
      <UncontrolledDropdown>
      <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
        <MoreVertical size={15} />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem  onClick={e =>openeditModal(row) }>
          <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
        </DropdownItem>
        {/* <DropdownItem  onClick={e => handleDelete(row)}>
          <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
        </DropdownItem> */}
      </DropdownMenu>
    </UncontrolledDropdown>
    

  },]
  const tableData = {
    columns,
    data
  };
  return (
    <Card>
      <Modal isOpen={successOpen} toggle={() => setSuccess(!successOpen)} className='modal-dialog-centered'>
          <ModalHeader > Status Successfully Updated!</ModalHeader>
        
          <ModalFooter>
            <Button color='primary' onClick={() => setSuccess(!successOpen)}>
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>
      <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Set Status</ModalHeader>
          <ModalBody>
          <Form onSubmit={handleSubmit}>
        <FormGroup>
        

<Label className='form-label'>Is Active</Label>
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

</FormGroup>
      
      

      <Button color='primary' type="submit">Edit</Button>
    </Form>
          </ModalBody>
         
        </Modal>
      <CardHeader>
        <CardTitle tag='h4'>All Products</CardTitle>
      </CardHeader>
      <div className='react-dataTable'>
      <div style={{padding:"5px",width
          :"250px"}}> <Input type='text' onChange={(e)=>handleSearch(e.target.value)} placeholder='search...'/> </div>     
        {data.length?
           <div className='invoice-list-dataTable react-dataTable'>
           
          
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
        />

        </div> :null}
      </div>
    </Card>
  )
}

export default ProductTable
