import React from 'react';
import NavBar from '../NavBar';
import Footer from '../footer/Footer';

export default function Contact() {
  return (
    <div>
      <header>
        <NavBar />
        <div className="primaryColor">
          <div className="pt-12 pb-12 w-full ml-auto mr-auto pr-2 pl-2 max-w-[84rem] text-center">
            <h1 className="text-6xl mb-8 mt-2 text-white">Contact</h1>
          </div>
        </div>
      </header>
      <main>
        <div className="p-8 primaryColor text-white pb-[17.5rem] h-[55vh]">
          <h2 className="text-5xl mb-8 mt-2 text-white text-center">Write me a Mail</h2>
          <h2 className="text-4xl mb-8 mt-2 text-white text-center">marc.nowakowski@hotmail.com</h2>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
