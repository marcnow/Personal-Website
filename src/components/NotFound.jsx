import React from 'react';
import NavBar from './NavBar';
import Footer from './footer/Footer';

export default function NotFound() {
  return (
    <div>
      <div className="primaryColor">
        <header className="header-container">
          <NavBar />
        </header>
      </div>
      <div className="h-screen primaryColor">
        <main className="pt-36 main-container flex justify-center content-center">
          <blockquote className="quote text-xl font-medium italic">
            Not what you&apos;re looking for.
          </blockquote>
          <p>&nbsp;&#x1F937;</p>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
