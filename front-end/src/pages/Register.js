import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import '../pages/styles/Register.css';
import AuthService from "../services/auth-service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeCivilite = this.onChangeCivilite.bind(this);
    this.onChangeDateNaissance = this.onChangeDateNaissance.bind(this);
    this.onChangeGouvernorat = this.onChangeGouvernorat.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      civilite: "",
      dateNaissance: "",
      gouvernorat: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
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

  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    });
  }

  onChangeFullName(e) {
    this.setState({
      fullName: e.target.value
    });
  }

  onChangeCivilite(e) {
    this.setState({
      civilite: e.target.value
    });
  }

  onChangeDateNaissance(e) {
    this.setState({
      dateNaissance: e.target.value
    });
  }

  onChangeGouvernorat(e) {
    this.setState({
      gouvernorat: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.fullName,
        this.state.civilite,
        this.state.dateNaissance,
        this.state.gouvernorat
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="fullName">Nom & Prénom</label>
                  <Input
  type="text"
  className="form-control"
  name="username"
  value={this.state.username}
  onChange={this.onChangeUsername}
  validations={[required, vusername]}
/>

                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="civilite">Civilité *</label>
                  <Select
                    className="form-control"
                    name="civilite"
                    value={this.state.civilite}
                    onChange={this.onChangeCivilite}
                    validations={[required]}
                  >
                    <option value="">Sélectionnez Civilité</option>
                    <option value="Mr">Mr</option>
                    <option value="Mme">Mme</option>
                    <option value="Mlle">Mlle</option>
                  </Select>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Mot de Passe *</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirmer le mot de passe *</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChangeConfirmPassword}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dateNaissance">Date de Naissance *</label>
                  <Input
                    type="date"
                    className="form-control"
                    name="dateNaissance"
                    value={this.state.dateNaissance}
                    onChange={this.onChangeDateNaissance}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gouvernorat">Gouvernorat *</label>
                  <Select
                    className="form-control"
                    name="gouvernorat"
                    value={this.state.gouvernorat}
                    onChange={this.onChangeGouvernorat}
                    validations={[required]}
                  >
                    <option value="">Sélectionnez Gouvernorat</option>
                    <option value="Tunis">Tunis</option>
                    <option value="Ariana">Ariana</option>
                  </Select>
                </div>

                <div className="form-group">
  <div className="terms-container">
    <Input
      type="checkbox"
      className="form-check-input"
      name="acceptTerms"
      value={this.state.acceptTerms}
      onChange={this.onChangeAcceptTerms}
      validations={[required]}
    />
    <label htmlFor="acceptTerms" className="form-check-label">
      J'accepte les conditions d'utilisation *
    </label>
  </div>
</div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
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
          </Form>
        </div>
      </div>
    );
  }
}
