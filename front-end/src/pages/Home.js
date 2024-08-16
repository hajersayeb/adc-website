import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
     <div className='container'>
     <div className='row'>
      <section className="page_slider">
        <div className="flexslider" data-nav="true" data-dots="false">
          <ul className="slides">
               <li className="ds text-center">
                  <img src="images/slide01.jpg" alt="" />
     <div className="container">
      <div className="row">
        <div className="col-sm-12">
      <div className="intro_layers_wrapper">
      <div className="intro_layers">
          <div className="intro_layer" data-animation="fadeInLeft">
           <h3 className="intro_before_featured_word">
         Candidate or recruiter, ADC listens to your needs.
            </h3>
          </div>
            <div className="intro_layer" data-animation="fadeInRight">
   <h2 className="text-uppercase intro_featured_word">
         Looking for a
     <br /> job?
    </h2>
   </div>
         <div className="intro_layer" data-animation="fadeIn">
     <div className="d-inline-block">
    <button type="button" className="btn btn-outline-maincolor center-block" data-animation="fadeIn">Join Us</button>
  </div>
 </div>
   </div>
     </div>
 </div>
  </div>
   </div>
 </li>
 <li className="ds text-center">
 <img src="images/slide02.jpg" alt="" />
 <div className="container">
   <div className="row">
   <div className="col-sm-12">
   <div className="intro_layers_wrapper">
   <div className="intro_layers">
   <div className="intro_layer" data-animation="pullUp">
 <h3 className="intro_before_featured_word">
   Stuck in a ‘career rut’?
    </h3>
 </div>
     <div className="intro_layer" data-animation="pullDown">
      <h2 className="text-uppercase intro_featured_word">
       Help us match to
     <br /> Your HR role
      </h2>
     </div>
    <div className="intro_layer" data-animation="fadeIn">
    <div className="d-inline-block">
      <button type="button" className="btn btn-outline-maincolor center-block" data-animation="fadeIn">Join Us</button>
    </div>
  </div>
    </div>
     </div>
      </div>
        </div>
      </div>
    </li>
 <li className="ds text-center">
   <img src="images/slide03.jpg" alt="" />
       <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="intro_layers_wrapper">
        <div className="intro_layers">
         <div className="intro_layer" data-animation="pullDown">
          <h3 className="intro_before_featured_word">
          Launch Your recruitment career
               </h3>
         </div>
      <div className="intro_layer" data-animation="pullUp">
       <h2 className="text-uppercase intro_featured_word">
      With ADC
         <br /> Transition
       </h2>
      </div>
   <div className="intro_layer" data-animation="fadeIn">
   <div className="d-inline-block">
     <button type="button" className="btn btn-outline-maincolor center-block">Join Us</button>
     </div>
    </div>
 </div>
     </div>
      </div>
      </div>
         </div>
       </li>
       </ul>
       <ul className="flex-direction-nav">
     <li className="flex-nav-prev">
    <a className="flex-prev" href="#">&gt;</a>
      </li>
     <li className="flex-nav-next">
       <a className="flex-next" href="#">&lt;</a>
     </li>
    </ul>
     </div>
    </section>
      </div>
      </div>
        </>
    )
};

export default Home;
