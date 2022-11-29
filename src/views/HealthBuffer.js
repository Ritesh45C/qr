

import { useSkin } from '@hooks/useSkin'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, Label, Input, Button, Card } from 'reactstrap'
import '@styles/react/pages/page-authentication.scss'
import Pricefilter from './productPages/Pricefilter'
import { useHistory } from 'react-router-dom'
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import imageq from '../assets/images/illustration/Family Insurance Illustration.svg';
import MedicalInsurance from '../assets/images/illustration/medical-insurance.svg'
import Doctor from '../assets/images/illustration/doctor.svg'

import online from '../assets/images/illustration/Online.svg'
import Money from '../assets/images/illustration/Money.svg'
import Faq from './pages/faq'

const HealthBuffer = () => {
  const { skin } = useSkin()
  const history = useHistory()

  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  return (
    <>
      <div class="topContentBox landing_card">
        <h1 itemprop="name" id="critical-illness-insurance"> XPCOVER Health Buffer   </h1>
        <p>Under this exclusive product offering we are providing a combination of Wellness along with the buffer for your existing Health Insurance. <span class="extraText">Under this product offering you/your family are eligible for Free unlimited Tele-medication, Tele-consultation from reputed doctors of the country along with discounts of medicines and Lab tests.</span></p>
        <br />
      </div>
      <br />
      <div className=''>
        <Card className='landing_card'>
          <Row className='auth-inner m-0'>


            <Col className='d-none d-lg-flex  p-5' lg='8' sm='12' style={{ background: 'aliceblue' }}>
              <div className='w-100 d-lg-flex  justify-content-center '>
                <img className='img-fluid' style={{ height: "200px" }} src={"https://product-icon.s3.ap-south-1.amazonaws.com/product_name/health-buffer-220.svg"} alt='Login Cover' />
              </div>
              <div className='topContedfsntBox'>
                <div class="h1">Health Insurance Covering <strong>34 Critical Illnesses</strong> starts <strong>@ ₹373/<span>month*</span></strong></div>          </div>
              <br />

            </Col>

            <Col className='d-flex align-items-center auth-bg ' lg='4' sm='12' style={{ padding: '20px' }}>
              <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                <div class="heading-main"> <span>Get insured from the comfort of your home</span> No medicals required                              </div>
                <Pricefilter />
                <Col md={6} sm={12}>

                  <div className='demo-inline-spacing'>
                    <Button.Ripple onClick={() => {
                      history.push(`/tartan/super-top-up-proposal`)
                    }} color='primary' size='lg'>
                      Pay ₹  1249 For 1 Year
                    </Button.Ripple>

                  </div>
                </Col>
              </Col>
            </Col>
          </Row>
        </Card>
      </div>
      <div className="container-fluid" style={{ marginTop: '70px', }}>




        <section className="cf-section cf-section--15 mt-100">
          <div className="container">


            <div
              className="row comparequotes animate"
            >
              <div className="col-md-6">
                <ScrollAnimation
                  animateOnce={true}
                  duration={0.4}
                  animateIn="slide-in-left"
                >
                  <div className="cf-section__label space_mb_8">SIMPLE</div>
                  <h3 className="cf-section__heading space_mb_16 line-height-reset">
                    Easiest way to get insured
                  </h3>
                  <div className="cf-section__info space_mb_24">
                    {" "}
                    Under this exclusive product offering we are providing a combination of Wellness along with the buffer for your existing Health Insurance.

                    Under this product offering you/your family are eligible for Free unlimited Tele-medication, Tele-consultation from reputed doctors of the country along with discounts of medicines and Lab tests.

                    This comes along with a Super Top up health insurance plan which covers the excess of your existing medical insurance policy.

                  </div>
                  <ul className="lcra__features-list">
                    <li>
                      Plans explained in plain English. No research required.
                    </li>
                    <li>The process is completely online.</li>
                    <li>Unbiased advice. Exceptional Experience.</li>
                  </ul>
                </ScrollAnimation>
              </div>

              <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center' }}>
                <ScrollAnimation
                  animateOnce={true}
                  duration={0.6}
                  animateIn="slide-in-right"
                >
                  <img
                    alt=""
                    className="lcra__img img-responsive"
                    loading="lazy"
                    style={{ width: '250px' }}
                    src={imageq}
                  />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
        <div>
          <section className="cf-section cf-section--26 cf-section--alter bg-blue">
            <div className="container">
              <div
                className="row instantpayment animate"
              >
                <div className="col-md-6">
                  <ScrollAnimation
                    animateOnce={true}
                    duration={0.4}
                    animateIn="slide-in-left"
                  >
                    <img
                      alt=""
                      className="rcla__img img-responsive"
                      loading="lazy"
                      style={{ width: '350px' }}

                      src={MedicalInsurance} />
                  </ScrollAnimation>
                </div>
                <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center' }}>
                  <ScrollAnimation
                    animateOnce={true}
                    duration={0.6}
                    animateIn="slide-in-right"
                  >
                    <div className="cf-section__label space_mb_8">FAST</div>
                    <h3 className="cf-section__heading space_mb_16 line-height-reset">
                      Teleconsultation (voice + video)                     </h3>
                    <div className="cf-section__info space_mb_24">
                      {" "}
                      XPCOVER Health Buffer service can be availed through telephone and video consultation through our mobile app - vHealth by Aetna (available on Android and iOS). This service can be used Unlimited Number of times by the end customer.
                    </div>
                    <ul className="rcla__features-list">
                      <li>Dietician - Nutritionist Support [Diet Plan Management].</li>
                      <li>
                        Medical Second Opinion.
                      </li>
                      <li>
                        Stress Management.                      </li>
                    </ul>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section className="cf-section cf-section--30">
            <div className="container">
              <div className="row claimsassistance animate">
                <div
                  style={{ display: "flex", alignItems: "center", margin: "44px" }}
                  className="row instantpayment animate"
                >
                  <div className="col-md-6">
                    <ScrollAnimation
                      animateOnce={true}
                      duration={0.8}
                      animateIn="fade-in"
                    >
                      <h3 className="cf-section__heading space_mb_16 line-height-reset">
                        Network Discount Dentists
                      </h3>
                      <div className="cf-section__info space_mb_32">
                        <ul className="rcla__features-list">
                          <li>Up to 100% off on all consultations at All IHO empanelled Dentists..</li>
                          <li>
                            Up to 50% off on any basic treatment like cleaning, scaling, x-rays.
                          </li>
                          <li>
                            Up to 30% off on dental treatments.                   </li>
                        </ul>
                      </div>

                      <h3 className="cf-section__heading space_mb_16 line-height-reset">
                        Network Discount Medical Center/Clinics
                      </h3>
                      <div className="cf-section__info space_mb_32">
                        <ul className="rcla__features-list">
                          <li>Up to 50% off on all Consultations.</li>
                          <li>
                            Up to 20% off on all treatments and procedures.
                          </li>

                        </ul>
                      </div>

                    </ScrollAnimation>
                  </div>
                  <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center' }}>
                    <ScrollAnimation
                      animateOnce={true}
                      duration={0.6}
                      animateIn="slide-in-right"

                    >
                      <img
                        alt=""
                        className="rcla__img img-responsive"
                        loading="lazy"
                        style={{ width: '226px' }}
                        src={Money}
                      />
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section className="cf-section cf-section--26 cf-section--alter">
            <div className="container">
              <div
                style={{ display: "flex", margin: "44px", }}
                className="row instantpayment animate datsec"
              >
                <div className="col-md-6">
                  <ScrollAnimation
                    animateOnce={true}
                    duration={0.6}
                    animateIn="slide-in-right"
                  >
                    <img
                      alt=""
                      className="rcla__img img-responsive"
                      loading="lazy"
                      style={{ width: '289px' }}
                      src="https://assets.coverfox.com/static/img/illustrates/data_security_illustrations.ccc8bcc5fc11.png"
                    />
                  </ScrollAnimation>
                </div>
                <div className="col-md-6" >
                  <ScrollAnimation
                    animateOnce={true}
                    duration={0.4}
                    animateIn="slide-in-left"
                  >
                    <div className="cf-section__label space_mb_8">SECURE</div>
                    <h3 className="cf-section__heading space_mb_16 line-height-reset">
                      Data Security <br /> Guaranteed
                    </h3>
                    <div className="cf-section__info space_mb_24">
                      Your data is private and stored in govt. approved data
                      centers. We don't sell it to anyone, nor will we ever share
                      it without your consent.{" "}
                    </div>
                    <ul className="rcla__features-list">
                      <li>Data stored in ISO certified data centers only.</li>
                      <li>
                        Our data centers are PCI-DSS, HIPAA/HITECH compliant.
                      </li>
                    </ul>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section className="nap-and-exclaim space_mb_24 space_mt_60">
            <div className="container">


              <div style={{ display: "flex", margin: "44px" }} className="row benifts">

                <div className="col-md-6">
                  <ScrollAnimation
                    animateOnce={true}
                    duration={1.5}
                    animateIn="fade-in"
                  >
                    <div className="saf-content saf-content--yellow">
                      <div className="saf-content__right">
                        <div className="saf-fb healthBenifits">

                          <div className="saf-fb__features ">

                            <ul className="saf-fb__features__list">
                              <div className="cf-section__label text-center">Benefits of Super top up :
                              </div>
                              <li class="c7 li-bullet-0"><span class="c12">Pay Deductibles only once.</span></li>
                              <li class="c7 li-bullet-0"><span class="c12">Higher sum insured.</span></li>
                              <li class="c7 li-bullet-0"><span class="c12">Treated at network hospitals.</span></li>
                              <li class="c7 li-bullet-0"><span class="c1">Pre &amp; post Hospitalization.</span></li>
                              <li class="c7 li-bullet-0"><span class="c1">ICU room charges.</span></li>
                              <li class="c7 li-bullet-0"><span class="c1">Ambulance charges. </span></li>
                              <li class="c7 li-bullet-0"><span class="c1">Total Hospitalization Bill.</span></li>
                              <li class="c7 li-bullet-0"><span class="c13">Tax saving.</span></li>
                            </ul>
                          </div>
                          <div className="saf-fb__heading">
                            <div className="saf-fb__heading__icon">
                              <img
                                alt="Nominee Assistance Program"
                                loading="lazy"
                                style={{ width: '250px' }}
                                src={online}
                              />
                            </div>

                          </div>
                        </div>
                        <div className="saf-content__note">
                          Available for everyone who buys Life Insurance from
                          XPcover.
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section className="cf-section cf-section--alter cf-section--20">
            <div className="container">
              <div className="cf-section__label text-center">FAQ's</div>
              <div className="cf-section__heading cf-section__heading--20 text-center">
                {" "}
                Ask us anything, we’d love to answer!
              </div>
              <Faq />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default HealthBuffer
