import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth-service";
import { crudRouter } from '../crud-router';
import logo1 from "../pages/images/logo1.png";
import '../pages/styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Ce champ est requis !
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.email, this.state.password).then(
        () => {
          this.props.router.navigate("/profil");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            "Une erreur inattendue s'est produite. Veuillez réessayer plus tard.";

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 connexion2">
            <div className="header_logo_center">
              <Link to="/" className="logo1"> 
                <img src={logo1} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-8 connexion">
            <h1 className="titre1">Sign in</h1>
            <Form className="form1"
              onSubmit={this.handleLogin}
              ref={c => {
                this.form = c;
              }}
            >
              <div className="form-group">
                <label htmlFor="email" className="lab1">Email</label>
                <div className="input-container">
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required]}
                    placeholder="Tape your email"
                    autoComplete="email" 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-container">
                  <FontAwesomeIcon icon={faLock} className="input-icon" />
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                    placeholder="Tape your password"
                    autoComplete="current-password"
                  />
                </div>
              </div>

              <div className="d-grid gap-2">
                <button
                  className="btn btn-primary butt1"
                  disabled={this.state.loading}
                >
                  {this.state.loading && (
                    <span className="spinner-border"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>

              {this.state.message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {this.state.message}
                  </div>
                </div>
              )}

              <CheckButton
                style={{ display: "none" }}
                ref={c => {
                  this.checkBtn = c;
                }}
              />

              <div className="form-group text-center">
                <p>
                  <Link to="/forgot-password" className="link-black">Forgot your password?</Link> 
                </p>
              </div>
              <div className="form-group text-center">
                <p>
                  Create an account?
                </p>
              </div>
              <div className="form-group text-center">
  <button className="btn btn-primary">
    <Link to="/register" className="btn-link">
      <FontAwesomeIcon icon={faUser} className="btn-icon" />
      <span>Condidate</span>
    </Link>
  </button>
  <button className="btn btn-primary">
    <Link to="/registerEmp" className="btn-link">
      <FontAwesomeIcon icon={faHouseChimney} className="btn-icon" />
      <span>Company</span>
    </Link>
  </button>
</div>


            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default crudRouter(Login);
