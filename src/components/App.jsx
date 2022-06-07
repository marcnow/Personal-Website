import React from "react";
import NavBar from "./NavBar";
import LandingDiv from "./landingpage/LandingDiv";
import SocialHomeGroup from "./landingpage/SocialHomeGroup";
import AboutMe from "./me/AboutMe";
import FutureVentures from "./me/FutureVentures"
import Footer from "./footer/Footer"
import ReadMoreButton from "./landingpage/ReadMoreButton"
import Wave from "./Wave"

export default function App() {
  return (
    <div >
      <header className="relative">
        <div className="navbar min-w-[48px] min-h-[48px]"></div>
        <NavBar/>
        <div className="placeholder-div">
          <LandingDiv />
        </div>
        <Wave/>
      </header>
      <main>
        <div>
          <AboutMe />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>    
  );
}
