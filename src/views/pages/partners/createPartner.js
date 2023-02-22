import axios from 'axios';
import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button,Card,CardBody} from 'reactstrap';

export default function createPartner() {
  const [formData, setFormData] = useState({});
  const [query, setQuery] = useState('');
  const [options, setOptions] = useState([]);
  const [city,setCity]=useState("")
  const [pincode,setPincode]=useState("")
  const handlepincode = (event) => {
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    setQuery(event.target.value);
    if(event.target.value.length>3){ axios.get(`https://warranty.lsin.panasonic.com/api/pincode/${event.target.value}`,configs)
    .then(res =>{
      if(res.data.pincode){
        setOptions([res.data.pincode])
        setPincode(res.data.Pincode)
      }else{
        setOptions([{City:"Not Found"}])
      }
    } );}

    // Call the API and update the options state with the response
   
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }
  const handleSubmit=(event)=>{
    event.preventDefault();

    var data={
      partnerId:formData.partnerId,
      partnerName:formData.partnerName,
      partnerCategory:formData.partnerCategory,
      city:city,
      pincode:pincode,
      partnerUserEmailId:formData.partnerUserEmailId,
      partnerAppUserPhoneNo:formData.partnerAppUserPhoneNo,
    }
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    axios.post("https://Warranty.lsin.panasonic.com/api/partner/",data,configs).then(res=>{
      alert("Successfully Created")
      console.log(res.data)
    })
  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // submit form data to server or perform other action
  // }
const handleCity=(e)=>{
  console.log(e.target.value)
  setCity(e.target.value)
}
  return (
    <Card>
     
      <CardBody  style={{width:"700px",padding:"20px"}}>
      <h4>Create Partner</h4>
      <br/>
    <Form onSubmit={handleSubmit}>
    <FormGroup>
        <Label for="partnerId">Partner Id:</Label>
        <Input type="text" name="partnerId" id="partnerId" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="partnerName">Partner Name:</Label>
        <Input type="text" name="partnerName" id="partnerName" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="partnerCategory">Partner Category:</Label>
        <Input type="text" name="partnerCategory" id="partnerCategory" onChange={handleChange} />
      </FormGroup>
      
      <FormGroup>
        <Label for="partnerUserEmailId">Partner User Email ID:</Label>
        <Input type="email" name="partnerUserEmailId" id="partnerUserEmailId" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="partnerAppUserPhoneNo">Partner App User Phone No:</Label>
        <Input type="text" name="partnerAppUserPhoneNo" id="partnerAppUserPhoneNo" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="query">Pincode:</Label>
        <Input type="text" name="query" id="query" onChange={handlepincode} />
      </FormGroup>

      <FormGroup>
        <Label for="options">City:</Label>
        <Input type="select" name="options" id="options" onSelect={handleCity}>
          {options.length?options.map(option => (
            <option key={option.City} value={option.City}>{option.City}</option>
          )): <option key="city" value="city">city</option>}
        </Input>
      </FormGroup>
      <Button color='primary' type="submit">Submit</Button>
    </Form>
    </CardBody>
    </Card>

  );
}


// import React, { useState } from 'react';
// import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

// export default function createPartner(){
//   const [formData, setFormData] = useState([
//     {
//       selectField: '',
//       inputField1: '',
//       inputField2: ''
//     }
//   ]);

//   const handleChange = (e, index) => {
//     const newFormData = [...formData];
//     newFormData[index][e.target.name] = e.target.value;
//     setFormData(newFormData);
//   }

//   const handleAdd = () => {
//     setFormData([...formData, {
//       selectField: '',
//       inputField1: '',
//       inputField2: ''
//     }]);
//   }

//   const handleRemove = index => {
//     setFormData(formData.filter((item, i) => i !== index));
//   }

//   return (
//     <Form>
//       {formData.map((item, index) => (
//         <div key={index}>
//           <select name="selectField" value={item.selectField} onChange={e => handleChange(e, index)}>
//             <option value="">Select...</option>
//             <option value="Option 1">Option 1</option>
//             <option value="Option 2">Option 2</option>
//             <option value="Option 3">Option 3</option>
//           </select>
//           <Input name="inputField1" value={item.inputField1} onChange={e => handleChange(e, index)} />
//           <Input name="inputField2" value={item.inputField2} onChange={e => handleChange(e, index)} />
//           <Button type="button" onClick={() => handleRemove(index)}>Remove</Button>
//         </div>
//       ))}
//       <Button type="button" onClick={handleAdd}>Add</Button>
//     </Form>
//   );
// }

// import React, { useState } from 'react';
// import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

// export default function createPartner() 

// {
//   const [inputs, setInputs] = useState([{ "description":"LEDCÂ  PCD1100-40QS-01/220-240/1-10V A",
//   "itemCode": "",}]);

//   const handleChange = (index, event) => {
//     const values = [...inputs];
//     values[index].itemCode = event.target.value;
//     setInputs(values);
//   };

//   const handleAddInput = () => {
//     const values = [...inputs];
//     values.push({ "description":"LEDCÂ  PCD1100-40QS-01/220-240/1-10V A",
//     "itemCode": "",});
//     setInputs(values);
//   };

//   return (
//     <Form >
//       {inputs.map((input, index) => (
//         <FormGroup key={index} style={{display:'flex'}}>
//           {/* <Label>Input {index + 1}</Label> */}
//           <Input
//             type="select"
//             value={input.itemCode}
//             onChange={(event) => handleChange(index, event)}
//           >
//             <option>Option 1</option>
//             <option>Option 2</option>
//             <option>Option 3</option>
//           </Input>
//           <Input
//             type="text"
//             value={input.value}
//             onChange={(event) => handleChange(index, event)}
//           />
//         </FormGroup>
//       ))}
//       <Button onClick={handleAddInput}>Add input</Button>
//     </Form>
//   );
// };
