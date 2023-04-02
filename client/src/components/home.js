//import ".view/landingPage.css"
import React from "react";
import heroImg from "../media/hero_illustration.jpg";
import heroImg2 from '../images/[removal.ai]_tmp-6429ad8ece2a3.png';
import '../home.css'

function Home(){

    return(
      <div className="home-page container-fluid gx-0 main-div">
        <div className="row gx-0">
          <div className="col-6">
            <img
              className="home-img-2 "
              src={heroImg2}
            />
          </div>
          <div className="text-cont col-6 mt-5">
            <h1 className="home-h1 text-left mt-5">DISCOVER THE FLIGHT FOR YOU</h1>
            <h2 className="home-h2 text-left my-5">Sky-Critique is your home of all available flights. View other fliers' reviews and make an informed decision on your next booking.</h2>
            <div className="btn-holder d-flex">
              <button className="home-sign ms-5">SIGN UP</button>
              <button className="home-log mx-auto">LOG IN</button>
            </div>
          </div>
        </div>
      </div>

    );

}
export default Home;