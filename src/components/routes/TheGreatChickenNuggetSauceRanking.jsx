/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Link, Element } from 'react-scroll';
import NavBar from '../NavBar';
import Footer from '../footer/Footer';

export default function theGreatChickenNuggetSauceRanking() {
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
            <aside className="tableOfContents min-w-[250px] sticky top-36 max-h-[calc(100vh - 144px)] pb-4 ml-20 mt-1">
              <nav>
                <h2 className="tableOfContents uppercase tracking-[2px] mb-4 ">Table of Contents</h2>
                <Link to="introduction" smooth={true}>
                  <a className="name mt-3 leading-6 block" href="/">Introduction</a>
                </Link>
                <Link to="ranking" smooth={true}>
                  <a className="name mt-3 leading-6 block" href="/">Ranking</a>
                </Link>
                <Link to="ranking-21-jun-2022" smooth={true}>
                  <a className="name pl-3 mt-3 leading-6 block" href="/">Ranking from 21 Jun 2022</a>
                </Link>
                <Link to="ranking-21-jun-2022" smooth={true}>
                  <a className="name pl-3 mt-3 leading-6 block" href="/">Ranking from 20 Dec 2022</a>
                </Link>
              </nav>
            </aside>
            <article>
              <Element name="introduction">
                <blockquote className="quote text-xl mt-12 mb-6 font-medium italic">
                  &quot;Which Chicken Nugget Sauce should I pick?&quot;
                </blockquote>
                <p className="paragraph">Tough question, isn&apos;t it? Fun Fact: This question set the basic idea of this whole project. It all started as a joke or insider in my friend group and now it became my own website.</p>
                <p className="paragraph">So, lets come back to the question. Of course this is a very contentious topic - the opinions on this differ widely. Nevertheless, I would like to share my part on this. At the moment there are nine sauces which have to considered for evalution.</p>
                <p className="paragraph">Also, I want to keep this article up to date, so I try to update it regularly.</p>
              </Element>
              <Element name="ranking">
                <h2 className="mb-8 mt-14 text-3xl font-bold colorRed">Ranking</h2>
                <p className="paragraph">So, let&apos;s begin with the ranking. I will start with the best and then make my way to the worst sauce. Sometimes i summarize multiple sauces to point when they are equally bad/good.</p>
                <Element name="ranking-21-jun-2022">
                  <h3 className="mb-8 mt-14 text-2xl font-bold text-white">Ranking from 20 Dec 2022</h3>
                  <p className="paragraph">Long time no see. We got new sauces!</p>
                  <ol className="text-lg mb-8 list-none pl-4">
                    <li className="ranking items-baseline flex mb-4 text-white ">Buttermilk Ranch Dip (easy the best of all)</li>
                    <li className="ranking items-baseline flex mb-4 text-white ">Spicy Sauce</li>
                    <li className="ranking items-baseline flex mb-4 text-white ">Barbecue Sauce</li>
                    <li className="ranking items-baseline flex mb-4 text-white ">Curry Sauce</li>
                    <li className="ranking items-baseline flex mb-4 text-white ">Chili Sauce</li>
                    <li className="ranking items-baseline flex mb-4 text-white ">Cocktail Sauce</li>
                    <li className="ranking items-baseline flex mb-4 text-white ">Sweet Sour Sauce</li>
                    <li className="ranking items-baseline flex mb-4 text-white ">Sour Cream Sauce, Ketchup, Mayonnaise (there are better ones)</li>
                    <li className="ranking items-baseline flex mb-4 text-white ">Mustard Sauce (easy the worst)</li>
                  </ol>
                </Element>
                <Element name="ranking-21-jun-2022">
                  <h3 className="mb-8 mt-14 text-2xl font-bold text-white">Ranking from 21 Jun 2022</h3>
                  <ol className="text-lg mb-8 list-none pl-4">
                    <li className="ranking items-baseline flex mb-4 text-white ">Buttermilk Ranch Dip (still the best)</li>
                    <li className="ranking items-baseline flex mb-4 text-white ">Barbecue Sauce</li>
                    <li className="ranking items-baseline flex mb-4 text-white ">Curry Sauce</li>
                    <li className="ranking items-baseline flex mb-4 text-white ">Chili Sauce</li>
                    <li className="ranking items-baseline flex mb-4 text-white ">Sweet Sour Sauce</li>
                    <li className="ranking items-baseline flex mb-4 text-white ">Sour Cream Sauce, Ketchup, Mayonnaise (there are better ones)</li>
                    <li className="ranking items-baseline flex mb-4 text-white ">Mustard Sauce (easy the worst)</li>
                  </ol>
                </Element>
              </Element>
              <p className="paragraph">On more rankings and further disussions!</p>
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
