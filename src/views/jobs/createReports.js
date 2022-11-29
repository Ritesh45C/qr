// ** React Imports
import { useState } from 'react'

// ** Icons Imports
import { X, Plus } from 'react-feather'
import { selectThemeColors } from '@utils'

// ** Custom Components
import Select from 'react-select'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, Form, Label, Input, Button } from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type }  from 'react-bootstrap-table2-editor';
const colourOptions = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' }
]
const columns = [{
  dataField: 'reportType',
  text: 'Report Type'
}, {
  dataField: 'itemCode',
  text: 'Product Name',
},
{
    dataField: 'units',
    text: 'Units'
  },
{
  dataField: 'status',
  text: 'Status'
}];

const products=[{
    "reportType": "Type1",
    "status": "active",
    "itemCode": "123124124",
    "customerApproval": true,
    "dealerApproval": false,
    "units": 67890
},
{
    "reportType": "Type2",
    "status": "inactive",
    "itemCode": "123124124",
    "customerApproval": true,
    "dealerApproval": false,
    "units": 12340
},
{
    "reportType": "Type3",
    "status": "active",
    "itemCode": "123124124",
    "customerApproval": true,
    "dealerApproval": false,
    "units": 1230
}
]
const CreateReports = () => {
  // ** State
  const [count, setCount] = useState(5)
  const [data,setdata]=useState(products)

  const increaseCount = () => {
    setCount(count + 1)

  }

  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('form').remove()
  }

  return (
    <Card>
      <CardHeader>
        <h4 className='card-title'>Reports</h4>
        <Row>
          <Col className='mb-1' md='6' sm='12'>
            <Label className='form-label'>Basic</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[0]}
              options={colourOptions}
              isClearable={false}
            />
          </Col>
          <Col className='mb-1' md='6' sm='12'>
            <Label className='form-label'>Clearable</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[1]}
              name='clear'
              options={colourOptions}
              isClearable
            />
          </Col>
          </Row>
      </CardHeader>

      <CardBody>
      <BootstrapTable
  keyField="id"
  data={ products }
  columns={ columns }
  cellEdit={ cellEditFactory({
    mode: 'click',
    blurToSave: true
  }) }
/>
        <Button className='btn-icon' color='primary' onClick={increaseCount}>
          <Plus size={14} />
          <span className='align-middle ms-25'>Add New</span>
        </Button>
      </CardBody>
    </Card>
  )
}

export default CreateReports
