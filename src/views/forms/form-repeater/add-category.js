// ** React Imports
import { useState } from 'react'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

// ** Icons Imports
import { X, Plus } from 'react-feather'

// ** Custom Components
import Repeater from '@components/repeater'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, Form, Label, Input ,FormGroup} from 'reactstrap'
import DataTableWithButtons from '../../tables/data-tables/basic/TableExpandable'
import CateogryTable from '../../tables/data-tables/basic/categorytable'
import axios from 'axios'

const AddDesignation = () => {
  // ** State
  const [count, setCount] = useState(1)
  const [bu,setBu]=useState('')
  const [category,setCategory]=useState("")
  const [successOpen,setSuccess]=useState(false)

  const increaseCount = () => {
    setCount(count + 1)
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
    category,BU:bu,company:"Panasonic"
    }
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.post("https://Warranty.lsin.panasonic.com/api/category/",data,configs).then(res=>{
     setSuccess(true)
      console.log(res.data)
    })
  }
  
  
  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('form').remove()
  }
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }
  return (
    <>
     <Modal isOpen={successOpen} toggle={() => setSuccess(!successOpen)} className='modal-dialog-centered'>
          <ModalHeader >Cateogry Successfully Created!</ModalHeader>
        
          <ModalFooter>
            <Button color='primary' onClick={() => setSuccess(!successOpen)}>
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>
      <Card>
        <CardHeader>
          <h4 className='card-title'>Add Category</h4>
        </CardHeader>

        <CardBody>
        <Form onSubmit={handleSubmit}>
        <FormGroup>

<Label className='form-label'>Select Bussiness Unit</Label>
      <Select
        theme={selectThemeColors}
        className='react-select'
        classNamePrefix='select'
        defaultValue={colourOptions[1]}
        name='clear'
        options={colourOptions}
        onChange={e=>setBu(e.value)}
        isClearable
      />

</FormGroup>
      <FormGroup>
        <Label for="partnerCategory">Create Category:</Label>
        <Input type="text" name="partnerCategory" id="partnerCategory" onChange={(e)=>setCategory(e.target.value)} />
      </FormGroup>
      

      <Button color='primary' type="submit">Create</Button>
    </Form>
         
        </CardBody>

      </Card>
      <Row>
        <Col sm='12'>
          <CateogryTable />
        </Col>
      </Row>

    </>
  )
}

export default AddDesignation
