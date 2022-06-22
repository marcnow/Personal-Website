/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Link, Element } from 'react-scroll';
import NavBar from '../../components/NavBar';
import Footer from '../../components/footer/Footer';

export default function blogTemplate() {
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
            <h2 className="text-white text-4xl mt-2">The Great Chicken Nugget Sauce Ranking</h2>
          </div>
        </div>
      </header>
      <main>
        <div className="secondaryColor pt-12 pb-12">
          <div className="secondaryColor relative w-full ml-auto mr-auto pt-12 pr-8 pl-8 max-w-[1100px] flex flex-row-reverse justify-center items-start">
            <aside className="tableOfContents min-w-[200px] sticky top-36 max-h-[calc(100vh - 144px)] pb-4 ml-24 mt-1">
              <nav>
                <h2 className="tableOfContents uppercase tracking-[2px] mb-4 ">Table of Contents</h2>
                <Link to="introduction" smooth={true}>
                  <a className="mt-3 leading-6" href="/">Introduction</a>
                </Link>
              </nav>
            </aside>
            <article>
              <Element name="introduction">
                <blockquote className="quote text-xl mt-12 mb-6 font-medium italic">
                  &quot;Which Chicken Nugget Sauce should I pick?&quot;
                </blockquote>
                <p className="paragraph">Tough question, isn&apos;t it? Fun Fact: This question set the basic idea of this whole project. It all started as a joke or insider in my friend group and now it beacame my own website.  </p>
              </Element>
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
