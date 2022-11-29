// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram } from 'react-feather'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Button,
  CardText,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown
} from 'reactstrap'
// import Pricefilter from '../Pricefilter'

const MicroInsurance = props => {
  // ** Props
  const { data, deleteWishlistItem, dispatch, addToWishlist, getProduct, productId, addToCart } = props

  // ** State
  const [selectedColor, setSelectedColor] = useState('primary')

  // ** Renders color options

  // ** Handle Wishlist item toggle

  // ** Handle Move/Add to cart
  // const handleCartBtn = (id, val) => {
  //   if (val === false) {
  //     dispatch(addToCart(id))
  //   }
  //   dispatch(getProduct(productId))
  // }

  // ** Condition btn tag
  const CartBtnTag = data.isInCart ? Link : 'button'

  return (
    <Row className='my-2'>
      <div>product</div>
      <Col className='d-flex align-items-center justify-content-center mb-2 mb-md-0' md='5' xs='12'>
        <div className='d-flex align-items-center justify-content-center'>
          <img className='img-fluid product-img' src={data.product_icon} alt={data.product_name} />
        </div>
      </Col>
      <Col md='7' xs='12'>
        <h4>{data.product_name}</h4>
        <CardText tag='span' className='item-company'>
          By
          <a className='company-name' href='/' onClick={e => e.preventDefault()}>
            {data.product_name}
          </a>
        </CardText>
        <div className='ecommerce-details-price d-flex flex-wrap mt-1'>
          <h4 className='item-price me-1'>${1212}</h4>
          <ul className='unstyled-list list-inline'>
            {new Array(5).fill().map((listItem, index) => {
              return (
                <li key={index} className='ratings-list-item me-25'>
                  <Star
                    className={classnames({
                      'filled-star': index + 1 <= data.rating,
                      'unfilled-star': index + 1 > data.rating
                    })}
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <CardText>
          Available -<span className='text-success ms-25'>In stock</span>
        </CardText>
        <CardText>{data.product_description}</CardText>

        <hr />
        {/* <Pricefilter /> */}
        <hr />

      </Col>
    </Row>
  )
}

export default MicroInsurance
