// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

const AccountDetails = ({ stepper, type }) => {
  return (
    <Fragment>
      <h3 style={{ marginBottom: "20px" }}>
        Select your Gender
      </h3>
      <div class="container">
        <input type='radio' id='male' checked='checked' name='radio' />
        <label for='male'>Male</label>
        <input type='radio' id='female' name='radio' />
        <label for='female'>Female</label>
      </div>
      <br />
      <div className='content-header'>
        <h5 className='mb-10'>Enter These Details</h5>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`username-${type}`}>
              Your Full Name
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`} placeholder='johndoe' />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`email-${type}`}>
              Email
            </Label>
            <Input
              type='email'
              name={`email-${type}`}
              id={`email-${type}`}
              placeholder='john.doe@email.com'
              aria-label='john.doe'
            />
          </Col>
        </Row>
        <Row>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label' for={`password-${type}`}>
              Phone No.
            </Label>
            <Input type='number' id={`password-${type}`} />
          </div>

        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default AccountDetails
