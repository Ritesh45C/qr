import React from 'react';
import { Card, CardHeader, CardTitle, CardBody, Label, Input, FormText, Row, Col, Button } from 'reactstrap'

const Proposal = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Personal Details</CardTitle>
        </CardHeader>

        <CardBody>
          <Row>
            <Col className='mb-1' xl='4' md='6' sm='12'>
              <Label className='form-label' for='basicInput'>
                First Name
              </Label>
              <Input type='email' id='basicInput' placeholder='Enter First Name' />
            </Col>
            <Col className='mb-1' xl='4' md='6' sm='12'>
              <Label className='form-label' for='basicInput'>
                Last Name
              </Label>
              <Input type='email' id='basicInput' placeholder='Enter Last Name' />
            </Col>  <Col className='mb-1' xl='4' md='6' sm='12'>
              <Label className='form-label' for='basicInput'>
                Email
              </Label>
              <Input type='email' id='basicInput' placeholder='Enter Email' />
            </Col>  <Col className='mb-1' xl='4' md='6' sm='12'>
              <Label className='form-label' for='basicInput'>
                Date Of Birth
              </Label>
              <Input type='email' id='basicInput' placeholder='Enter Date Of birth' />
            </Col>  <Col className='mb-1' xl='4' md='6' sm='12'>
              <Label className='form-label' for='basicInput'>
                Mobile No
              </Label>
              <Input type='email' id='basicInput' placeholder='Enter Mobile No' />
            </Col>  <Col className='mb-1' xl='4' md='6' sm='12'>
              <Label className='form-label' for='basicInput'>
                Gender
              </Label>
              <Input type='email' id='basicInput' placeholder='Enter Gender' />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Nominee Details</CardTitle>
        </CardHeader>

        <CardBody>
          <Row>
            <Col className='mb-1' xl='4' md='6' sm='12'>
              <Label className='form-label' for='basicInput'>
                Nominee Name
              </Label>
              <Input type='email' id='basicInput' placeholder='Enter Nominee Name' />
            </Col>
            <Col className='mb-1' xl='4' md='6' sm='12'>
              <Label className='form-label' for='basicInput'>
                Age
              </Label>
              <Input type='email' id='basicInput' placeholder='Enter Last Name' />
            </Col>  <Col className='mb-1' xl='4' md='6' sm='12'>
              <Label className='form-label' for='basicInput'>
                Relationship
              </Label>
              <Input type='email' id='basicInput' placeholder='Relationship' />
            </Col>  <Col className='mb-1' xl='4' md='6' sm='12'>
              <Label className='form-label' for='basicInput'>
                Pincode
              </Label>
              <Input type='email' id='basicInput' placeholder='Enter Pincode' />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <div className='form-check form-check-inline'>
        <Input type='checkbox' defaultChecked id='basic-cb-checked' />
        <Label for='basic-cb-checked' className='form-check-label'>
          I hereby declare that all the covered members are in good health, don’t suffer from any of these illnesses / diseases, and have not been hospitalized for more 10 days for any re-lapsing illness.
        </Label>
      </div>
      <div style={{ display: 'flex' }}>
        <Col md={6} sm={12}>

          <div className='demo-inline-spacing'>
            <Button.Ripple color='success' size='lg'>
              Save Details
            </Button.Ripple>

          </div>
        </Col>
        <Col md={6} sm={12}>

          <div className='demo-inline-spacing'>
            <Button.Ripple color='primary' size='lg'>
              Pay Now
            </Button.Ripple>

          </div>
        </Col>
      </div>

    </>

  )
};

export default Proposal;
