// ** React Imports
import { useState } from 'react'

// ** Icons Imports
import { X, Plus } from 'react-feather'

// ** Custom Components
import Repeater from '@components/repeater'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, Form, Label, Input, Button } from 'reactstrap'
import DataTableWithButtons from '../../tables/data-tables/basic/TableExpandable'

const AddEmployee = () => {
  // ** State
  const [count, setCount] = useState(1)

  const increaseCount = () => {
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
          <h4 className='card-title'>Add Employee</h4>
        </CardHeader>

        <CardBody>
          <Repeater count={count}>
            {i => (
              <Form key={i}>
                <Row className='justify-content-between align-items-center'>
                  <Col md={2} className='mb-md-0 mb-1'>
                    <Label className='form-label' for={`item-name-${i}`}>
                      First Name
                    </Label>
                    <Input type='text' id={`item-name-${i}`} placeholder='First Name' />
                  </Col>
                  <Col md={2} className='mb-md-0 mb-1'>
                    <Label className='form-label' for={`cost-${i}`}>
                      Last Name
                    </Label>
                    <Input type='number' id={`cost-${i}`} placeholder='Last Name' />
                  </Col>
                  <Col md={2} className='mb-md-0 mb-1'>
                    <Label className='form-label' for={`quantity-${i}`}>
                      Phone No
                    </Label>
                    <Input type='number' id={`quantity-${i}`} placeholder='1' />
                  </Col>
                  <Col md={2} className='mb-md-0 mb-1'>
                    <Label className='form-label' for={`price-${i}`}>
                      Email Id
                    </Label>
                    <Input

                      placeholder='45riteshyadav@gmail.com'
                      id={`price-${i}`}
                      className=''
                    />
                  </Col>
                  <Col md={2} className='mb-md-0 mb-1'>
                    <Label className='form-label' for={`price-${i}`}>
                      Employee Id
                    </Label>
                    <Input
                      placeholder='324'
                      id={`price-${i}`}
                      className=''
                      type="text"
                    />
                  </Col>
                  <Col md={2} className='mb-md-0 mb-1'>
                    <Label className='form-label' for={`price-${i}`}>
                      Reporting To
                    </Label>
                    <Input
                      placeholder=''
                      id={`price-${i}`}
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
          <DataTableWithButtons head="Employees" />
        </Col>
      </Row>
    </>
  )
}

export default AddEmployee
