// ** React Imports
import { useState,useEffect } from 'react'

// ** Table columns & Expandable Data
import ExpandableTable, { data, columns } from '../data'
import Select from 'react-select'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Row, Col, CardHeader, CardBody, Form, Label, Input ,FormGroup} from 'reactstrap'
import { selectThemeColors } from '@utils'
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { MoreVertical, Edit, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardTitle} from 'reactstrap'
import axios, { Axios } from 'axios'

const SubcategoryTable = () => {
  // ** State
  const [data,setData]=useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [centeredModal, setCenteredModal] = useState(false)
  const [bu,setBu]=useState('')
  const [category,setCategory]=useState("")
  const [subCategory,setSubCategory]=useState("")
  const [id,setId]=useState('')
  const [options,setOptions]=useState([])
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
  const colourOptions = [
    { value: 'LIGHTING', label: 'LIGHTING' },
    // { value: 'blue', label: 'Blue' },
    // { value: 'LIGHTING', label: 'LIGHTING' },
    // { value: 'red', label: 'Red' },
    // { value: 'LIGHTING', label: 'LIGHTING' }
  ]

  const getCategories=async()=>{
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.get('https://warranty.lsin.panasonic.com/api/category',configs).then(res=>{
        console.log(res.data)
        var data = res.data.map((a) => {
            return({
                value: a.category,
            label: a.category
            })
          
          });
          setOptions(data);    })
  }
  const fetchSubcategory= async(key)=>{
    const baseUrls=    "https://Warranty.lsin.panasonic.com/api/category/subCategory/";
    // const baseUrl = "https://Warranty.lsin.panasonic.com/api/generator/?search=";
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.get(`${baseUrls}${key}`,configs).then(res=>{
       setData(res.data)
   
  })}

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
  name: 'Category',
  sortable: true,
  minWidth: '250px',
  selector: row => row.category
},
{
  name: 'Bussiness Unit',
  sortable: true,
  minWidth: '250px',
  selector: row => row.BU
},{
    name: 'Sub Categories',
    sortable: true,
    minWidth: '250px',
    selector: row => row.subCategory
  },
  {
    name: 'Actions',
    sortable: true,
    minWidth: '250px',
    cell:row=> 
      <UncontrolledDropdown >
      <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
        <MoreVertical size={15} />
      </DropdownToggle>
      <DropdownMenu className='ritesh'>
        <DropdownItem  onClick={e =>openeditModal(row) }>
          <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
        </DropdownItem>
        <DropdownItem  onClick={e => handleDelete(row)}>
          <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    

  },]
  const openeditModal=(row)=>{
    setCenteredModal(true)

    setBu({value:row.BU,label:row.BU})
    setCategory({value:row.category,label:row.category})
    setSubCategory(row.subCategory)
    setId(row._id)
    
  }
  const handleSubmit=(event)=>{
    event.preventDefault();

    var data={
    category:category.value,BU:bu.value,company:"Panasonic",subCategory:subCategory
    }
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.put(`https://Warranty.lsin.panasonic.com/api/category/subCategory/${id}`,data,configs).then(res=>{
      getCategories()
      setSuccess(true)

    setCenteredModal(false)
 
      console.log(res.data)
    })
  }
  const handleDelete=(row)=>{

  
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.delete(`https://Warranty.lsin.panasonic.com/api/category/subCategory/${row._id}`,configs).then(res=>{
      getCategories()

    setCenteredModal(false)
 
    setDeleted(true)

    })
  }
  
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
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Edit Subcategory</ModalHeader>
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
        onChange={e=>setBu(e)}
        isClearable
      />

</FormGroup>
      <FormGroup>
      <Label className='form-label'>Select Category</Label>
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
      <FormGroup>
        <Label for="subCategory"> Sub Category:</Label>
        <Input type="text" name="subCategory" id="subCategory" value={subCategory} onChange={(e)=>setSubCategory(e.target.value)} />
      </FormGroup>
      

      <Button color='primary' type="submit">Edit</Button>
    </Form>
          </ModalBody>
         
        </Modal>
      <CardHeader>
      <Col className='mb-1' md='3' sm='3'>
            <Label className='form-label'>Select Category</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={options[1]}
              name='clear'
              options={options}
              onChange={e=>fetchSubcategory(e.value)}
              isClearable
            />
          </Col>      </CardHeader>
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

export default SubcategoryTable
