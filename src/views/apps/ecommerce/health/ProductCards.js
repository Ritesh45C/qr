// ** React Imports
import { Link } from 'react-router-dom'
import React from 'react';
// ** Third Party Components
import classnames from 'classnames'
import { Star, ShoppingCart, Heart } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardBody, CardText, Button, Badge } from 'reactstrap'
import PolicyDetails from './PolicyDetails';

const ProductCards = props => {
  const [show, setShow] = React.useState(false);
  // ** Props
  const {
    store,
    products,
    dispatch,
    addToCart,
    activeView,
    getProducts,
    getCartItems,
    addToWishlist,
    deleteWishlistItem
  } = props

  // ** Handle Move/Add to cart
  const handleCartBtn = (id, val) => {
    if (val === false) {
      dispatch(addToCart(id))
    }
    dispatch(getCartItems())
    dispatch(getProducts(store.params))
  }

  // ** Handle Wishlist item toggle
  const handleWishlistClick = (id, val) => {
    if (val) {
      dispatch(deleteWishlistItem(id))
    } else {
      dispatch(addToWishlist(id))
    }
    dispatch(getProducts(store.params))
  }

  // ** Renders products
  const renderProducts = () => {
    if (products.length) {
      return products.map(item => {
        const CartBtnTag = item.isInCart ? Link : 'button'

        return (

          <Card className='ecommerce-card' key={item.name}>
            <div className='item-img text-center mx-auto'>
              <Link to={`/apps/ecommerce/product-detail/${item.slug}`}>
                <img style={{ width: "100px" }} className='img-fluid card-img-top' src={"https://play-lh.googleusercontent.com/4e-a-TLYDy3wIODpQW91o6RjUJ7G8ohm77noEiTOVASeteZld0FGlC11_6sA1GA9d2c=s360-rw"} alt={item.name} />
              </Link>
            </div>
            <CardBody>
              <div className='item-wrapper'>
                <div className='item-rating'>
                  <ul className='unstyled-list list-inline'>
                    {new Array(5).fill().map((listItem, index) => {
                      return (
                        <li key={index} className='ratings-list-item me-25'>
                          <Star
                            className={classnames({
                              'filled-star': index + 1 <= item.rating,
                              'unfilled-star': index + 1 > item.rating
                            })}
                          />
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className='item-cost'>
                  <h6 className='item-price'>${item.price}</h6>
                </div>
              </div>
              <h6 className='item-name'>
                <Link className='text-body' to={`/apps/ecommerce/product-detail/${item.slug}`}>
                  Bajaj Allianz General Insurance Co. Ltd


                </Link>
                <CardText tag='span' className='item-company'>
                  By{' '}
                  <a className='company-name' href='/' onClick={e => e.preventDefault()}>
                    Bajaj
                  </a>
                </CardText>
              </h6>
              <CardText className='item-description'>
                <div>
                  <div>
                    <div>IDV</div>
                    <div>₹2,57,040</div>
                  </div>
                  <div>
                    <div>Addons</div>
                    <div>Zero Dep: ₹ 1,640Add
                    </div>
                  </div>
                </div>
              </CardText>
            </CardBody>
            <div className='item-options text-center'>
              <div className='item-wrapper'>
                <div className='item-cost'>
                  <h4 className='item-price'> ₹ 984</h4>
                  {item.hasFreeShipping ? (
                    <CardText className='shipping'>
                      <Badge onClick={() => setShow(true)} color='light-success'>Policy Details</Badge>
                    </CardText>
                  ) : null}
                </div>
              </div>

              <Button
                color='primary'
                tag={CartBtnTag}
                className='btn-cart move-cart'
                onClick={() => handleCartBtn(item.id, item.isInCart)}
                /*eslint-disable */
                {...(item.isInCart
                  ? {
                    to: '/apps/ecommerce/checkout'
                  }
                  : {})}
              /*eslint-enable */
              >
                <ShoppingCart className='me-50' size={14} />
                <span>Buy Now</span>
              </Button>
            </div>
          </Card>
        )
      })
    }
  }

  return (
    <div
      className={classnames({
        'grid-view': activeView === 'grid',
        'list-view': activeView === 'list'
      })}
    >
      {show ? <PolicyDetails /> : null}

      {renderProducts()}
    </div>
  )
}

export default ProductCards
