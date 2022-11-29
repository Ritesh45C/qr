// ** React Imports
import { useState } from 'react'

// ** Icons Imports
import { X, Plus } from 'react-feather'
import { selectThemeColors } from '@utils'
import axios, { Axios } from 'axios'

// ** Custom Components
import Select from 'react-select'
// ** Custom Components
import Repeater from '@components/repeater'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, Form, Label, Input, Button } from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type }  from 'react-bootstrap-table2-editor';
import { useEffect } from 'react'
import { post } from 'jquery'


const rowCount= [{
  "value": "5",
  "label": "5",
},{
  "value": "10",
  "label": "10",
},{
  "value": "15",
  "label": "15",
},]
const supplier= [{
  "value": "2043376",
  "label": "Deep Collection",
  "partnerCategory": "supplier"
},{
  "value": "2053966",
  "label": "Evergreen Engineering Co Pvt Ltd",
  "partnerCategory": "supplier"
},{
  "value": "2073312",
  "label": "Genus Electrotech Ltd",
  "partnerCategory": "supplier"
},{
  "value": "2073514",
  "label": "Glowtech Sign And Displays",
  "partnerCategory": "supplier"
},{
  "value": "2170623",
  "label": "Pms Sunpu Lighting Co. Llp",
  "partnerCategory": "supplier"
},{
  "value": "2188146",
  "label": "Rama Industries",
  "partnerCategory": "supplier"
},{
  "value": "2116304",
  "label": "Kgn Lights",
  "partnerCategory": "supplier"
},{
  "value": "2122760",
  "label": "Lumens Aircon Private Limited",
  "partnerCategory": "supplier"
},{
  "value": "2170859",
  "label": "Pramod Telecom Pvt Ltd",
  "partnerCategory": "supplier"
},{
  "value": "2201352",
  "label": "Svn Opto Electronics Private Limited",
  "partnerCategory": "supplier"
},{
  "value": "2204362",
  "label": "Techno Electromech Pvt. Ltd.",
  "partnerCategory": "supplier"
},{
  "value": "2225737",
  "label": "Virtuoso Optoelectronics Limited",
  "partnerCategory": "supplier"
},{
  "value": "2020554",
  "label": "Apt Electronics Pvt Ltd",
  "partnerCategory": "supplier"
},{
  "value": "2122780",
  "label": "Lumisense Optoelectronics Pvt Ltd",
  "partnerCategory": "supplier"
},{
  "value": "2026083",
  "label": "Bright Electricals.",
  "partnerCategory": "supplier"
},{
  "value": "2034069",
  "label": "Calcom Vision Ltd.",
  "partnerCategory": "supplier"
},{
  "value": "2045878",
  "label": "Dixon Technologies (India) Limited",
  "partnerCategory": "supplier"
},{
  "value": "2045948",
  "label": "Dhanashree Electronics Ltd.",
  "partnerCategory": "supplier"
},{
  "value": "2053953",
  "label": "Ensave Devices Pvt Ltd",
  "partnerCategory": "supplier"
},{
  "value": "2105120",
  "label": "Jaisingh Innovations Llp",
  "partnerCategory": "supplier"
},{
  "value": "2116350",
  "label": "Kundan Switchgears Pvt. Ltd.",
  "partnerCategory": "supplier"
},{
  "value": "2116367",
  "label": "Kundan Edifice Pvt Ltd",
  "partnerCategory": "supplier"
},{
  "value": "2145882",
  "label": "Nav Shikha Polypack Industries Pvt Ltd",
  "partnerCategory": "supplier"
},{
  "value": "2200563",
  "label": "Sakar Electricals And Electronics Pvt Ltd",
  "partnerCategory": "supplier"
},{
  "value": "2201279",
  "label": "System Level Solutions India Pvt Ltd",
  "partnerCategory": "supplier"
},{
  "value": "2201346",
  "label": "Starlite Lamps",
  "partnerCategory": "supplier"
}]
const colourOptions = [
  { value: 'LIGHTING', label: 'LIGHTING' },
  // { value: 'blue', label: 'Blue' },
  // { value: 'LIGHTING', label: 'LIGHTING' },
  // { value: 'red', label: 'Red' },
  // { value: 'LIGHTING', label: 'LIGHTING' }
]




const CreateJobs = () => {
  // ** State
  
const products=[{
  "reportType": "Type1",
  "description":"LEDCÂ  PCD1100-40QS-01/220-240/1-10V A",
  "itemCode": "33",
  "customerApproval": true,
  "dealerApproval": false,
  "units": ""
},
{
  "reportType": "Type2",
  "description": "LEDCÂ  PCD1100-40QS-01/220-240/1-10V A",
  "itemCode": "23434",
  "customerApproval": true,
  "dealerApproval": false,
  "units": ""
},
{
  "reportType": "Type3",
  "description":"LEDCÂ  PCD1100-40QS-01/220-240/1-10V A",
  "itemCode": "23434s",
  "customerApproval": true,
  "dealerApproval": false,
  "units": ""
}
]

  const [count, setCount] = useState(5)
  const [itemCodes,setitemCode]=useState( [{
    value: '10169378',
    label: '10169378'
  },])
  const [postData,setPostData]=useState([])
  const [supplierr,setSupplier]=useState([])
  const [productData,setProductData]=useState(products)

  useEffect(()=>{
    console.log(products)

  },[productData])

  const increaseCount = (count) => {
    console.log('ran')
    var counts=Number(count)
    const objects = [];
  for(let i = 1; i <= count; i++) {
    let obj = {
      "reportType": `Type${i}`,
      "description":"LEDCÂ  PCD1100-40QS-01/220-240/1-10V A",
      "itemCode": "23434s",
      "customerApproval": true,
      "dealerApproval": false,
      "units": ""
  };
    objects.push(obj);
    
  }
  console.log(objects)
  setProductData(objects)
  console.log(productData,'prd')

    setCount(count + 1)
  }

  const callApi=async()=>{
    var data={
      items:postData
    }
    axios.post("http://15.207.0.199/api/generator/batch",data).then(res=>{
      console.log(res.data)
    })
  }

  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('form').remove()
  }

 const handleDataChange = ({ dataSize }) => {
    console.log(dataSize)
    // this.setState({ rowCount: dataSize });
  }

  const selectRow = {
    mode: 'checkbox',
    onSelectAll: (isSelect, rows, e) => {
      console.log(rows)
      let data= rows.map(a=>{
        return({
          
            "itemCode": a.itemCode,
            "supplier": supplierr,
            "units": a.units
        
        })
      })
      console.log(data)
      setPostData(data)
      // if (isSelect && SOME_CONDITION) {
      //   return [1, 3, 4];  // finally, key 1, 3, 4 will being selected 
      // }
    }
  };
  const fetchProducts= async(key)=>{
    axios.get(`http://15.207.0.199/api/generator/?search=${key}`).then(res=>{
      console.log(res.data.msg)
      // setData(res.data.msg)
      var colourOptions=res.data.msg.map(a=>{
       return({
         value:a.itemCode,
         label:a.itemCode
       })
      })
      setitemCode(colourOptions)
  })}

  const columns = [ {
    dataField: 'itemCode',
    text: 'Product Name',
    editor: {
      type: Type.SELECT,
      options: itemCodes
    }
  },
  {
    dataField: 'description',
    text: 'Description'
  },
  {
      dataField: 'units',
      text: 'Units'
    },
  ];

console.log(products)
  return (
    <Card>
      <CardHeader>
        <h4 className='card-title'>Jobs</h4>
        <Row>

          <Col className='mb-1' md='6' sm='12'>
            <Label className='form-label'>Select Supplier</Label>
            <Select
              theme={selectThemeColors}
              className='react-select2'
              classNamePrefix='select2'
              defaultValue={supplier[1]}
              options={supplier}
              onChange={e=>setSupplier(e.value)}

              isClearable={false}
            />
          </Col>
          <Col className='mb-1' md='6' sm='12'>
            <Label className='form-label'>Select Bussiness Unit</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[1]}
              name='clear'
              options={colourOptions}
              onChange={e=>fetchProducts(e.value)}
              isClearable
            />
          </Col>
          <Col className='mb-1' md='6' sm='12'>
            <Label className='form-label'>Select Rows</Label>
            <Select
              theme={selectThemeColors}
              className='react-selesct2'
              classNamePrefix='selesct2'
              defaultValue={rowCount[1]}
              options={rowCount}
              onChange={e=>increaseCount(e.value)}

              isClearable={false}
            />
          </Col>
          </Row>
      </CardHeader>

      <CardBody>
      <BootstrapTable
  keyField="reportType"
  data={ productData }
  columns={ columns }
  onDataSizeChange={ handleDataChange }
  selectRow={selectRow}
  cellEdit={ cellEditFactory({
    mode: 'click',
    blurToSave: true,

    
  }) }
/>
        <Button className='btn-icon' color='primary' onClick={callApi}>
          <Plus size={14} />
          <span className='align-middle ms-25'>Save</span>
        </Button>
      </CardBody>
    </Card>
  )
}

export default CreateJobs
