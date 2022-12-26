import React from 'react';
import NavBar from './NavBar';
import LandingDiv from './landingpage/LandingDiv';
import AboutMe from './me/AboutMe';
import Footer from './footer/Footer';
import Wave from './Wave';

export default function App() {
  return (
    <div>
      <div className="primaryColor">
        <header className="header-container">
          <NavBar />
        </header>
        <main className="main-container">
          <div>
            <LandingDiv />
          </div>
        </main>
      </div>
      <Wave />
      <div className="secondaryColor">
        <main className="main-container">
          <div className="secondaryColor">
            <AboutMe />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
