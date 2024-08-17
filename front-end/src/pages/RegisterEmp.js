import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth-service";
import { isEmail } from "validator";
import '../pages/styles/RegisterEmp.css';
// Validation functions
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vemail = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
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
    this.onChange = this.onChange.bind(this);

    this.state = {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      companyName: "",
      website: "",
      phone: "",
      location: "",
      logo: null,
      companyDescription: "",
      uniqueId: "",
      sector: "",
      termsAccepted: false,
      successful: false,
      message: ""
    };
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register({
        email: this.state.email,
        fullName: this.state.fullName,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        companyName: this.state.companyName,
        website: this.state.website,
        phone: this.state.phone,
        location: this.state.location,
        logo: this.state.logo,
        companyDescription: this.state.companyDescription,
        uniqueId: this.state.uniqueId,
        sector: this.state.sector,
        termsAccepted: this.state.termsAccepted
      }).then(
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
            <h3>Create your space employer here</h3>
          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    validations={[required, vemail]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fullName">Nom & Prénom: *</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.onChange}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Mot de Passe *</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
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
                    onChange={this.onChange}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="companyName">Nom de l'entreprise *</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="companyName"
                    value={this.state.companyName}
                    onChange={this.onChange}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="website">Site Web</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="website"
                    value={this.state.website}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Téléphone *</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="location">Emplacement (Adresse) *</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="logo">Logo</label>
                  <Input
                    type="file"
                    className="form-control"
                    name="logo"
                    onChange={e => this.setState({ logo: e.target.files[0] })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="companyDescription">Description de l'entreprise</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="companyDescription"
                    value={this.state.companyDescription}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="uniqueId">Identifiant Unique (RC/ RNE / MF) *</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="uniqueId"
                    value={this.state.uniqueId}
                    onChange={this.onChange}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="sector">Secteur d'activité *</label>
                  <select
                    className="form-control"
                    name="sector"
                    value={this.state.sector}
                    onChange={this.onChange}
                    validations={[required]}
                  >
                    <option value="">Tous secteurs</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                    <option value="Education">Education</option>
                    <option value="Health">Health</option>
                    <option value="Other">Other</option>
                  </select>
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
