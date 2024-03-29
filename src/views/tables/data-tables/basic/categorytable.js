// ** React Imports
import { useState,useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Row, Col, Card, CardHeader, CardBody, Form, Label, Input ,FormGroup} from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
// ** Table columns & Expandable Data
import ExpandableTable, { data, columns } from '../data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { MoreVertical, Edit, Trash } from 'react-feather'

// ** Reactstrap Imports
import {   CardTitle } from 'reactstrap'
import axios, { Axios } from 'axios'

const CateogryTable = () => {
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  const [centeredModal, setCenteredModal] = useState(false)
  const [bu,setBu]=useState('')
  const [category,setCategory]=useState("")
  const [data,setData]=useState([])
  const [id,setId]=useState('')
  const [successOpen,setSuccess]=useState(false)
  const [deleted,setDeleted]=useState(false)
  const [updated,setUpdated]=useState(false)


  // ** Function to handle filter
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }
  useEffect(() => {
   getCategories()
  }, [])
  

  const getCategories=async()=>{
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.get('https://warranty.lsin.panasonic.com/api/category',configs).then(res=>{
        console.log(res.data)
        setData(res.data)
    })
  }
  const colourOptions = [
    { value: 'LIGHTING', label: 'LIGHTING' },
    // { value: 'blue', label: 'Blue' },
    // { value: 'LIGHTING', label: 'LIGHTING' },
    // { value: 'red', label: 'Red' },
    // { value: 'LIGHTING', label: 'LIGHTING' }
  ]
  const handleSubmit=(event)=>{
    event.preventDefault();

    var data={
    category,BU:bu.value,company:"Panasonic"
    }
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.put(`https://Warranty.lsin.panasonic.com/api/category/${id}`,data,configs).then(res=>{
      setSuccess(true)

      getCategories()

    setCenteredModal(false)
 
    setSuccess(true)
    })
  }
  const handleDelete=(row)=>{

  
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.delete(`https://Warranty.lsin.panasonic.com/api/category/${row._id}`,configs).then(res=>{
      getCategories()

    setCenteredModal(false)
 
  setDeleted(true)
    })
  }
  const groupByKey = (list, key) =>
  list.reduce(
    (hash, obj) => ({
      ...hash,
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    }),
    {}
  );

  
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
  const openeditModal=(row)=>{
    setCenteredModal(true)

    setBu({value:row.businessunit,label:row.businessunit})
    setCategory(row.category)
    setId(row._id)
    
  }
 var columns= [{
    name: 'Categories',
    sortable: true,
    minWidth: '250px',
    selector: row => row.category
  },
  {
    name: 'Bussiness Unit',
    sortable: true,
    minWidth: '250px',
    selector: row => row.businessunit
  },
  {
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
        <DropdownItem  onClick={e => handleDelete(row)}>
          <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    

  },
]

  return (
    <Card>
      <Modal isOpen={successOpen} toggle={() => setSuccess(!successOpen)} className='modal-dialog-centered'>
          <ModalHeader >Cateogry Successfully Updated!</ModalHeader>
        
          <ModalFooter>
            <Button color='primary' onClick={() => setSuccess(!successOpen)}>
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>
        <Modal isOpen={deleted} toggle={() => setDeleted(!deleted)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setDeleted(!deleted)}>Cateogry Successfully Deleted!</ModalHeader>
        
          <ModalFooter>
            <Button color='primary' onClick={() => setDeleted(!deleted)}>
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>
        <Modal isOpen={updated} toggle={() => setUpdated(!updated)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setUpdated(!successOpen)}>Cateogry Successfully Updated!</ModalHeader>
        
          <ModalFooter>
            <Button color='primary' onClick={() => setUpdated(!successOpen)}>
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>
       <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Edit Category</ModalHeader>
          <ModalBody>
          <Form onSubmit={handleSubmit}>
        <FormGroup>
        

<Label className='form-label'>Select Bussiness Unit</Label>
      <Select
        theme={selectThemeColors}
        className='react-select'
        classNamePrefix='select'
        defaultValue={colourOptions[1]}
        value={bu}
        name='clear'
        options={colourOptions}
        onChange={e=>setBu(e.value)}
        isClearable
      />

</FormGroup>
      <FormGroup>
        <Label for="partnerCategory">Create Category:</Label>
        <Input type="text" name="partnerCategory" id="partnerCategory" value={category} onChange={(e)=>setCategory(e.target.value)} />
      </FormGroup>
      

      <Button color='primary' type="submit">Edit</Button>
    </Form>
          </ModalBody>
         
        </Modal>
      <CardHeader>
        <CardTitle tag='h4'>Categories Table</CardTitle>
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
