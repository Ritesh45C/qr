// ** React Imports
import { useState,useEffect } from "react";
import Select from 'react-select'
import { selectThemeColors } from '@utils'
// ** Icons Imports
import { X, Plus } from "react-feather";
import axios from 'axios'

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
  Button,
} from "reactstrap";
import DataTableWithButtons from "../../tables/data-tables/basic/TableExpandable";
import SubcategoryTable from "../../tables/data-tables/basic/subcategorytable";

const AddDesignation = () => {
  // ** State
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const[Category, setCategory] = useState([]);
  const [subCategory,setSubcategory]=useState([])
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
const onsubmit =( e)=>{
  e.preventDefault()

  var data={
    category:Category,subCategory:subCategory, BU:"LIGHTING",company:"Panasonic"
    }
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.post("https://Warranty.lsin.panasonic.com/api/category/subCategory",data,configs).then(res=>{
      alert("Successfully Created")
      console.log(res.data)
    })
}
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
        <CardHeader>
          <h4 className="card-title">Add SubCategory</h4>
        </CardHeader>

        <CardBody>
          <Repeater count={count}>
            {(i) => (
              <Form key={i}>
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
                      onChange={(e) => setCategory(e.value)}
                      isClearable
                    />
                  </Col>
                  <br/>
                  <Col md={4} className="mb-md-0 mb-1">
                    <Label className="form-label" for={`item-name-${i}`}>
                      Add Subcategory
                    </Label>
                    <Input
                      type="text"
                      id={`item-name-${i}`}
                      placeholder="SubCategory"
                      onChange={(e)=>setSubcategory(e.target.value)}
                    />
                  </Col>

                  <Col sm={12}>
                    <hr />
                  </Col>
              </Form>
            )}
          </Repeater>
          <Button className="btn-icon" color="primary" onClick={(e)=>onsubmit(e)}>
            <span className="align-middle ms-25">Create Subcategory</span>
          </Button>
        </CardBody>
      </Card>
      <Row>
        <Col sm="12">
          <SubcategoryTable />
        </Col>
      </Row>
    </>
  );
};

export default AddDesignation;
