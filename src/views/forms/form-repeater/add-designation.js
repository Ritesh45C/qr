// ** React Imports
import { useState,useEffect } from 'react'
import { selectThemeColors } from '@utils'
import Select from 'react-select'
import axios, { Axios } from 'axios'

// ** Icons Imports
import { X, Plus } from 'react-feather'

// ** Custom Components
import Repeater from '@components/repeater'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, Form, Label, Input, Button } from 'reactstrap'
import DataTableWithButtons from '../../tables/data-tables/basic/TableExpandable'

const AddDesignation = () => {
  const [designation,setDesignation]=useState('')
  const [user,setUser]=useState("");
  const [data,setData]=useState([
    { value: 'name', label: 'name' },
    
  ])

  // ** State
  const [count, setCount] = useState(1)
  useEffect(() => {
    getCategories()
   }, [])
   
 
   const getCategories=async()=>{
     axios.get('https://prod-api.xpiee.com/onboarding/get-users').then(res=>{
         console.log(res.data)
         setData(res.data)
         var colourOptions=res.data.map(a=>{
          return({
            value:a.name,
            label:a.name
          })
         })
         setData(colourOptions)
     })
   }


  const colourOptions = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
  ]

  const increaseCount = () => {
    var desdata={
      designation,
      user
    }
    axios.post('https://prod-api.xpiee.com/onboarding/designation',desdata).then(res=>[
      alert("Succesfully added Designation")
    ])
    setCount(count + 1)
  }

  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('form').remove()
  }

  return (
    <>
      <Card>
        <CardHeader>
          <h4 className='card-title'>Add Designation</h4>
        </CardHeader>

        <CardBody>
          <Repeater count={count}>
            {i => (
              <Form key={i}>
                <Row className='justify-content-between align-items-center'>
                  <Col md={4} className='mb-md-0 mb-1'>
                    <Label className='form-label' for={`item-name-${i}`}>
                      Designation
                    </Label>
                    <Input onChange={(e)=>setDesignation(e.target.value)} type='text' id={`item-name-${i}`} placeholder='Designation' />
                  </Col>
                  <Col md={4} className='mb-md-0 mb-1'>
                    <Label className='form-label' for={`cost-${i}`}>
                      Designation Reporting To
                    </Label>
                  
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={data[0]}
              options={data}
              onChange={(e)=>setUser(e.target.value)}
              isClearable={false}
            />
          
                  </Col>

                  <Col md={2}>
                    <Button color='danger' className='text-nowrap px-1' onClick={deleteForm} outline>
                      <X size={14} className='me-50' />
                      <span>Delete</span>
                    </Button>
                  </Col>
                  <Col sm={12}>
                    <hr />
                  </Col>
                </Row>
              </Form>
            )}
          </Repeater>
          <Button className='btn-icon' color='primary' onClick={increaseCount}>
            <Plus size={14} />
            <span className='align-middle ms-25'>Add New</span>
          </Button>
        </CardBody>

      </Card>
      <Row>
        <Col sm='12'>
          <DataTableWithButtons />
        </Col>
      </Row>

    </>
  )
}

export default AddDesignation
