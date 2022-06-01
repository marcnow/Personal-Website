import React from "react";
import NavBar from "./NavBar";
import LandingDiv from "./landingpage/LandingDiv";
import SocialHomeGroup from "./landingpage/SocialHomeGroup";
import AboutMe from "./me/AboutMe";
import FutureVentures from "./me/FutureVentures"
import Footer from "./footer/Footer"
import ReadMoreButton from "./landingpage/ReadMoreButton"

export default function App() {
  return (
    <div>
      <div className="home-div">
        <NavBar/>
        <LandingDiv />
        <SocialHomeGroup />
        <ReadMoreButton />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <FutureVentures />
      </div>
      <div>
        <Footer />
      </div>
    </div>    
  );
}
