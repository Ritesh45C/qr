// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// ** Product detail components
import ItemFeatures from './ItemFeatures'
import ProductDetails from './ProductDetails'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Card, CardBody } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
// import { getProduct, deleteWishlistItem, addToWishlist, addToCart } from '../store'

import '@styles/base/pages/app-ecommerce-details.scss'

const Details = () => {
  const [product, setProduct] = useState([])
  const [benefits, setBenefits] = useState([])
  const [productOption, setProductOption] = useState([])
  const [inclusion, setInclusions] = useState([])
  const [option, setOption] = useState(1)
  const [companyId, setCompanyId] = useState()
  const [productDesc, setProductDesc] = useState("")
  // ** Vars
  // const params = useParams().product
  // const productId = params.substring(params.lastIndexOf('-') + 1)
  const { _id, company } = useParams()

  // ** Store Vars
  // const dispatch = useDispatch()
  // const store = useSelector(state => state.ecommerce)

  const clientId = "1NexC9S4i"

  function getProduct() {
    const benefits = []
    const Inclusions = []
    axios
      .get(`https://prod-api.xpcover.com/ins/getProductById/${clientId}/${_id}`)
      .then((res) => {
        setProduct(res.data.product[0])
        Object.entries(product.premium_options[0].benefits).forEach(
          ([k, v]) => {
            benefits.push(v)
          }
        )
        Object.entries(product.premium_options[0].inclusion).forEach(
          ([k, v]) => {
            Inclusions.push(v)
          }
        )
        setBenefits(benefits)
        setInclusions(Inclusions)
        setProductOption(Object.values(product.premium_options[0].premium))
        //   console.log(product)
      })
      .catch((err) => console.log(err))
  }
  // ** ComponentDidMount : Get product
  useEffect(() => {
    console.log('get product')
    getProduct()
    // dispatch(getProduct(productId))
  }, [])

  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Product Details' breadCrumbParent='eCommerce' breadCrumbActive='Details' />
      <div className='app-ecommerce-details'>
        {product.length === 0 ? "loading..." : (
          <Card>
            <CardBody>
              <ProductDetails

                data={product}

              />
            </CardBody>
            <ItemFeatures />
            <CardBody>
              {/* <RelatedProducts /> */}
            </CardBody>
          </Card>
        )}
      </div>
    </Fragment>
  )
}

export default Details
