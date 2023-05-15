// ** React Imports
import { Fragment, useState,useEffect } from 'react'

// ** Third Party Components
import Select from 'react-select'
import Cleave from 'cleave.js/react'
import { useForm, Controller } from 'react-hook-form'
import 'cleave.js/dist/addons/cleave-phone.us'
import Axios from 'axios'
// ** Reactstrap Imports
import { Row, Col, Form, Card, Input, Label, Button, CardBody, CardTitle, CardHeader, FormFeedback } from 'reactstrap'
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

// ** Utils
import { selectThemeColors } from '@utils'
import axios from 'axios'

// ** Demo Components
// import DeleteAccount from './DeleteAccount'

const countryOptions = [
  { value: 'uk', label: 'UK' },
  { value: 'usa', label: 'USA' },
  { value: 'france', label: 'France' },
  { value: 'russia', label: 'Russia' },
  { value: 'canada', label: 'Canada' }
]

const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  { value: 'dutch', label: 'Dutch' }
]

const currencyOptions = [
  { value: 'usd', label: 'USD' },
  { value: 'euro', label: 'Euro' },
  { value: 'pound', label: 'Pound' },
  { value: 'bitcoin', label: 'Bitcoin' }
]

const timeZoneOptions = [
  { value: '(GMT-12:00) International Date Line West', label: '(GMT-12:00) International Date Line West' },
  { value: '(GMT-11:00) Midway Island, Samoa', label: '(GMT-11:00) Midway Island, Samoa' },
  { value: '(GMT-10:00) Hawaii', label: '(GMT-10:00) Hawaii' },
  { value: '(GMT-09:00) Alaska', label: '(GMT-09:00) Alaska' },
  { value: '(GMT-08:00) Pacific Time (US & Canada)', label: '(GMT-08:00) Pacific Time (US & Canada)' },
  { value: '(GMT-08:00) Tijuana, Baja California', label: '(GMT-08:00) Tijuana, Baja California' },
  { value: '(GMT-07:00) Arizona', label: '(GMT-07:00) Arizona' },
  { value: '(GMT-07:00) Chihuahua, La Paz, Mazatlan', label: '(GMT-07:00) Chihuahua, La Paz, Mazatlan' },
  { value: '(GMT-07:00) Mountain Time (US & Canada)', label: '(GMT-07:00) Mountain Time (US & Canada)' },
  { value: '(GMT-06:00) Central America', label: '(GMT-06:00) Central America' },
  { value: '(GMT-06:00) Central Time (US & Canada)', label: '(GMT-06:00) Central Time (US & Canada)' },
  {
    value: '(GMT-06:00) Guadalajara, Mexico City, Monterrey',
    label: '(GMT-06:00) Guadalajara, Mexico City, Monterrey'
  },
  { value: '(GMT-06:00) Saskatchewan', label: '(GMT-06:00) Saskatchewan' },
  { value: '(GMT-05:00) Bogota, Lima, Quito, Rio Branco', label: '(GMT-05:00) Bogota, Lima, Quito, Rio Branco' },
  { value: '(GMT-05:00) Eastern Time (US & Canada)', label: '(GMT-05:00) Eastern Time (US & Canada)' },
  { value: '(GMT-05:00) Indiana (East)', label: '(GMT-05:00) Indiana (East)' },
  { value: '(GMT-04:00) Atlantic Time (Canada)', label: '(GMT-04:00) Atlantic Time (Canada)' },
  { value: '(GMT-04:00) Caracas, La Paz', label: '(GMT-04:00) Caracas, La Paz' },
  { value: '(GMT-04:00) Manaus', label: '(GMT-04:00) Manaus' },
  { value: '(GMT-04:00) Santiago', label: '(GMT-04:00) Santiago' },
  { value: '(GMT-03:30) Newfoundland', label: '(GMT-03:30) Newfoundland' }
]

const AccountTabs = ({ data }) => {
  var id = localStorage.getItem('id')
  var ds=localStorage.getItem('tokens')
  const [password,setPassword]= useState("")
  const [centeredModal, setCenteredModal] = useState(false)
  const [message,setMessage]=useState("")
  const [validate,setValidate]=useState(true)
  const [defaultValues,setDefaultValues]=useState({
      name:"",
      email:"",
      company:"",
      phNumber:"",
      zipCode:"",
      password:"",
      userRole:"",
      region:"",
  
    })
  console.log(ds)
  const configs = {
    headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
}
console.log(configs)
    useEffect(() => {
        Axios.get(`https://warranty.lsin.panasonic.com/api/user/${id}`,configs).then(res=>{
          setDefaultValues({
            name:res.data.msg.name,
            email:res.data.msg.email,
            company:res.data.msg.company,
            phNumber:res.data.msg.phone,
            zipCode:res.data.msg.pincode,
            password:"",
            userRole:res.data.msg.userRole,
            designation:res.data.msg.designation,
            region:res.data.msg.region,



          })

            console.log(res.data.msg)
        })
    }, [])
    
  // ** Hooks
  // const defaultValues = {
  //   lastName: '',
  //   firstName:"",
  //   email:"",
  //   company:"",
  //   phNumber:"",
  //   zipCode:"",
  //   country:"",
  //   userRole

  // }
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  // ** States
//   const [avatar, setAvatar] = useState(data.avatar ? data.avatar : '')

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }
  const onValidate=(e)=>{
    setPassword(e.target.value)
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{11,}$/
    if(!passRegex.test(e.target.value)) {
      setValidate('has-danger')
        
    }else{
      setValidate("has-success")
    }
  }

  const onSubmit = data => {
    console.log(data)
    // if (Object.values(data).every(field => field.length > 0)) {
    //   return null
    // } else {
    //   for (const key in data) {
    //     if (data[key].length === 0) {
    //       setError(key, {
    //         type: 'manual'
    //       })
    //     }
    //   }
    // }
  }
  const onPasswordSubmit= (e)=>{
    if(validate==="has-danger"){
      alert("Password is Invalid")
      return
    }
    e.preventDefault()
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
  }
    const data= {
      "password": password
  }
      Axios.put("https://Warranty.lsin.panasonic.com/api/user/update-passwd",data,configs).then(res=>{
        setCenteredModal(true)  
        setMessage(res.data.msg)
      console.log(res,'resposen')
      }
      ).catch(err=>      {
        setCenteredModal(true)  

         setMessage("*Password must be at least 11 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character")      
      } )
  }

  const handleImgReset = () => {
    setAvatar(require('@src/assets/images/avatars/avatar-blank.png').default)
  }

  return (
    <Fragment>
       <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Update Status!</ModalHeader>
          <ModalBody>
            {message}
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setCenteredModal(!centeredModal)}>
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Profile Details</CardTitle>
        </CardHeader>
        <CardBody className='py-2 my-25'>
          {/* <div className='d-flex'>
            <div className='me-25'>
              <img className='rounded me-50' src={""} alt='Generic placeholder image' height='100' width='100' />
            </div>
            <div className='d-flex align-items-end mt-75 ms-1'>
              <div>
                <Button tag={Label} className='mb-75 me-75' size='sm' color='primary'>
                  Upload
                  <Input type='file' onChange={onChange} hidden accept='image/*' />
                </Button>
                <Button className='mb-75' color='secondary' size='sm' outline onClick={handleImgReset}>
                  Reset
                </Button>
                <p className='mb-0'>Allowed JPG, GIF or PNG. Max size of 800kB</p>
              </div>
            </div>
          </div> */}
          <Form className='mt-2 pt-50' onSubmit={handleSubmit(onSubmit)}>
            <Row>
              {/* <Col sm='6' className='mb-1'>
                <Label className='form-label' for='firstName'>
                  First Name
                </Label>
                <Controller
                  name='firstName'
                  control={control}
                  render={({ field }) => (
                    <Input id='firstName' placeholder='John' invalid={errors.firstName && true} {...field} />
                  )}
                />
                {errors && errors.firstName && <FormFeedback>Please enter a valid First Name</FormFeedback>}
              </Col> */}
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='firstName'>
                   Name
                </Label>
               
                    <Input defaultValue={defaultValues.name} id='firstName' placeholder='' />
                  
              
                {errors.firstName && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='emailInput'>
                  E-mail
                </Label>
                <Input disabled id='emailInput' type='email' name='email' placeholder='Email' defaultValue={defaultValues.email}/>
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='designation'>
                   Designation
                </Label>
               
                    <Input defaultValue={defaultValues.designation} id='designation' placeholder='' />
                  
              
                {errors.firstName && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='company'>
                  Company
                </Label>
                <Input disabled defaultValue={defaultValues.company} id='company' name='company' placeholder='Company Name' />
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='phNumber'>
                  Phone Number
                </Label>
                <Input defaultValue={defaultValues.phNumber} id='phNumber' placeholder='' />
                {errors.firstName && <FormFeedback>Please enter a valid Last Name</FormFeedback>}

              
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='address'>
                  Address
                </Label>
                <Input id='address' name='address' placeholder='12, Business Park' />
              </Col>
             
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='zipCode'>
                  Zip Code
                </Label>
                <Input  defaultValue={defaultValues.zipCode}  id='zipCode' name='zipCode' placeholder='123456' maxLength='6' />
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='country'>
               Country
                </Label>
            
                                 <Input type='country' value={defaultValues.country}  id='country' name='password' placeholder='country' />

            
              </Col>
             
             
              <Col className='mt-2' sm='12'>
                <Button type='submit' className='me-1' color='primary'>
                  Save changes
                </Button>
                <Button color='secondary' outline>
                  Discard
                </Button>
              </Col>
            </Row>
          </Form>
          <hr/>
          <div>
            <h4 style={{padding:"15px 0"}}>Change Password</h4>
            <Col sm='3' className='mb-1'>
                <Label className='form-label' for='password'>
                New  Password
                </Label>
            
                <Input valid={ validate === 'has-success' } invalid={validate==="has-danger"} width={250} type='password' value={password} onChange={e=>onValidate(e)}  id='password' name='password' placeholder='password' />
                  <div className='passwordDesciption'>*Password must be at least 11 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character</div>
                <Button onClick={(e)=>onPasswordSubmit(e)} style={{margin:"20px 0"}}  className='me-1' color='danger'>
                  Change Password
                </Button>
              </Col>
          </div>
        </CardBody>
      </Card>
      {/* <DeleteAccount /> */}
    </Fragment>
  )
}

export default AccountTabs
