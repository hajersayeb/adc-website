import {  Link, Outlet } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import EventBus from "../auth/Event";
import AuthService from "../services/auth-service"
import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import logo from "../pages/images/logo.png";
import '../components/Navbar.css';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      showInstructorBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      showInstructorBoard: false,
      currentUser: undefined,
    });
  }
render () {
    const { currentUser, showAdminBoard } = this.state;
    return (
        <>
        <section className="page_toplogo ls s-py-15 text-center">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-4">
							<div className="d-lg-flex justify-content-lg-end align-items-lg-center">
								<span className="social-icons top">
								<FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faGoogle} />
                                <FontAwesomeIcon icon={faLinkedin} />
                                <FontAwesomeIcon icon={faPinterest} />
								</span>
							</div>
						</div>
						<div className="col-lg-4 text-center">
							<div className="text-center">
								<div className="header_logo_center">
									<Link to="/" className="logo"> 
										<img src={logo} alt="" />
                    </Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<button type="button" className="btn btn-outline-primary">Looking to recruit ?</button>
						</div>
					</div>
				</div>
			</section>
			<section>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
	<div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
	  <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
                    {currentUser && (
              <li className="nav-item">
              <Link className="nav-link" to="/home"> Home</Link>
            </li>
            )}
		
            {showAdminBoard && (
              <li className="nav-item">
              <Link className="nav-link" to="/dashboard">dashboard</Link>
            </li>
            )}
			{currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profil"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              
            </div>
          )}	
		  </ul>						
									
							</div>
						</div>

		</nav>
		</section>
        <Outlet />
        </>
    )
};
}
export default Navbar;