// ** React Imports
import { Link } from 'react-router-dom'
import { Fragment, useState, useEffect } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
// ** Third Party Components
import axios from 'axios'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
import KnowledgeBaseHeader from './KnowledgeBaseHeader'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardImg } from 'reactstrap'

// ** Styles
import '@styles/base/pages/page-knowledge-base.scss'
import ComponentSpinner from '../../../@core/components/spinner/Loading-spinner'

const KnowledgeBase = (props) => {
  // ** States
  const url = "https://prod-api.xpcover.com"

  const companyName = localStorage.getItem("company");
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [clientID, setClientID] = useState([]);
  var a = props.history.location.pathname.split('/')[1]
  console.log(props.history)
  const company = a
  const [data, setData] = useState(null),
    [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios.get('/faq/data/knowledge_base').then(res => setData(res.data))
    setClientID(localStorage.getItem("clientId"))

  }, [])

  useEffect(() => {
    const getClients = () => {
      // window.location.reload();
      axios
        .get(`${url}/onboarding/getClientId/${company}`)
        .then((response) => {
          localStorage.setItem("company", company);
          var clientId = response.data[0].xpcClientId
          getProducts(clientId)

          localStorage.setItem("clientId", clientId);
          setClientID(response.data[0].xpcClientId);
          localStorage.setItem("customerId", response.data[0]._id);
          setLoading(false);
          getProducts(clientId)
        })
        .catch((err) => {
          setLoading(false);
          setClientID([]);
          localStorage.removeItem("company");
          localStorage.removeItem("clientId");
          localStorage.removeItem("customerId");
          // window.location.href = "/misc/coming-soon"
        })
    };
    getClients()
  }, [])

  const getProducts = async (id) => {
    console.log('ran')
    try {
      const response = await axios.get(
        `${url}/ins/getInsuranceProduct/${id}`
      );
      if (response) {
        setProducts(response.data.products);
        setLoading(false);
      }
    } catch (error) {
      if (!clientID) {
      }
    }
  };

  useEffect(() => {
    // getClients()
    // if (!clientId) {
    //   window.location.reload()
    // } else {
    //   getProducts();
    // }
    // getProducts()
  }, [clientID]);
  const renderComponent = (product) => {
    let path;

    if (product.product_name === "Super top up") {
      history.push({
        pathname: `/${companyName}/apps/insurance/health-buffer/${product.xpc_insurance_product_id}`,
      });
    } else
      history.push({
        pathname: `/${companyName}/${product.product_name}/${product.xpc_insurance_product_id}`,
      });
  };

  const Content = ({ item }) => (
    <Col className='kb-search-content' key={item.id} md='4' sm='6'>
      <Card>
        <Link to={`/pages/knowledge-base/${item.category}`}>
          <CardImg src={item.img} alt='knowledge-base-image' top />
          <CardBody className='text-center'>
            <h4>{item.title}</h4>
            <p className='text-body mt-1 mb-0'>{item.desc}</p>
          </CardBody>
        </Link>
      </Card>
    </Col>
  )

  const renderContent = () => {
    return data.map(item => {
      const titleCondition = item.title.toLowerCase().includes(searchTerm.toLowerCase()),
        descCondition = item.desc.toLowerCase().includes(searchTerm.toLowerCase())

      if (searchTerm.length < 1) {
        return <Content key={item.id} item={item} />
      } else if (titleCondition || descCondition) {
        return <Content key={item.id} item={item} />
      } else {
        return null
      }
    })
  }

  return (
    <Fragment>
      {/* <Breadcrumbs breadCrumbTitle='Knowledge Base' breadCrumbParent='Pages' breadCrumbActive='Knowledge Base' /> */}
      <KnowledgeBaseHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      (
      <div id='knowledge-base-content'>
        <Row className='kb-search-content-info match-height'> {(clientID[0] == null && loading == true) ? (
          // <Loader />
          <h1>Loading...</h1>
        ) : (
          <div className="product-section">
            {products.length ? (
              products.map((product, index) =>
                index <= 10 ? (
                  <div className='kb-search-content' key={product._id} >
                    <Card style={{ width: "400px", height: "350px", cursor: "pointer", marginRight: "25px" }}
                    >
                      <div
                        style={{ textAlign: 'center' }}
                        onClick={() => {
                          renderComponent(product);
                        }}
                      // className="product_card"
                      >                        <CardImg src={product.product_icon} style={{ width: '384px', height: '214px', textAlign: 'center', marginTop: '14px' }} alt='knowledge-base-image' top />
                        <CardBody className='text-center'>
                          <h4 style={{ marginTop: '24px' }}>{product.product_name}</h4>
                          {/* <p className='text-body mt-1 mb-0'>{product.product_description}</p> */}
                        </CardBody>
                      </div>
                    </Card>
                  </div>

                ) : null
              )
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <h1 style={{ fontSize: "25px" }}><ComponentSpinner /></h1>
              </div>
            )}
          </div>
        )}</Row>
      </div>
      )
    </Fragment>
  )
}

export default withRouter(KnowledgeBase)
