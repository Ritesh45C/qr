import React, { useState } from 'react'
import { Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'
import axios from 'axios'
import './app.css'
import { useHistory, Redirect } from "react-router-dom"

const Landing = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = React.useState(true)
  const history = useHistory()

  const url = "https://prod-api.xpcover.com"

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `${url}/ins/getInsuranceProduct/ZhPX2aPvb`
      )
      if (response) {
        setProducts(response.data.products)
        setLoading(false)
      }
    } catch (error) {
      if (!clientId) {
      }
    }
  }

  React.useEffect(() => {
    getProducts()
  }, [])

  const renderComponent = (product) => {
    console.log('clicked')
    const companyName = 'tartan'

    if (product.product_name === "Super top up") {
      history.push({
        pathname: `/${companyName}/super-top-up/${product.xpc_insurance_product_id}`
      })
    } else {
      history.push({
        pathname: `/${companyName}/${product.product_name}/details/${product.xpc_insurance_product_id}`
      })
    }

  }
  return <div>
    <section>
      <div className="top-banner">
        <div>
          <h1 className="top-text">
            Let's find you
            <br /> the <span style={{ fontWeight: 800 }}>Best Insurance</span>
          </h1>
          <div>
            <div className="lowest_price">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/758/758930.svg?token=exp=1620478001~hmac=85d495decb12c913ed090b5f4824295a"
                alt=""
                style={{ width: "27px", marginRight: "12px" }}
              />
              50+ insurers with the lowest prices
            </div>
            <div className="hassle_free">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/819/819398.svg?token=exp=1620477723~hmac=c2fdbf699e4da7a69ca7701a07d691c8"
                alt=""
                style={{ width: "27px", marginRight: "12px" }}
              />
              Quick, easy & hassle free
            </div>
          </div>
        </div>
        <div>
          <h4 className="promise-text">XPC Promise</h4>
          <div>
            <h1 className="mid-text">
              A commitment <br /> to our customers
            </h1>
          </div>
          <div className="button_knowMOre">Know More</div>
        </div>
      </div>
    </section>
    {loading ? (
      <div>loading............</div>
    ) : (

      <div className="product-section">
        <Row className='match-height'>
          <Col lg='4' md='6' className='product_grid'>
            {products.length ? (
              products.map((product, index) => (index <= 10 ? (
                <div onClick={() => {
                  renderComponent(product)
                }}>
                  <Card onClick={() => {
                    renderComponent(product)
                  }}>
                    <CardImg onClick={() => {
                      renderComponent(product)
                    }} top src={product.product_icon} alt='Card cap' className='product-img' />
                    <CardBody>
                      <CardTitle tag='h6'>{product.product_name}</CardTitle>
                      {/* <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </CardText>
                  <Button color='primary' outline>
                    Go Somewhere
                  </Button> */}
                    </CardBody>
                  </Card>
                </div>

              ) : index === 11 ? (
                <div
                  onClick={() => {
                    history.push(`${company}/allproducts`)
                  }}
                  className="product_card"
                >
                  <div
                    className="product_title"
                    style={{
                      color: "#1185e0",
                      fontSize: "15px",
                      "&:hover": {
                        TextDecoder: "underline"
                      }
                    }}
                  >
                    {"View More Products"}
                  </div>
                </div>
              ) : null)
              )
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <h1 style={{ fontSize: "25px" }}>No Product Found</h1>
              </div>
            )}
          </Col>
        </Row>
      </div>
    )}  </div>
}

export default Landing
