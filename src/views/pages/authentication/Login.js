// ** React Imports
import { useContext, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";
import useJwt from "@src/auth/jwt/useJwt";

// ** Third Party Components
import { useDispatch } from "react-redux";
import { toast, Slide } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import {
  Facebook,
  Twitter,
  Mail,
  GitHub,
  HelpCircle,
  Coffee,
} from "react-feather";

// ** Actions
import { handleLogin } from "@store/authentication";

// ** Context
import { AbilityContext } from "@src/utility/context/Can";

// ** Custom Components
import Avatar from "@components/avatar";
import InputPasswordToggle from "@components/input-password-toggle";

// ** Utils
import { getHomeRouteForLoggedInUser } from "@utils";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Form,
  Input,
  Label,
  Alert,
  Button,
  CardText,
  CardTitle,
  UncontrolledTooltip,
} from "reactstrap";

// ** Styles
import "@styles/react/pages/page-authentication.scss";
import logo from "@src/assets/images/logo/logo_Main.png";
import axios from "axios";
import { useEffect } from "react";

const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className="toastify-header">
      <div className="title-wrapper">
        <Avatar size="sm" color="success" icon={<Coffee size={12} />} />
        <h6 className="toast-title fw-bold">Welcome, {name}</h6>
      </div>
    </div>
    <div className="toastify-body">
      <span>
        You have successfully logged in as an {role} user to Dashboard. Now you can
        start to explore. Enjoy!
      </span>
    </div>
  </Fragment>
);

const defaultValues = {
  password: "admin",
  loginEmail: "admin@demo.com",
};

const Login = () => {
  useEffect(() => {
   localStorage.removeItem('tokens')
  }, [])
  
  // ** Hooks
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const history = useHistory();
  const ability = useContext(AbilityContext);
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  const illustration = skin === "dark" ? "login-v2-dark.svg" : "login-v2.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;

  const onSubmit = (data) => {
    console.log(data.loginEmail,data.password)
    const baseUrl = "https://Warranty.lsin.panasonic.com/api/user/auth";

    if (Object.values(data).every((field) => field.length > 0)) {

      axios.post(baseUrl,{
        email: data.loginEmail,
        password: data.password,
      }).then((res)=>{
        localStorage.setItem("id", res.data.msg.id),
        localStorage.setItem("tokens", JSON.stringify(res.data.msg.token).slice(1, -1) )
        const name= res.data.msg.email
        const role=res.data.msg.userRole
        var tok=res.data.msg.token
        console.log(res.data.msg)
        localStorage.setItem("role", role)

        var tokens=JSON.stringify(res.data.msg.token).slice(1, -1) 
        
      useJwt
      .login({ email: "admin@demo.com", password: "admin"})
      .then((res) => {
        const data = {
          ...res.data.userData,
          accessToken: tok,
          refreshToken: tok,
        };
        dispatch(handleLogin(data));
        ability.update(res.data.userData.ability);
        history.push("/dashboard/analytics");
        window.location.reload()
        toast.success(
          <ToastContent
            name={name}
            role={role}
          />,
          {
            icon: false,
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          }
        );
      })
      })

        .catch((err) => console.log(err));
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: "manual",
          });
        }
      }
    }
  };

  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
          <img
            className="fallback-logo"
            src={logo}
            alt="logo"
            style={{ width: "15%", height: "auto" }}
          />
        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Welcome to WarrantyApp!
            </CardTitle>
            <CardText className="mb-2">
              Please sign-in to your account and start the adventure
            </CardText>

            <Form
              className="auth-login-form mt-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-1">
                <Label className="form-label" for="login-email">
                  Email
                </Label>
                <Controller
                  id="loginEmail"
                  name="loginEmail"
                  control={control}
                  render={({ field }) => (
                    <Input
                      autoFocus
                      type="email"
                      placeholder="john@example.com"
                      invalid={errors.loginEmail && true}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    Password
                  </Label>
                  <Link to="/forgot-password">
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <Controller
                  id="password"
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <InputPasswordToggle
                      className="input-group-merge"
                      invalid={errors.password && true}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="remember-me" />
                <Label className="form-check-label" for="remember-me">
                  Remember Me
                </Label>
              </div>
              <Button type="submit" color="primary" block>
                Sign in
              </Button>
            </Form>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
