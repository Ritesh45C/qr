// ** React Imports
import { Link } from 'react-router-dom'
import React from 'react';
// ** Third Party Components
import classnames from 'classnames'
import InputNumber from 'rc-input-number'
import { X, Heart, Star, Plus, Minus } from 'react-feather'
import Flatpickr from 'react-flatpickr'

// ** Reactstrap Imports
import { Card, CardBody, CardText, Button, Badge, InputGroup, Input, InputGroupText, Label } from 'reactstrap'

// ** Styles
import '@styles/react/libs/input-number/input-number.scss'

const Cart = props => {
  // ** Props
  const { products, stepper, deleteCartItem, dispatch, addToWishlist, deleteWishlistItem, getCartItems } = props
  const [picker, setPicker] = React.useState(new Date())

  // ** Function to convert Date
  const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
    if (!value) return value
    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
  }

  // ** Funciton Function to toggle wishlist item
  const handleWishlistClick = (id, val) => {
    if (val) {
      dispatch(deleteWishlistItem(id))
    } else {
      dispatch(addToWishlist(id))
    }
    dispatch(getCartItems())
  }

  // ** Render cart items
  const renderCart = () => {
    return products.map(item => {
      return (
        <Card key={item.name} className='ecommerce-card'>
          <div className='item-img'>
            <Link to={`/apps/ecommerce/product-detail/${item.slug}`}>
              <img className='img-fluid' src={item.image} alt={item.name} />
            </Link>
          </div>
          <CardBody>
            <div className='item-name'>
              <h6 className='mb-0'>
                <Link to={`/apps/ecommerce/product-detail/${item.slug}`}>{item.name}</Link>
              </h6>
              <span className='item-company'>
                By
                <a className='ms-25' href='/' onClick={e => e.preventDefault()}>
                  {item.brand}
                </a>
              </span>
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
            </div>
            <span className='text-success mb-1'>In Stock</span>
            <div className='item-quantity'>
              <span className='quantity-title me-50'>Qty</span>
              <InputNumber
                min={1}
                max={10}
                upHandler={<Plus />}
                className='cart-input'
                defaultValue={item.qty}
                downHandler={<Minus />}
              />
            </div>
            <div className='delivery-date text-muted'>Delivery by, {formatDate(item.shippingDate)}</div>
            <span className='text-success'>
              {item.discountPercentage}% off {item.offers} offers Available
            </span>
          </CardBody>
          <div className='item-options text-center'>
            <div className='item-wrapper'>
              <div className='item-cost'>
                <h4 className='item-price'>${item.price}</h4>
                {item.hasFreeShipping ? (
                  <CardText className='shipping'>
                    <Badge color='light-success' pill>
                      Free Shipping
                    </Badge>
                  </CardText>
                ) : null}
              </div>
            </div>
            <Button className='mt-1 remove-wishlist' color='light' onClick={() => dispatch(deleteCartItem(item.id))}>
              <X size={14} className='me-25' />
              <span>Remove</span>
            </Button>
            <Button
              className='btn-cart'
              color='primary'
              onClick={() => handleWishlistClick(item.id, item.isInWishlist)}
            >
              <Heart
                size={14}
                className={classnames('me-25', {
                  'fill-current': item.isInWishlist
                })}
              />
              <span className='text-truncate'>Wishlist</span>
            </Button>
          </div>
        </Card>
      )
    })
  }

  return (
    <div className='list-view product-checkout'>
      <div className='checkout-items'>
        <h2 style={{ padding: '2px' }}>Confirm Your Details</h2>
        <Card>
          <CardBody>
            <div className="demo-inline-spacing">
              <Label className='form-label' for='default-picker'>
                Existing Third Party Policy Expiry Date

              </Label>
              <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
            </div>
            <div className="demo-inline-spacing">
              <Label className='form-label' for='default-picker'>
                Car Registration Date

              </Label>
              <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
            </div>
            <div className="demo-inline-spacing">
              <div>Did car's ownership change in the last 12 months?
              </div>
              <div className='form-check'>
                <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
                <Label className='form-check-label' for='ex1-active'>
                  Yes
                </Label>
              </div>
              <div className='form-check'>
                <Input type='radio' name='ex1' id='ex1-inactive' />
                <Label className='form-check-label' for='ex1-inactive'>
                  No
                </Label>
              </div>
            </div>
            <div className="demo-inline-spacing">
              <div>Does this car have an external CNG/LPG kit?

              </div>
              <div className='form-check'>
                <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
                <Label className='form-check-label' for='ex1-active'>
                  Yes
                </Label>
              </div>
              <div className='form-check'>
                <Input type='radio' name='ex1' id='ex1-inactive' />
                <Label className='form-check-label' for='ex1-inactive'>
                  No
                </Label>
              </div>
            </div>
            <div className="demo-inline-spacing">
              <div>Car Is Owned By You?
                <br />

              </div>
              <div className='form-check'>
                <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
                <Label className='form-check-label' for='ex1-active'>
                  Yes
                </Label>
              </div>
              <div className='form-check'>
                <Input type='radio' name='ex1' id='ex1-inactive' />
                <Label className='form-check-label' for='ex1-inactive'>
                  No
                </Label>
              </div>
            </div>
          </CardBody>


        </Card>
      </div>
      <div className='checkout-options'>
        <Card>
          <CardBody>

            <div class="bp-right">
              <h2>Your Plan Summary</h2><div class="quote-tile">
                <img src="https://static.pbcdn.in/car-cdn/ang/images/Car-AC/Logo/United_Insurance.gif" />
                <ul class="plan-sum"><li className='price-detail'><b>IDV</b><span>₹ 2,57,040</span></li><li className='price-detail'><b>NCB</b>
                  <span>20%</span></li><li className='price-detail'><b>Plan Type</b> <span>Own Damage cover</span>
                  </li></ul></div><ul class="premium-amount"><li className='price-detail'><b>Premium Amount</b>
                    <span>₹ 984</span></li><li className='price-detail'><b>GST@18%</b><span>+ ₹ 177</span></li></ul>
              <div class="row pa-cover"><div class="col-sm-12 GetPA red-bg insurer active">
                <div class="cpa_cont"><div class="add_com_text">Add <strong>Compulsory</strong> Owner-Driver Personal Accident Cover of Rs. 15 lakhs
                  <span class="wrapper"><em>i</em><div class="tooltip">This accident cover provides financial assistance to the car's owner in case of disablement or death due to an accident. Every individual vehicle owner must opt for this cover as per IRDAI guidelines, except for those without a driving license or having an existing Personal Accident cover of at least Rs. 15 lakhs.</div>
                  </span>from:</div><div class="three-boxes clearfix"><div class="custom-checkbox_red box3">
                    <label><p><span><span>Digit</span></span><span class="value">₹ 378</span>
                    </p><input type="checkbox" />
                      <span class="ractangle"></span></label></div>
                    <div class="custom-checkbox_red box3"><label>
                      <p><span><span>Cholamandlam</span></span><span class="value">₹ 384</span></p><input type="checkbox" />
                      <span class="ractangle"></span></label></div><div class="custom-checkbox_red box3"><label>
                        <p><span><span>Kotak</span></span><span class="value">₹ 390</span></p><input type="checkbox" />
                        <span class="ractangle"></span></label></div></div>
                </div></div></div><div class="pay-now"><div class="pay">You'll Pay</div>
                <div class="total-ammount"><b>₹ 1,161</b></div></div><div class="t_c">
                <div class="pg-submit"><input type="checkbox" class="termsCheck" id="termsCheck" checked="" /><div class="tc-Txt"> I agree to the <a href="https://buycar.policybazaar.com//car-insurance/car-summary-termscondition.htm" target="_blank"> Terms &amp; Conditions </a>and confirm:  my car is not a commercial vehicle, my previous policy is a 1+3 bundled comprehensive policy with 0 % NCB  and there are no claims,  and my car has a valid PUC certificate.</div>
                </div></div><button id="btmFinalSubmit" class="payNow car-detail-btn btn-dia-able">PAY SECURELY</button><div class="payMSG"><b>Next step:</b><div>After payment, we'll ask you for a few details that we need to issue your policy document. Please fill these details by 17-May-2022. If you're unable to do so within this timeframe, the amount paid will be refunded to you in full.</div></div></div>
            {/* <label className='section-label mb-1'>Options</label>
            <InputGroup className='input-group-merge coupons'>
              <Input placeholder='Coupons' />
              <InputGroupText className='text-primary ms-0'>Apply</InputGroupText>
            </InputGroup>
            <hr />
            <div className='price-details'> */}
            {/* <h6 className='price-title'>Price Details</h6>
              <ul className='list-unstyled'>
                <li className='price-detail'>
                  <div className='detail-title'>Total MRP</div>
                  <div className='detail-amt'>$598</div>
                </li>
                <li className='price-detail'>
                  <div className='detail-title'>Bag Discount</div>
                  <div className='detail-amt discount-amt text-success'>-25$</div>
                </li>
                <li className='price-detail'>
                  <div className='detail-title'>Estimated Tax</div>
                  <div className='detail-amt'>$1.3</div>
                </li>
                <li className='price-detail'>
                  <div className='detail-title'>EMI Eligibility</div>
                  <a href='/' className='detail-amt text-primary' onClick={e => e.preventDefault()}>
                    Details
                  </a>
                </li>
                <li className='price-detail'>
                  <div className='detail-title'>Delivery Charges</div>
                  <div className='detail-amt discount-amt text-success'>Free</div>
                </li>
              </ul>
              <hr />
              <ul className='list-unstyled'>
                <li className='price-detail'>
                  <div className='detail-title detail-total'>Total</div>
                  <div className='detail-amt fw-bolder'>$574</div>
                </li>
              </ul>
              <Button
                block
                color='primary'
                disabled={!products.length}
                onClick={() => stepper.next()}
                classnames='btn-next place-order'
              >
                Place Order
              </Button>
            </div> */}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Cart
