import React from 'react';
import NavBar from '../NavBar';
import Footer from '../footer/Footer';

export default function theUltimateChickenNuggetSauceRanking() {
  return (
    <div>
      <header>
        <NavBar />
        <div className="primaryColor pt-12 pb-9 h-60 ">
          <div className="primaryColor relative w-full ml-auto mr-auto pr-8 pl-8 max-w-[1100px]">
            <div className="mt-10">
              <a href="/" className="text-gray-500 text-lg">Home</a>
              <p className="inline-block text-gray-500 ml-2">&gt;</p>
              <a href="/blog" className="text-gray-500 text-lg ml-2">Blog</a>
            </div>
            <h2 className="text-white text-4xl mt-2">The Ultimate Chicken Nugget Sauce Ranking</h2>
          </div>
        </div>
      </header>
      <main>
        <div className="secondaryColor pt-12 pb-12 h-screen">
          <div className="secondaryColor relative w-full ml-auto mr-auto pr-8 pl-8 max-w-[1100px]">
            <aside>
              <nav>
                <h2>Table of Content</h2>
              </nav>
            </aside>
            <article>
              <blockquote>
                &quot;which chicken nugget sauce should i pick?&quot;
              </blockquote>
            </article>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
