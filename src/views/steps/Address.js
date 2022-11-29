// ** React Imports
import { Fragment } from 'react'
import { Badge } from 'reactstrap'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

const Address = ({ stepper, type }) => {
  return (
    <Fragment>
      <h3 style={{ marginBottom: "20px" }}>
        Where do you live?
      </h3>
      <h4>Select your city.</h4>

      <br />
      <br />
      {/* <div className='content-header'>
        <h5 className='mb-0'>Where Do you live?</h5>
        <h4>Select your city.</h4>
      </div> */}
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`address-${type}`}>
              Enter City or Pincode
            </Label>
            <Input
              type='text'
              id={`address-${type}`}
              name={`address-${type}`}
              placeholder='98  Borough bridge Road, Birmingham'
            />
          </Col>

        </Row>
        <Row>

        </Row>
        <br />
        <br />

        <div>
          <Badge color='secondary' className='badge-glow'>
            Delhi
          </Badge>
          <Badge color='secondary' className='badge-glow'>
            Benglaru
          </Badge>
          <Badge color='secondary' className='badge-glow'>
            Pune
          </Badge>
          <Badge color='secondary' className='badge-glow'>
            Mumbai
          </Badge>
          <Badge color='secondary' className='badge-glow'>
            Hyderabad
          </Badge>
          <Badge color='secondary' className='badge-glow'>
            Thane
          </Badge>
          <Badge color='secondary' className='badge-glow'>
            Gurgaon
          </Badge>
          <Badge color='secondary' className='badge-glow'>
            Ghaziabad
          </Badge>
          <Badge color='secondary' className='badge-glow'>
            Lucknow
          </Badge>
          <Badge color='secondary' className='badge-glow'>
            Faridabad
          </Badge>
        </div>
        <br />
        <br />
        <br />
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
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

export default Address
