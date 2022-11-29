// ** React Imports
import { useRef, useState } from 'react'
import { Row, Col, CardTitle, CardText, Form, Label, Input, Button, Card } from 'reactstrap'
import Doctor from '../assets/images/illustration/doctor.svg'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import Address from './steps/Address'
import SocialLinks from './steps/SocialLinks'
import PersonalInfo from './steps/PersonalInfo'
import AccountDetails from './steps/AccountDetails'

// ** Icons Imports
import { FileText, User, MapPin, Link } from 'react-feather'

const HealthForm = () => {
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'account-details',
      title: 'Account Details',
      subtitle: 'Enter Your Account Details.',
      icon: <FileText size={18} />,
      content: <AccountDetails stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'personal-info',
      title: 'Personal Info',
      subtitle: 'Add Personal Info',
      icon: <User size={18} />,
      content: <PersonalInfo stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'step-address',
      title: 'Address',
      subtitle: 'Add Address',
      icon: <MapPin size={18} />,
      content: <Address stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'social-links',
      title: 'Social Links',
      subtitle: 'Add Social Links',
      icon: <Link size={18} />,
      content: <SocialLinks stepper={stepper} type='modern-vertical' />
    }
  ]

  return (
    <>
      <div class="topContentBox landing_card">
        <h1 itemprop="name" id="critical-illness-insurance"> XPCOVER Health Buffer   </h1>
        <p>Health insurance is a contract where an insurance company provides medical coverage to the insured for a premium amount. <span class="extraText">It covers medical expenses incurred on hospitalization, surgeries, day care procedures, etc.  A health insurance policy either reimburses the medical costs or offers cashless treatment.</span></p>

        <br />
      </div>
      <br />
      <div className='modern-vertical-wizard'>
        {/* <Card className='landing_card'> */}
        <Row className='auth-inner m-0'>


          <Col className='d-none d-lg-flex  p-5' lg='8' sm='12' style={{ background: 'aliceblue' }}>
            <div className='w-100 d-lg-flex  justify-content-center '>
              <img className='img-fluid' style={{ height: "200px" }} src={Doctor} alt='Login Cover' />
            </div>
            <div className='topContedfsntBox'>
              <div class="h1">Health Insurance Covering <strong>34 Critical Illnesses</strong> starts <strong>@ ₹373/<span>month*</span></strong></div>          </div>
            <br />

          </Col>
          <Col className='d-flex align-items-center auth-bg ' lg='4' sm='12' style={{ padding: '20px' }}>
            <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
              <div class="heading-main"> <span>Get insured from the comfort of your home</span> No medicals required                              </div>
              <Wizard
                type='modern-vertical'
                ref={ref}
                steps={steps}
                options={{
                  linear: false
                }}
                instance={el => setStepper(el)}
              />
            </Col>
          </Col>
        </Row>
        {/* </Card> */}
      </div >
    </>
  )
}

export default HealthForm
