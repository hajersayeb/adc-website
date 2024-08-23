
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo from '../pages/images/logo.png'; // Assurez-vous que le chemin de l'image est correct
import '../components/Footer.css'; 
const Footer = () => {
    return (
        <>
        <footer className="page_footer ds s-py-sm-20 s-pt-md-75 s-pb-md-50 s-py-lg-130 c-gutter-60 pb-20 half-section">
            <div className="container">
                <div className="row">
                    <div className="footer col-md-4 text-center animate" data-animation="fadeInUp">
                        <div className="footer widget text-center">
                            <h3 className="widget-title title-menu">Explore</h3>
                            <ul className="footer-menu">
                                <li><a href="#">Job Search</a></li>
                                <li className="menu1"><a href="#">Consultants</a></li>
                                <li><a href="#">Reviews</a></li>
                                <li className="menu1"><a href="#">Insights</a></li>
                                <li><a href="#">Survey</a></li>
                                <li className="menu1"><a href="#">Careers</a></li>
                                <li className="border-bottom-0"><a href="#">Contact</a></li>
                                <li className="menu1 border-bottom-0"><a href="#">About</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer col-md-4 text-center animate" data-animation="fadeInUp">
                        <div className="text-center">
                            <div className="header_logo_center footer-logo-ds">
                                <a href="/" className="logo">
                                    <span className="logo_text">ADC</span>
                                    <img src={logo} alt="ADC Logo" />
                                    <span className="logo_subtext">Consult</span>
                                </a>
                            </div>
                        </div>
                        <div className="widget pt-20">
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla.
                        </div>
                        <div className="widget">
                            <div className="media">
                                <i className="mx-10 color-main fa fa-map-marker"></i>
                                Appartement n°8, 2ème étage , immeuble RNE , derrière UTICA en face Residence FIRAS , Sousse, Tunisia
                            </div>
                            <div className="media">
                                <i className="mx-10 color-main fa fa-phone"></i>
                                101 123 456 789
                            </div>
                            <div className="media text-center link">
                                <i className="mx-10 text-center color-main fa fa-envelope"></i>
                                <a href="#"><span>[email&#160;protected]</span></a>
                            </div>
                        </div>
                        <div className="author-social">
                        <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faGoogle} />
                        </div>
                    </div>
                    <div className="footer col-md-4 text-center animate" data-animation="fadeInUp">
                        <div className="widget widget_mailchimp">
                            <h3 className="widget-title">Newsletter</h3>
                            <p>Enter your email address here always to be updated. We promise not to spam!</p>
                            <form className="signup">
                                <label htmlFor="mailchimp_email">
                                    <span className="screen-reader-text">Subscribe:</span>
                                </label>
                                <input id="mailchimp_email" name="email" type="email" className="form-control mailchimp_email" placeholder="Email Address" />
                                <button type="submit" className="search-submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
