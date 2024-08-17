import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import '../pages/styles/SignUp.css';
const SignUp = () => {
    return(
    <>
    <div className="container">
            <div className="row">
              <div className="col-9">
                <h1>Join Us</h1>
               <p className="text3">TRAINING OFFERS
               Cloud-based services can offer our customers single tenant dedicated environments
               </p> 
               <p className="text3">RECRUITMENT
               Working with customers making 100-40,000 hires per annum</p>
               <p className="text3">project management
               All of our customers' data is validated. We build accurate data banks for reporting</p>
              </div> 
              <div className="col-3 cond">
                <div className="form-group text-center">
                  <button className="btn btn-outline-primary butt3">
                    <Link to="/register">Condidate</Link>
                  </button>
                  </div>
                  <div className="form-group text-center"></div>
                  <button className="btn btn-outline-primary butt2">
                    <Link to="/registerEmp">Employer</Link>
                  </button>
                  <div className="text2">
                  <p> already you have an account?
                    <Link to="/login">connexion</Link>
                  </p>
                </div>
                  </div>
                  
                </div>
              </div> 
</>
    )
};
export default SignUp;