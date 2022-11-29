// ** React Imports
import { Fragment, useState } from 'react'
import '../../../app.css'
// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import { Card, CardBody, CardText, Badge, InputGroup, Input, InputGroupText, Label } from 'reactstrap'
import { HardDrive, User } from 'react-feather';

const PolicyDetails = () => {
  // ** States
  const [basicModal, setBasicModal] = useState(true)
  const [centeredModal, setCenteredModal] = useState(false)
  const [disabledModal, setDisabledModal] = useState(false)
  const [disabledAnimation, setDisabledAnimation] = useState(false)
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  // var data=[
  //   <li> Damage to your car (1 year)</li>
  //   <li> Theft of your car  </li>
  //   <li> Natural Calamities </li>
  //   <li>   Man-made hazards</li>
  //   <li>   Fire and Explosions</li>
  //   <li>Damage During Transit  </li>
  // ]

  return (
    <div className='demo-inline-spacing'>
      <div className='basic-modal'>

        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)} className="modal-lg">
          <div class="breakup-header"><div class="insurer-logo"><img src="https://static.pbcdn.in/car-cdn/rct/images/11.png?v=2" alt="https://static.pbcdn.in/car-cdn/rct/images/11.png?v=2" /></div><div class="idv">IDV <br />
            <span class="idv-amt"><span>₹2,57,040</span></span></div><div class="premium-display"><span>₹984</span></div></div>

          <Nav tabs fill>
            <NavItem>
              <NavLink
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
              >
                What's Covered
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === '2'}
                onClick={() => {
                  toggle('2')
                }}
              >
                What's Not Covered
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === '3'}
                onClick={() => {
                  toggle('3')
                }}
              >
                Premium Breakup

              </NavLink>
            </NavItem>

          </Nav>
          <TabContent className='py-50' activeTab={active}>
            <TabPane tabId='1'>
              <ul className='covers'>
                <Card
                >
                  <CardBody>
                    <div className='icon-wrapper'>
                      <HardDrive />
                    </div>
                    <p className='icon-name inclusion-list text-truncate mb-0 mt-1'>Damage to your car (1 year)</p>
                  </CardBody>
                </Card>
                <Card
                >
                  <CardBody>
                    <div className='icon-wrapper'>
                      <HardDrive />
                    </div>
                    <p className='icon-name inclusion-list text-truncate mb-0 mt-1'> Theft of your car</p>
                  </CardBody>
                </Card>
                <Card
                >
                  <CardBody>
                    <div className='icon-wrapper'>
                      <HardDrive />
                    </div>
                    <p className='icon-name inclusion-list text-truncate mb-0 mt-1'> Natural Calamities</p>
                  </CardBody>
                </Card>
                <Card
                >
                  <CardBody>
                    <div className='icon-wrapper'>
                      <User />
                    </div>
                    <p className='icon-name inclusion-list text-truncate mb-0 mt-1'> Man-made hazards</p>
                  </CardBody>
                </Card>
                <Card
                >
                  <CardBody>
                    <div className='icon-wrapper'>
                      <HardDrive />
                    </div>
                    <p className='icon-name inclusion-list text-truncate mb-0 mt-1'> Fire and Explosions</p>
                  </CardBody>
                </Card>
                <Card
                >
                  <CardBody>
                    <div className='icon-wrapper'>
                      <HardDrive />
                    </div>
                    <p className='icon-name inclusion-list text-truncate mb-0 mt-1'>Damage During Transit</p>
                  </CardBody>
                </Card>

              </ul>

              <div>
                <div class="claim-coverage"><h2>Claims Coverage </h2><div class="claim_msgs"><div class="content"><div class="icon"></div><p>For non-cashless claims, insurer will reimburse the claim amount <b>within 3 working days</b> of document/invoice submission.</p></div><div class="clearfix content"><span class="wrapper newinfo"><a class="know_more">Know more</a><div class="tooltip">Insurer will reimburse the claim amount within 3 working days of submitting the documents/original invoice. Call us on our claims toll free before intimation of claim to avail this service</div></span></div></div><div class="claim_msgs"><div class="content"><div class="icon"></div><p>Insurer offers <b>self-video claims:</b> self-upload video of car through Policybazaar App for quick survey of damages.</p></div><div class="clearfix content"><span class="wrapper newinfo"><a class="know_more">Know more</a><div class="tooltip">This plan offers quick and easy inspection at the time of claims using Policybazaar App. Simply self-upload a video of your car using the app for evaluation of damages and approval upto Rs. 50,000</div></span></div></div><div class="gray_box"><div class="left"><p>How much will the insurer pay if you make a claim?</p></div><div class="right"><a class="find_link">Find Out</a></div></div></div>
              </div>
            </TabPane>
            <TabPane tabId='2'>
              <ul>

                Damage to Third Party
                This plan covers damages to third party, i.e. other persons, vehicles or properties involved in the accident.
                <li>
                  Damage to Third Party
                </li>
                <li>
                  General Wear & Tear

                </li>
                <li>
                  Mechanical Failure

                </li>
                <li>
                  Tyre & Tube Damage

                </li>
                <li>
                  Consequential Damage

                </li>
                <li>
                  Cost of Consumables

                </li>
                <li>
                  Damage to Engine (Non-accidental)

                </li>

                <li>
                  Driving Without Valid License
                </li>
                <li>
                  Driving Under Influence

                </li>
                <li>
                  Commercial Usage

                </li>
                <li>
                  Damage Due To Racing

                </li>
                <li>
                  Deliberate Damage

                </li>
                <li>
                  Involvement In Riots

                </li>
                <li>
                  Damage due to war or invasion

                </li>

              </ul>
            </TabPane>
            <TabPane tabId='3'>
              <div className='checkout-options'>
                <Card>
                  <CardBody>
                    <div><div class="vehical-details-section"><div class="vehical-name">TATA TIAGO REVOTRON XT (1199 cc)</div>
                      <div class="other-vehical-details">
                        <span>Private Car</span><span>2021</span><span>Petrol</span><span>UP93</span></div></div><div class="premium-breakup">
                        <span>Premium Breakup</span><div><div class="heading"><h5>Base Cover</h5><ul><li class="hide"><span>Fire and theft Premium</span> <b>₹0</b></li><li class="show"><span>Basic Own Damage Premium</span> <b>₹8,202</b></li><li class="hide"><span>Third Party Cover Premium</span> <b>₹0</b></li><li class="hide"><span>Owner Driver Cover</span> <b>₹0</b></li><li class="hide"><span>PA cover for Unnamed Passengers</span><b>₹0</b></li><li class="hide"><span>Paid Driver Cover</span><b>₹0</b></li></ul></div><div class="heading"><h5>Discounts</h5><ul><li><span>No-Claim Bonus</span> <b>- ₹246</b></li><li class="hide"><span>Voluntary Deductible Discount</span> <b>- ₹0</b></li><li class="show"><span>Other Discounts</span> <b>- ₹6,972</b></li></ul></div><div class="heading"></div><div class="heading">
                          <h5>Premium Details</h5><ul><li class="PackagePremium"><span>Package Premium</span> <b>₹984 </b></li><li class="GSTPremium">
                            <span>GST@18%</span>
                            <b>₹177 </b></li></ul></div><div class="heading"><span>Final Premium <em>(inc. GST)</em></span><b>₹1,161</b></div></div></div></div>
                  </CardBody>
                </Card>
              </div>
            </TabPane>
            <TabPane tabId='4'>
              <p>
                Candy canes halvah biscuit muffin dessert biscuit marzipan. Gummi bears marzipan bonbon chupa chups biscuit
                lollipop topping. Muffin sweet apple pie sweet roll jujubes chocolate. Topping cake chupa chups chocolate
                bar tiramisu tart sweet roll chocolate cake.
              </p>
              <p>
                Jelly beans caramels muffin wafer sesame snaps chupa chups chocolate cake pastry halvah. Sugar plum cotton
                candy macaroon tootsie roll topping. Liquorice topping chocolate cake tart tootsie roll danish bear claw.
                Donut candy canes marshmallow. Wafer cookie apple pie.
              </p>
            </TabPane>
          </TabContent>
        </Modal>
      </div>

    </div>
  )
}

export default PolicyDetails
