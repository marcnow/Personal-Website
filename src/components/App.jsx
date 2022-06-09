import React from 'react';
import NavBar from './NavBar';
import LandingDiv from './landingpage/LandingDiv';
import AboutMe from './me/AboutMe';
import Footer from './footer/Footer';
import Wave from './Wave';

export default function App() {
  return (
    <div>
      <header className="relative">
        <div className="navbar min-w-[48px] min-h-[48px]" />
        <NavBar />
        <div className="placeholder-div">
          <LandingDiv />
        </div>
        <Wave />
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
