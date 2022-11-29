import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Form, Label, Input } from 'reactstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap'
import { useHistory } from 'react-router-dom'

const CarQuestionToggle = () => {
  const [firstModal, setFirstModal] = useState(true)
  const [secondModal, setSecondModal] = useState(false)
  const history = useHistory()
  const toggleFirstModal = () => {
    setFirstModal(!firstModal)
    setSecondModal(!secondModal)
  }
  return (
    <div>
      <div>

        <Modal isOpen={firstModal} toggle={() => setFirstModal(!firstModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFirstModal(!firstModal)}>Your quotes are loading! </ModalHeader>
          <ModalBody>
            <Form>
              <div className='demo-inline-spacing'>
                <div className='form-check'>
                  <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
                  <Label className='form-check-label' for='ex1-active'>
                    Policy Not expired Yet
                  </Label>
                </div>
                <div className='form-check'>
                  <Input type='radio' name='ex1' id='ex1-inactive' />
                  <Label className='form-check-label' for='ex1-inactive'>
                    Expired within 60 Days
                  </Label>
                </div>
                <div className='form-check'>
                  <Input type='radio' id='ex2-active' name='ex1' />
                  <Label className='form-check-label' for='ex2-active'>
                    Expired 60-90 Days Ago
                  </Label>
                </div>
                <div className='form-check'>
                  <Input type='radio' name='ex1' id='ex3-active' />
                  <Label className='form-check-label' for='ex3-active'>
                    Expired more than 90 Days Ago
                  </Label>
                </div>
                <div className='form-check'>
                  <Input type='radio' name='ex1' id='ex4-inactive' />
                  <Label className='form-check-label' for='ex4-inactive'>
                    I Have bought a used Car
                  </Label>
                </div>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => toggleFirstModal()}>
              Next
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={secondModal} toggle={() => setSecondModal(!secondModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setSecondModal(!secondModal)}>Your quotes are loading! </ModalHeader>
          <ModalBody>
            <h2>Did you make a claim in your existing policy?
            </h2>
            <Form>
              <div className='demo-inline-spacing'>
                <div className='form-check'>
                  <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
                  <Label className='form-check-label' for='ex1-active'>
                    Yes
                  </Label>
                </div>
                <br />

                <div className='form-check'>
                  <Input type='radio' name='ex1' id='ex1-inactive' />
                  <Label className='form-check-label' for='ex1-inactive'>
                    No
                  </Label>
                </div>
                <br />

                <div className='form-check'>
                  <Input type='radio' name='ex1' id='ex1-inactive' />
                  <Label className='form-check-label' for='ex1-inactive'>
                    Not Sure
                  </Label>
                </div>

              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => history.push("/apps/ecommerce/shop")}>
              Next
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}

export default CarQuestionToggle