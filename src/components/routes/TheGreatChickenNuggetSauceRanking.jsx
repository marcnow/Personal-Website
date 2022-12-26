/* eslint-disable max-len */
/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Link, Element } from 'react-scroll';
import NavBar from '../NavBar';
import Footer from '../footer/Footer';

export default function theGreatChickenNuggetSauceRanking() {
  return (
    <div>
      <div className="primaryColor">
        <header className="header-container">
          <NavBar />
          <div className="primaryColor pt-20">
            <a href="/" className="text-gray-500 text-lg">Home</a>
            <p className="inline-block text-gray-500 ml-2">&gt;</p>
            <a href="/blog" className="text-gray-500 text-lg ml-2">Blog</a>
            <h3>The Great Chicken Nugget Sauce Ranking</h3>
          </div>
        </header>
      </div>
      <div className="secondaryColor">
        <main className="main-container">
          <div className="secondaryColor">
            <div className="pt-20 flex flex-row-reverse items-start">
              <aside className="tableOfContents min-w-[250px] sticky top-36 max-h-[calc(100vh - 144px)] ml-20 ">
                <nav>
                  <h2 className="tableOfContents uppercase tracking-[2px]">Table of Contents</h2>
                  <Link to="introduction" smooth={true}>
                    <a className="name mt-3 block" href="/">Introduction</a>
                  </Link>
                  <Link to="ranking" smooth={true}>
                    <a className="name mt-3 block" href="/">Ranking</a>
                  </Link>
                  <Link to="ranking-21-jun-2022" smooth={true}>
                    <a className="name pl-3 mt-3 block" href="/">Ranking from 21 Jun 2022</a>
                  </Link>
                  <Link to="ranking-21-jun-2022" smooth={true}>
                    <a className="name pl-3 mt-3 block" href="/">Ranking from 20 Dec 2022</a>
                  </Link>
                </nav>
              </aside>
              <article>
                <Element name="introduction">
                  <blockquote className="quote text-xl mt-auto mb-6 font-medium italic">
                    &quot;Which Chicken Nugget Sauce should I pick?&quot;
                  </blockquote>
                  <p>Tough question, isn&apos;t it? Fun Fact: This question set the basic idea of this whole project. It all started as a joke or insider in my friend group and now it became my own website.</p>
                  <p>So, lets come back to the question. Of course this is a very contentious topic - the opinions on this differ widely. Nevertheless, I would like to share my part on this. At the moment there are nine sauces which have to considered for evalution.</p>
                  <p>Also, I want to keep this article up to date, so I try to update it regularly.</p>
                </Element>
                <Element name="ranking">
                  <h2 className="mb-8 mt-14 text-3xl">Ranking</h2>
                  <p>So, let&apos;s begin with the ranking. I will start with the best and then make my way to the worst sauce. Sometimes i summarize multiple sauces to point when they are equally bad/good.</p>
                  <Element name="ranking-21-jun-2022">
                    <h3 className="mb-8 mt-14 text-2xl font-bold">Ranking from 20 Dec 2022</h3>
                    <p>Long time no see. We got new sauces!</p>
                    <ol className="mb-8 pl-4">
                      <li className="ranking mb-4">Buttermilk Ranch Dip (still number one)</li>
                      <li className="ranking mb-4">Spicy Sauce</li>
                      <li className="ranking mb-4">Barbecue Sauce</li>
                      <li className="ranking mb-4">Curry Sauce</li>
                      <li className="ranking mb-4">Chili Sauce</li>
                      <li className="ranking mb-4">Cocktail Sauce</li>
                      <li className="ranking mb-4">Sweet Sour Sauce</li>
                      <li className="ranking mb-4">Sour Cream Sauce, Ketchup, Mayonnaise (there are better ones)</li>
                      <li className="ranking mb-4">Mustard Sauce (easy the worst)</li>
                    </ol>
                  </Element>
                  <Element name="ranking-21-jun-2022">
                    <h3 className="mb-8 mt-14 text-2xl font-bold">Ranking from 21 Jun 2022</h3>
                    <ol className="mb-8 pl-4">
                      <li className="ranking mb-4">Buttermilk Ranch Dip (easy the best of all)</li>
                      <li className="ranking mb-4">Barbecue Sauce</li>
                      <li className="ranking mb-4">Curry Sauce</li>
                      <li className="ranking mb-4">Chili Sauce</li>
                      <li className="ranking mb-4">Sweet Sour Sauce</li>
                      <li className="ranking mb-4">Sour Cream Sauce, Ketchup, Mayonnaise (there are better ones)</li>
                      <li className="ranking mb-4">Mustard Sauce (easy the worst)</li>
                    </ol>
                  </Element>
                </Element>
                <p>On more rankings and further disussions!</p>
              </article>
            </div>
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
