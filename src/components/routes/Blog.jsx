import React from 'react';
import Footer from '../footer/Footer';
import NavBar from '../NavBar';

export default function Blog() {
  return (
    <div>
      <header>
        <NavBar />
        <div className="placeholder-div">
          <div className="futureVentures w-full p-5">
            <div className="pt-12 pb-12 w-full ml-auto mr-auto pr-2 pl-2 max-w-[84rem] text-center">
              <h1 className="text-6xl mb-8 mt-2 text-white">Blog</h1>
              <div>
                <p>Lorem ipsum...</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div>
          <p>Lorem ipsum...</p>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
