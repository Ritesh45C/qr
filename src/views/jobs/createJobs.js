// ** React Imports
import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

// ** Icons Imports
import { X, Plus } from 'react-feather'
import { selectThemeColors } from '@utils'
import axios, { Axios } from 'axios'
import { AsyncTypeahead, Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
// ** Custom Components
import Select from 'react-select'
// ** Custom Components
import Repeater from '@components/repeater'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, Form, Label, Input, Alert ,FormGroup} from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type }  from 'react-bootstrap-table2-editor';
import { useEffect } from 'react'


const rowCount= [
  {
    "value": "1",
    "label": "1",
  }, {
    "value": "2",
    "label": "2",
  }, {
    "value": "3",
    "label": "3",
  }, {
    "value": "4",
    "label": "4",
  }, {
    "value": "5",
    "label": "5",
  }, {
    "value": "6",
    "label": "6",
  }, {
    "value": "7",
    "label": "7",
  }, {
    "value": "8",
    "label": "8",
  },
  {
    "value": "9",
    "label": "9",
  },
  {
  "value": "10",
  "label": "10",
}, {
  "value": "11",
  "label": "11",
}, {
  "value": "12",
  "label": "12",
}, {
  "value": "13",
  "label": "13",
}, {
  "value": "14",
  "label": "14",
},{
  "value": "15",
  "label": "15",
},{
  "value": "20",
  "label": "20",
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

  const [count, setCount] = useState(1)
  const [itemCodes,setitemCode]=useState( [{
    value: '10169378',
    label: '10169378'
  },])
  const [postData,setPostData]=useState([])
  const [supplierr,setSupplier]=useState([])
  const [productData,setProductData]=useState(products)
  const [isLoading, setIsLoading] = useState(false);
  const [centeredModal, setCenteredModal] = useState(false)
const [jobID,setJobId]=useState('')
  const [formData, setFormData] = useState([ {
    "selectedOption":"",
    "itemCode": "",
    "supplier": "",
    "units": ""
},{
  "selectedOption":"",
  "itemCode": "",
  "supplier": "",
  "units": ""
},{
  "selectedOption":"",
  "itemCode": "",
  "supplier": "",
  "units": ""
},{
  "selectedOption":"",
  "itemCode": "",
  "supplier": "",
  "units": ""
},{
  "selectedOption":"",
  "itemCode": "",
  "supplier": "",
  "units": ""
}]);
var options= [{
  value: '10169378',
  label: '10169378'
},]
  const addItem = () => {
    setFormData([...formData, { selectedOption: '', inputValue: '' }]);
  }

  const handleSelectChange = (selectedOption, index) => {
    if(selectedOption.length<1) return
    // const updatedFormData = formData.map((item, i) => {
    //   if (i === index) {
    //     return { ...item, selectedOption };
    //   }
    //   return item;
    // });
    const values = [...formData];
    // values[index].selectedOption=selectedOption[0].value
    values[index].itemCode=selectedOption[0].label
    values[index].description = selectedOption[0].description;
    // values[index].units=selectedOption[0].unit
//     setInputs(values);

    setFormData(values);
  }

  const handleInputChange = (event, index) => {
    const updatedFormData = formData.map((item, i) => {
      if (i === index) {
        return { ...item, units: event.target.value };
      }
      return item;
    });
    setFormData(updatedFormData);
  }

  const increaseCount = (count) => {
    console.log('ran')
    var counts=Number(count)
    const objects = [];
  for(let i = 1; i <= count; i++) {
    let obj = {
      "selectedOption":"",
    "itemCode": "",
    "supplier": "",
    "units": ""
  };
    objects.push(obj);
    
  }
  console.log(objects)
  setFormData(objects)
  console.log(productData,'prd')

    setCount(count + 1)
  }

  const callApi=async()=>{
    // if(postData.length<1){
    //   console.log('ran')
    //   alert("Please select the products")
    //   return
    // }
    if(!supplierr.length){
      alert("Please select the supplier")
      return
    }

    let jobdata= formData.map(a=>{
      return({
          "itemCode": a.itemCode,
          "supplier": supplierr,
          "units": Number(a.units)
      
      })
    })
    console.log(jobdata)

    let error=false
  
      jobdata.forEach((obj) => {
        if(!error){
  Object.entries(obj).forEach(([key, value]) => {
        if (!value) {
          error=true
          alert(`${key} is required ! `);
          return
        }
      });
        }
    
    });
    
    
    if(error){
      console.log("error")
      return
    }
    var data={
      items:jobdata
    }
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.post("https://Warranty.lsin.panasonic.com/api/generator/batch",data,configs).then(res=>{
    setJobId(res.data.msg.JobData.jobID)
    setCenteredModal(true) 

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
    style: {  width:"200px" },
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
    const baseUrls=    "https://Warranty.lsin.panasonic.com/api/product/?company=PANASONIC&businessUnit=";
    // const baseUrl = "https://Warranty.lsin.panasonic.com/api/generator/?search=";
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.get(`${baseUrls}${key}`,configs).then(res=>{
      console.log(res.data.msg)
      // setData(res.data.msg)
      var colourOptions=res.data.msg.map(a=>{
       return({
        //  value:a.itemCode,
         label:a.itemCode,
         description:a.description
       })
      })
      setitemCode(colourOptions)
  })}
  const handleSearch = (query) => {
    setIsLoading(true);
    const baseUrls=    "https://Warranty.lsin.panasonic.com/api/product/?search=";
    // const baseUrl = "https://Warranty.lsin.panasonic.com/api/generator/?search=";
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.get(`${baseUrls}${query}`,configs).then(res=>{
      console.log(res.data.msg)
      // setData(res.data.msg)
      var colourOptions=res.data.msg.map(a=>{
       return({
        //  value:a.itemCode,
         label:a.itemCode,
         description:a.description
       })
      })
      setitemCode(colourOptions)
      setIsLoading(false);
    // fetch(`${SEARCH_URI}?q=${query}+in:login&page=1&per_page=50`)
    //   .then((resp) => resp.json())
    //   .then(({ items }: Response) => {
    //     setOptions(items);
    //     setIsLoading(false);
    //   });
  })
  };

  const columns = [ {
    dataField: 'itemCode',
    text: 'Product Name',
    style: {  width:"200px" },

    editor: {
      type: Type.SELECT,
      options: itemCodes
    }
  },
  // {
  //   dataField: 'description',
  //   text: 'Description'
  // },
  {
      dataField: 'units',
      style: {  width:"200px" },
      text: 'Units'
    },
  ];

console.log(products)
  return (
    <Card >
         <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Job Successfully Created!</ModalHeader>
          <ModalBody>
            Your Job Id is {jobID}
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setCenteredModal(!centeredModal)}>
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>
      <CardHeader>
        <h4 style={{marginLeft:"30px"}} className='card-title'>Create Job</h4>
        <Row style={{width:"700px"}}>
        <Col className='mb-1' md='3' sm='3'>
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
         
          <Col className='mb-1' md='3' sm='3'>
            <Label className='form-label'>Create Rows</Label>
            <Select
              theme={selectThemeColors}
              className='react-selesct2'
              classNamePrefix='selesct2'
              defaultValue={rowCount[0]}
              options={rowCount}
              onChange={e=>increaseCount(e.value)}

              isClearable={false}
            />
          </Col>
          </Row>
      </CardHeader>

      <CardBody  className='jobsTable'>
   
 <div>
  <div className='customColumns'>
    <div>Product Code</div>
    <div style={{width:"350px"}} className='description'>Description</div>
    <div style={{width:"200px"}} className='units'
>Units</div>

  </div>
      {formData.map((item, index) => (
        <div key={index} style={{display:"flex"}}>
          <AsyncTypeahead
            id={`typeahead-${index}`}
            options={itemCodes}
            labelKey="label"
            onSearch={handleSearch}
            style={{marginRight:"20px"}}
            selected={item.selectedOption}
            onChange={(selected) => handleSelectChange(selected, index)}
          />
          <Input
            type="text"
            style={{width:"450px",marginRight:"20px"}}

            value={item.description}
          />
          <Input
            type="text"
            style={{width:"250px",marginRight:"20px"}}
            value={item.units}
            onChange={(event) => handleInputChange(event, index)}
          />
        </div>
      ))}
      <Button className='mt-2' color='primary' onClick={callApi}>Create Job</Button>
    </div>
      </CardBody>
    </Card>
  )
}

export default CreateJobs
