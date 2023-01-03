/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Link, Element } from 'react-scroll';
import NavBar from '../NavBar';
import Footer from '../footer/Footer';

export default function blogTemplate() {
  return (
    <div>
      <div className="primaryColor">
        <header className="header-container">
          <NavBar />
          <div className="primaryColor pt-20 mb:p-3 lp:p-3">
            <a href="/" className="text-gray-500 text-lg">Home</a>
            <p className="inline-block text-gray-500 ml-2">&gt;</p>
            <a href="/blog" className="text-gray-500 text-lg ml-2">Blog</a>
            <h3>More To Come</h3>
          </div>
        </header>
      </div>
      <div className="secondaryColor">
        <main className="main-container">
          <div className="secondaryColor">
            <div className="pt-20 flex flex-row-reverse items-start">
              <aside className="tableOfContents min-w-[200px] sticky top-36 max-h-[calc(100vh - 144px)] ml-20">
                <nav>
                  <h2 className="tableOfContents uppercase tracking-[2px]">Table of Contents</h2>
                  <Link to="introduction" smooth={true}>
                    <a className="mt-3" href="/">Introduction</a>
                  </Link>
                </nav>
              </aside>
              <article className="mr-auto mb:p-3 lp:p-3">
                <Element name="introduction">
                  <blockquote className="quote text-xl mt-auto mb-6 font-medium italic">
                    Nothing to see right now.
                  </blockquote>
                  <p>&nbsp;&#128539;</p>
                </Element>
              </article>
            </div>
          </div>
          <div className="secondaryColor h-[calc(100vh-28.5rem-314px)]" />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
