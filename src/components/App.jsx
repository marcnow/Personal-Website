import React from "react";
import NavBar from "./NavBar";
import LandingDiv from "./LandingDiv";
import SocialHomeGroup from "./SocialHomeGroup";
import MyWork from "./MyWork";


export default function App() {
  return (
    <div>
      <div className="home-div">
        <NavBar/>
        <LandingDiv />
        <SocialHomeGroup />
      </div>
      <div>
        <MyWork />
      </div>
    </div>    
  );
}
