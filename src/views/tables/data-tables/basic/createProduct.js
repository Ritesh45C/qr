// ** React Imports
import { useState,useEffect } from "react";
import Select from 'react-select'
import { selectThemeColors } from '@utils'
// ** Icons Imports
import { X, Plus } from "react-feather";
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

// ** Custom Components
import Repeater from "@components/repeater";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  Label,
  FormGroup,
  Input,
} from "reactstrap";
// import DataTableWithButtons from "../../tables/data-tables/basic/TableExpandable";
// import SubcategoryTable from "../../tables/data-tables/basic/subcategorytable";

const CreateProduct = () => {
  // ** State
  const [count, setCount] = useState(1);
  const [centeredModal, setCenteredModal] = useState(false)
  const [data, setData] = useState([]);
  const[Category, setCategory] = useState([]);
  const [subCategory,setSubcategory]=useState([])
  const [sub,setSub]=useState("")
  const [itemCode, setItemCode]=useState("")
  const [warranty,setWarranty]=useState(0)
  const [description,setDescription]=useState("")
  const [bu,setBu]=useState("")
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem("tokens")}` },
    };
    axios
      .get("https://warranty.lsin.panasonic.com/api/category", configs)
      .then((res) => {
        console.log(res.data);
        var data = res.data.map((a) => {
          return({
              value: a.category,
          label: a.category
          })
        
        });
        setOptions(data);
        setData(res.data);
      });
  };
  const bus= [{
    value:"Lighting",
label: "Lighting"
}]
const onsubmit =( e)=>{
  e.preventDefault()

  var data={
    category:Category,subCategory:sub, businessUnit:"LIGHTING",company:"Panasonic",description:description,
    itemCode:itemCode,warrantyMonths:Number(warranty)
    }
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.post("https://Warranty.lsin.panasonic.com/api/product",data,configs).then(res=>{
      setCenteredModal(true) 
      console.log(res.data)
    })
}

const fetchSubcategory= async(key)=>{
  setCategory(key)
  const baseUrls=    "https://Warranty.lsin.panasonic.com/api/category/subCategory/";
  // const baseUrl = "https://Warranty.lsin.panasonic.com/api/generator/?search=";
  const configs = {
    headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
}
  axios.get(`${baseUrls}${key}`,configs).then(res=>{
     setData(res.data)
     var data = res.data.map((a) => {
      return({
          value: a.subCategory,
      label: a.subCategory
      })
    
    });
    setSubcategory(data);
    // setData(res.data);
 
})}
  const increaseCount = () => {
    setCount(count + 1);
  };

  const deleteForm = (e) => {
    e.preventDefault();
    e.target.closest("form").remove();
  };

  return (
    <>
      <Card>
      <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Success!</ModalHeader>
          <ModalBody>
           Product  Successfully Created
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setCenteredModal(!centeredModal)}>
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>
        <CardHeader>
          <h4 style={{padding:"5px"}} className="card-title">Add Product</h4>
        </CardHeader>

        <CardBody>
          
              <Form key={2}>
                <Col md={4} className="mb-md-0 mb-1">
                    <Label className="form-label">Choose Category</Label>
                    <Select
                    styles={{width:"250px"}}
                      theme={selectThemeColors}
                      className="react-select"
                      classNamePrefix="select"
                      defaultValue={options[1]}
                      name="clear"
                      options={options}
                      onChange={e=>fetchSubcategory(e.value)}
                      isClearable
                    />
                  </Col>
                  <br/>
                  <Col md={4} className="mb-md-0 mb-1">
                    <Label className="form-label" for={`item-name-`}>
                      Add Subcategory
                    </Label>
                    <Select
                    styles={{width:"250px"}}
                      theme={selectThemeColors}
                      className="react-select"
                      classNamePrefix="select"
                      defaultValue={subCategory[1]}
                      name="clear"
                      options={subCategory}
                      onChange={e=>setSub(e.value)}
                      isClearable
                    />
                  
                  </Col>
                  <Col md={4} className="mb-md-0 mb-1">
                    <Label className="form-label" for={`item-name-`}>
                      Bussiness Unit
                    </Label>
                    <Select
                    styles={{width:"250px"}}
                      theme={selectThemeColors}
                      className="react-select"
                      classNamePrefix="select"
                      defaultValue={bus[1]}
                      name="clear"
                      options={bus}
                      onChange={e=>setBu(e.value)}
                      isClearable
                    />
                  
                  </Col>
                  <Col md={4} className='mb-md-0 mb-1'>
                  <Label className='form-label' for={`item-name-`}>
                    Item Code
                  </Label>
                  <Input onChange={(e)=>setItemCode(e.target.value)} type='text' id={`item-name-}`} placeholder='Item Code' />
                </Col>
                <Col md={4} className='mb-md-0 mb-1'>
                  <Label className='form-label' for={`item-namse-`}>
                   Description
                  </Label>
                  <Input onChange={(e)=>setDescription(e.target.value)} type='textarea' id={`item-namse-}`} placeholder='Description...' />
                </Col>
                 <Col md={4} className='mb-md-0 mb-1'>
                  <Label className='form-label' for={`item-namse-`}>
                   Warranty Months
                  </Label>
                  <Input onChange={(e)=>setWarranty(e.target.value)} type='text' id={`item-namse-}`} placeholder='months..' />
                </Col>
                  <Col sm={12}>
                    <hr />
                  </Col>
              </Form>
           
          <Button style={{margin:"15px 0"}} className="btn-icon" color="primary" onClick={(e)=>onsubmit(e)}>
            <span className="align-middle ms-25">Add Product</span>
          </Button>
        </CardBody>
      </Card>
      <Row>
        <Col sm="12">
          {/* <SubcategoryTable /> */}
        </Col>
      </Row>
    </>
  );
};

export default CreateProduct;
