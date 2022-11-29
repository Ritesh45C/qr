import React, { Component, ReactDOM } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Form, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

class Otpinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", otp6: "", disable: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(value1, event) {

    this.setState({ [value1]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const { otp1, otp2, otp3, otp4, otp5, otp6 } = this.state;
    this.props.otpSubmit(otp1 + otp2 + otp3 + otp4 + otp5 + otp6);
    console.log(otp1 + otp2 + otp3 + otp4 + otp5 + otp6);
  }

  inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {

        elmnt.target.form.elements[next].focus()
      }
    }
    else {
      console.log("next");

      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus()
      }
    }

  }

  render() {
    return (
      <div className='auth-inner my-2'>
        <Card className='mb-0'>
          <CardBody>
            <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
              <svg viewBox='0 0 139 95' version='1.1' height='28'>
                <defs>
                  <linearGradient x1='100%' y1='10.5120544%' x2='50%' y2='89.4879456%' id='linearGradient-1'>
                    <stop stopColor='#000000' offset='0%'></stop>
                    <stop stopColor='#FFFFFF' offset='100%'></stop>
                  </linearGradient>
                  <linearGradient x1='64.0437835%' y1='46.3276743%' x2='37.373316%' y2='100%' id='linearGradient-2'>
                    <stop stopColor='#EEEEEE' stopOpacity='0' offset='0%'></stop>
                    <stop stopColor='#FFFFFF' offset='100%'></stop>
                  </linearGradient>
                </defs>
                <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                  <g id='Artboard' transform='translate(-400.000000, -178.000000)'>
                    <g id='Group' transform='translate(400.000000, 178.000000)'>
                      <path
                        d='M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z'
                        id='Path'
                        className='text-primary'
                        style={{ fill: 'currentColor' }}
                      ></path>
                      <path
                        d='M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z'
                        id='Path'
                        fill='url(#linearGradient-1)'
                        opacity='0.2'
                      ></path>
                      <polygon
                        id='Path-2'
                        fill='#000000'
                        opacity='0.049999997'
                        points='69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325'
                      ></polygon>
                      <polygon
                        id='Path-2'
                        fill='#000000'
                        opacity='0.099999994'
                        points='69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338'
                      ></polygon>
                      <polygon
                        id='Path-3'
                        fill='url(#linearGradient-2)'
                        opacity='0.099999994'
                        points='101.428699 0 83.0667527 94.1480575 130.378721 47.0740288'
                      ></polygon>
                    </g>
                  </g>
                </g>
              </svg>
              <h2 className='brand-text text-primary ms-1'>Vuexy</h2>
            </Link>
            <CardTitle tag='h4' className='mb-1'>
              Welcome to Vuexy! 👋
            </CardTitle>

            <form onSubmit={this.handleSubmit}>
              <h3>Enter OTP</h3>
              <div className="otpContainer">
                {/* <Alert severity="success">Please Check OTP on your Registred number.!</Alert> */}
                {/* {this.props.error ? <Alert severity="error">Incorrect OTP or Something went wrong!</Alert> : null} */}

                <br />
                <input
                  name="otp1"
                  type="text"
                  autoComplete="off"
                  className="otpInput"
                  value={this.state.otp1}
                  onKeyPress={this.keyPressed}
                  onChange={e => this.handleChange("otp1", e)}
                  tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                />
                <input
                  name="otp2"
                  type="text"
                  autoComplete="off"
                  className="otpInput"
                  value={this.state.otp2}
                  onChange={e => this.handleChange("otp2", e)}
                  tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                />
                <input
                  name="otp3"
                  type="text"
                  autoComplete="off"
                  className="otpInput"
                  value={this.state.otp3}
                  onChange={e => this.handleChange("otp3", e)}
                  tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                />
                <input
                  name="otp4"
                  type="text"
                  autoComplete="off"
                  className="otpInput"
                  value={this.state.otp4}
                  onChange={e => this.handleChange("otp4", e)}
                  tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                />

                <input
                  name="otp5"
                  type="text"
                  autoComplete="off"
                  className="otpInput"
                  value={this.state.otp5}
                  onChange={e => this.handleChange("otp5", e)}
                  tabIndex="5" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                />
                <input
                  name="otp6"
                  type="text"
                  autoComplete="off"
                  className="otpInput"
                  value={this.state.otp6}
                  onChange={e => this.handleChange("otp6", e)}
                  tabIndex="5" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                />
              </div>
              <Button type='submit' color='primary'>
                Sign in
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    );
  }
}


export default Otpinput;