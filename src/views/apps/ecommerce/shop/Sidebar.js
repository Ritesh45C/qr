// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'

// ** Third Party Components
import wNumb from 'wnumb'
import classnames from 'classnames'
import { Star } from 'react-feather'
import Nouislider from 'nouislider-react'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Card, CardBody, Row, Col, Input, Button, Label } from 'reactstrap'

// ** Styles
import '@styles/react/libs/noui-slider/noui-slider.scss'

const Sidebar = props => {
  // ** Props
  const { sidebarOpen } = props

  // ** Hooks
  const [isRtl] = useRTL()

  // ** Array of categories
  const categories = [
    {
      id: 'appliances',
      title: '30%',
      defaultChecked: true
    },
    {
      id: 'audio',
      title: '50%'
    },
    {
      id: 'camera-camcorders',
      title: '80s'
    },
    // {
    //   id: 'car-electronics',
    //   title: 'Car Electronics & Gps'
    // },
    // {
    //   id: 'cellphones',
    //   title: 'Cell Phones'
    // },
    // {
    //   id: 'computers',
    //   title: 'Computers & Tablets'
    // },
    // {
    //   id: 'health-fitness-beauty',
    //   title: 'Health, Fitness & Beauty'
    // },
    // {
    //   id: 'office-school',
    //   title: 'Office & School Supplies'
    // },
    // {
    //   id: 'tv-home-theater',
    //   title: 'TV & Home Theater'
    // },
    // {
    //   id: 'video-games',
    //   title: 'Video Games'
    // }
  ]

  // ** Array of brands
  const brands = [
    {
      title: 'Zero Depreciation',
      total: 746
    },
    {
      title: '24x7 Roadside Assitance',
      total: 633,
      checked: true
    },
    {
      title: 'Engine Protection Cover',
      total: 591
    },
    {
      title: 'NCB Protector',
      total: 530
    },
    {
      title: 'Key & Lock Replacement',
      total: 422,
      checked: true
    },
    {
      title: 'Consumable',
      total: 394
    },
    {
      title: 'Daily Allowance',
      total: 350
    },
    {
      title: 'Invoice Price',
      total: 320
    },
    {
      title: 'Tyre Protector',
      total: 318
    },
    {
      title: 'Rim Damage Cover',
      total: 298
    }
  ]

  // ** Array of ratings
  const ratings = [
    {
      ratings: 4,
      total: 160
    },
    {
      ratings: 3,
      total: 176
    },
    {
      ratings: 2,
      total: 291
    },
    {
      ratings: 1,
      total: 190
    }
  ]

  return (
    <div className='sidebar-detached sidebar-left'>
      <div className='sidebar'>
        <div
          className={classnames('sidebar-shop', {
            show: sidebarOpen
          })}
        >
          <Row>
            <Col sm='12'>
              <h6 className='filter-heading d-none d-lg-block'>Filters</h6>
            </Col>
          </Row>
          <Card>
            <CardBody>
              <div className='multi-range-price'>
                <h6 className='filter-title mt-0'>Multi Range</h6>
                <ul className='list-unstyled price-range'>
                  <li>
                    <Col sm='12' className='mb-1'>
                      <Label className='form-label' for='nameVertical'>
                        Company Name
                      </Label>
                      <Input value="Tata" type='text' name='name' id='nameVertical' placeholder='First Name' />
                    </Col>
                  </li>
                  <li>
                    <Col sm='12' className='mb-1'>
                      <Label className='form-label' for='nameVertical'>
                        Model Year
                      </Label>
                      <Input value="2021" type='text' name='name' id='nameVertical' placeholder='First Name' />
                    </Col>
                  </li>
                  <li>
                    <Col sm='12' className='mb-1'>
                      <Label className='form-label' for='nameVertical'>
                        Policy Expire Date
                      </Label>
                      <Input value="02-02-2024" type='text' name='name' id='nameVertical' placeholder='First Name' />
                    </Col>
                  </li>

                  <li>
                    <h6 className='filter-title'>Insured Value (IDV)</h6>

                    <div className='form-check'>
                      <Input type='radio' id='10-100-dollars' name='price-range-radio' />
                      <Label className='form-check-label' for='10-100-dollars'>
                        Lowest IDV
                      </Label>
                    </div>
                  </li>
                  <li>
                    <div className='form-check'>
                      <Input type='radio' id='100-500-dollars' name='price-range-radio' />
                      <Label className='form-check-label' for='100-500-dollars'>
                        Recommended IDV (₹ 3,23,217)
                      </Label>
                    </div>
                  </li>
                  <li>
                    <div className='form-check'>
                      <Input type='radio' id='500-dollars-above' name='price-range-radio' />
                      <Label className='form-check-label' for='500-dollars-above'>
                        Maximum IDV
                      </Label>
                    </div>
                  </li>
                  <li>
                    <div className='form-check'>
                      <Input type='radio' id='100-500-dollars' name='price-range-radio' />
                      <Label className='form-check-label' for='100-500-dollars'>
                        Choose Your IDV
                      </Label>
                      <Input value="" type='text' name='name' id='nameVertical' placeholder='' />

                    </div>
                    <Button size='sm' color='primary' style={{ margin: "25px" }} >
                      Update
                    </Button>
                  </li>
                </ul>
              </div>
              <div className='price-slider'>
                <h6 className='filter-title'>Price Range</h6>
                <div className='price-slider'>
                  <Nouislider
                    className='range-slider mt-2'
                    direction={isRtl ? 'rtl' : 'ltr'}
                    start={[1500, 3500]}
                    connect={true}
                    tooltips={[true, true]}
                    format={wNumb({
                      decimals: 0
                    })}
                    range={{
                      min: 51,
                      max: 5000
                    }}
                  />
                </div>
              </div>
              <div id='product-categories'>
                <h6 className='filter-title'>NCB</h6>
                <ul className='list-unstyled categories-list'>
                  {categories.map(category => {
                    return (
                      <li key={category.id}>
                        <div className='form-check'>
                          <Input
                            type='radio'
                            id={category.id}
                            name='category-radio'
                            defaultChecked={category.defaultChecked}
                          />
                          <Label className='form-check-label' for={category.id}>
                            {category.title}
                          </Label>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className='brands'>
                <h6 className='filter-title'>Addons & Accessories</h6>
                <ul className='list-unstyled brand-list'>
                  {brands.map(brand => {
                    return (
                      <li key={brand.title}>
                        <div className='form-check'>
                          <Input type='checkbox' id={brand.title} defaultChecked={brand.checked} />
                          <Label className='form-check-label' for={brand.title}>
                            {brand.title}
                          </Label>
                        </div>
                        {/* <span>{brand.total}</span> */}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div id='ratings'>
                <h6 className='filter-title'>Ratings</h6>
                {ratings.map(item => {
                  return (
                    <div key={item.total} className='ratings-list'>
                      <a href='/' onClick={e => e.preventDefault()}>
                        <ul className='unstyled-list list-inline'>
                          {new Array(5).fill().map((listItem, index) => {
                            return (
                              <li key={index} className='ratings-list-item me-25'>
                                <Star
                                  className={classnames({
                                    'filled-star': index + 1 <= item.ratings,
                                    'unfilled-star': index + 1 > item.ratings
                                  })}
                                />
                              </li>
                            )
                          })}
                          <li>& up</li>
                        </ul>
                      </a>
                      <div className='stars-received'>{item.total}</div>
                    </div>
                  )
                })}
              </div>
              <div id='clear-filters'>
                <Button color='primary' block>
                  Clear All Filters
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
