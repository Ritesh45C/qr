import { Card, CardHeader, CardTitle, CardBody, Form, Label, Input } from 'reactstrap'
import Select from 'react-select'
import { Row, Col, } from 'reactstrap'


import React, { useEffect, useState } from "react"
import { useHistory, withRouter } from "react-router-dom"
import { useLocation, useParams } from "react-router"
import axios from "axios"
import { selectThemeColors } from '@utils'


const PriceFilter = (props) => {
  const history = useHistory()

  const [adult, setAdult] = useState("1 Adult")
  const [individual, setIndividual] = useState(false)
  const [person, setPerson] = useState(1)
  const [kid, setKid] = useState(0)
  const [age, setAge] = useState("18-40")
  const [price, setPrice] = useState(0)
  const [coverage, setCoverage] = useState(5)
  let { _id, company } = useParams()

  const handleToProposalForm = () => {
    const user = JSON.parse(localStorage.getItem("productId"))
    history.push({
      pathname: `/${company}/super-top-up-proposal-form/z_BdVCD9O`,
      state: { productId: user._id, price },
    })
  }
  const colourOptions = [
    { value: 'Individual', label: 'Individual' },
    { value: '1 Adult and upto 2 Kids', label: '1 Adult and upto 2 Kids' },
    { value: '2 Adults', label: '2 Adults' },
    { value: '2 Adult up 2 kids', label: '2 Adult up 2 kids' },
  ]
  const colourOptions1 = [
    { value: '18-40', label: '18-40' },
    { value: '41-50', label: '41-50' },
    { value: '51-65', label: '51-65' },
  ]
  const colourOptions2 = [
    { value: '₹ 5 Lakhs and above', label: '₹ 5 Lakhs and above' },
    { value: '₹ 3 Lakhs - ₹ 4.99 Lakhs', label: '₹ 3 Lakhs - ₹ 4.99 Lakhs' },
  ]

  const fetchPrice = () => {
    const data = {
      type: adult,
      age,
      coverage
    }
    axios
      .post(
        "https://prod-api.xpcover.com/micro-insurance/qutation/superTopup",
        data
      )
      .then((res) => {
        setPrice(res.data.quotationAmount)
        localStorage.setItem("person", person)
        localStorage.setItem("kid", kid)
      })
  }

  useEffect(() => {
    fetchPrice()
  }, [adult, age, coverage])
  return (
    <>
      <Form style={{ width: '250px' }}>
        <div>
          <Col className='mb-1'>
            <Label className='form-label'>Purchasing For</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[0]}
              options={colourOptions}
              isClearable={false}
            />
          </Col>


        </div>
        <div>
          <Col className='mb-1'>
            <Label className='form-label'>Age Of Eldest Member</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions1[0]}
              options={colourOptions1}
              isClearable={false}
            />
          </Col>
          <br />

        </div>
        <div>
          <Col className='mb-1'>
            <Label className='form-label'>Existing Health Coverage</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions2[0]}
              options={colourOptions2}
              isClearable={false}
            />
          </Col>
        </div>
        <br />

        <br />




      </Form>
      {/* <Button
        style={{
          color: "white",
          backgroundColor: "#f64b4b",
          padding: "10px 30px",
          marginTop: "20px",
        }}
        onClick={handleToProposalForm}
      >
        Pay &#8377; {price} for 1 year
      </Button> */}
    </>
  )
}

export default withRouter(PriceFilter)
