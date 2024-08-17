import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth-service";
import { crudRouter } from '../crud-router';
import '../pages/styles/Login.css';

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
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
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
      AuthService.login(this.state.username, this.state.password).then(
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
              <div className="col-6 connexion">
              <h1 className="titre1">Connexion</h1>
              <Form
                onSubmit={this.handleLogin}
                ref={c => {
                  this.form = c;
                }}
              >
                <div className="form-group">
                  <label htmlFor="username">Nom d'utilisateur</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required]}
                    autoComplete="username"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                    autoComplete="current-password"
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary butt1 "
                    disabled={this.state.loading}
                  >
                    {this.state.loading && (
                      <span className="spinner-border "></span>
                    )}
                    <span>Connexion</span>
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
                    <Link to="/signUp">S'inscrire</Link> | 
                    <Link to="/forgot-password">Mot de passe oublié ?</Link>
                  </p>
                </div>
              </Form>
          </div>
       
        <div className="col-6 connexion2">
          <p className="text1">Se connecter via les réseaux sociaux</p>
          <button className="btn btn-primary">se connecter avec Google</button>
        </div>
        </div>
      </div>
    );
  }
}

export default crudRouter(Login);
