// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import Select from 'react-select'
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const PersonalInfo = ({ stepper, type }) => {
  const countryOptions = [
    { value: 'UK', label: 'UK' },
    { value: 'USA', label: 'USA' },
    { value: 'Spain', label: 'Spain' },
    { value: 'France', label: 'France' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Australia', label: 'Australia' }
  ]

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Japanese', label: 'Japanese' }
  ]

  return (
    <Fragment>
      <h3 className='mb-10'>Tell us who would you </h3>
      <h4 className='mb-10'>like to insure.</h4>
      <br /><br />
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <div class="awesomeRadio">
            <form action="#">
              <input type="radio" name="radio-choice" id="radio-choice-1" value="choice-1" />
              <label for="radio-choice-1"><i class="fa fa-file-word-o fa-4x"></i> Me</label>

              <input type="radio" name="radio-choice" id="radio-choice-2" value="choice-2" />
              <label for="radio-choice-2"><i class="fa fa-file-pdf-o"></i> Me+ My Wife</label>
              <input type="radio" name="radio-choice" id="radio-choice-3" value="choice-2" />
              <label for="radio-choice-3"><i class="fa fa-file-pdf-o"></i> Me+ My Wife & 1 Child</label>
              <input type="radio" name="radio-choice" id="radio-choice-2" value="choice-2" />
              <label for="radio-choice-2"><i class="fa fa-file-pdf-o"></i> Me+ My Wife & 2 Child</label>
              <input type="radio" name="radio-choice" id="radio-choice-2" value="choice-2" />
              <label for="radio-choice-2"><i class="fa fa-file-pdf-o"></i> My Parents</label>
              <input type="radio" name="radio-choice" id="radio-choice-2" value="choice-2" />
              <label for="radio-choice-2"><i class="fa fa-file-pdf-o"></i> Other Members</label>
            </form>
          </div>
        </Row>

        <br /> <br />
        <Col md='6' className='mb-1'>
          <Label className='form-label' for={`country-${type}`}>
            Age
          </Label>
          <Select
            theme={selectThemeColors}
            isClearable={false}
            id={`country-${type}`}
            className='react-select'
            classNamePrefix='select'
            options={countryOptions}
            defaultValue={countryOptions[0]}
          />
        </Col>

        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default PersonalInfo
