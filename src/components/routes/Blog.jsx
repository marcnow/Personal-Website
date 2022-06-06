import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../NavBar";
import SocialHomeGroup from "../landingpage/SocialHomeGroup";

export default function Blog() {
    return (
      <div>
        <div className="placeholder-div">
          <NavBar/>
          <div className="futureVentures w-full p-5">
            <div className="pt-12 pb-12 w-full ml-auto mr-auto pr-2 pl-2 max-w-[84rem] text-center">
              <header>
                <h3 className="tracking-[.4em] text-6xl pb-16 text-white">Blog</h3>
              </header>
              <div>
                
              </div>
            </div>
          </div>
          <SocialHomeGroup/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
}