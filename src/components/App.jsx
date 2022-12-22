import React from 'react';
import NavBar from './NavBar';
import LandingDiv from './landingpage/LandingDiv';
import AboutMe from './me/AboutMe';
import Footer from './footer/Footer';
import Wave from './Wave';

export default function App() {
  return (
    <div className="ml-auto mr-auto w-full max-w-[1100px] text-white">
      <header>
        <NavBar />
      </header>
      <main>
        <div className="primaryColor">
          <LandingDiv />
          <Wave />
        </div>
        <div className="secondaryColor">
          <AboutMe />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
