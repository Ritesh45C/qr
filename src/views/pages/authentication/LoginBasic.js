// ** React Imports
import { Link } from 'react-router-dom'
import React from 'react'
// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import { useHistory } from "react-router-dom";

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'
import TwoStepsBasic from './TwoStepsBasic'
// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Form, Label, Input, Button } from 'reactstrap'
import firebase from '../../../firebase'
// ** Styles
import '@styles/react/pages/page-authentication.scss'
import Otpinput from './OtpInput'

const LoginBasic = () => {
  const [phone, setPhone] = React.useState("");
  const [otp, setOtp] = React.useState("");

  const [show, setshow] = React.useState(false);
  const [captchaError, setCaptchaError] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [alert, setAlert] = React.useState("");
  const [otperror, setOtpError] = React.useState(false);
  const [registerData, setRegisterData] = React.useState();

  let history = useHistory();


  const setuprecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: function (response) {
        console.log("recature resolved")
        this.onSignInSubmit();
      }
    });

  }

  const handleChange = (event) => {
    if (event.target.name == "mobile") {
      setPhone(event.target.value);
    }
    if (event.target.name == "otp") {
      setOtp(event.target.value);
    }
    // seterrormsg("");
    // setSuccessMsg("");
  };
  const onClick = () => {
    console.log('sdfsdf')
    setuprecaptcha();
    var phoneNumber = "+91" + phone;
    // phoneNumber = phoneNumber.replace(/[- ]+/g, '').trim();
    var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;

        console.log("Success");
        setshow(true);


      })
      .catch(function (error) {
        setshow(true);

        setSubmitting(false);
        setAlert(error.message);
        console.log("sign Up error:" + error.code);
      });
  }

  const otpSubmit = (e) => {

    let opt_number = e

    window.confirmationResult
      .confirm(opt_number)
      .then(function (result) {
        // User signed in successfully.
        var user = result.user;
        localStorage.setItem('user', user.uid);
        user.getIdToken().then(idToken => {
          window.localStorage.setItem('idToken', idToken);


          // var phoneNumber = values.mobileNo;
          // phoneNumber = phoneNumber.replace(/[- ]+/g, '').trim();
          // var data = JSON.stringify({
          //   "first_name": values.firstName,
          //   "last_name": values.lastName,
          //   "mobile_number": phoneNumber,
          //   "email": values.email,
          // });


          history.push('/apps/ecommerce/shop')
        })
          .catch((error) => {
            setOtpError(true)
            // User couldn't sign in (bad verification code?)
            window.alert(error.message);
          })
      }).catch(function (error) {
        setOtpError(true)
        console.log("sign Up error:" + error.code);
      });
  }
  return (
    <div className='auth-wrapper auth-basic px-2'>
      <div id="recaptcha-container"></div>
      {show ? <Otpinput otpSubmit={otpSubmit} error={otperror} /> :

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
              <CardText className='mb-2'>Please sign-in to your account and start the adventure</CardText>
              <Form className='auth-login-form mt-2' onSubmit={e => e.preventDefault()}>
                <div className='mb-1'>
                  <Label className='form-label' for='login-email'>
                    Phone No.
                  </Label>
                  <Input type="input"
                    placeholder="mobile"
                    name="mobile"
                    value={phone}
                    className="mobile-input"
                    onChange={handleChange} autoFocus />
                </div>


                <Button color='primary' type='submit' onClick={() => onClick()}>
                  Get OTP
                </Button>
              </Form>

              <div className='divider my-2'>
                <div className='divider-text'>or</div>
              </div>
              <div className='auth-footer-btn d-flex justify-content-center'>
                <Button color='facebook'>
                  <Facebook size={14} />
                </Button>
                <Button color='twitter'>
                  <Twitter size={14} />
                </Button>
                <Button color='google'>
                  <Mail size={14} />
                </Button>
                <Button className='me-0' color='github'>
                  <GitHub size={14} />
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      }
    </div>
  )
}

export default LoginBasic
