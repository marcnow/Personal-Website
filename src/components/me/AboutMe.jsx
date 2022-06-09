/* eslint-disable max-len */
import React from 'react';
import cloud from '../../static/images/icons/cloud.png';
import backend from '../../static/images/icons/backend.png';
import programming from '../../static/images/icons/programming.png';
import cpu from '../../static/images/icons/cpu.png';

export default function MyWork() {
  return (
    <div className="my-work w-full p-10 pt-16">
      <div className="pt-8 pb-8 ml-auto mr-auto pr-4 pl-4 max-w-6xl w-[80%] ">
        <h1 className="text-6xl pb-10 text-white text-center">About me</h1>
        <p className="text-white pb-16 tracking-wide text-xl">
          I was never the best at School or University, always been just a super curious guy.
          I&apos;m always interested in learning new Stuff and dive deeper into specific Themes. That&apos;s also why I teached myself Web Development, so you can see this site.
          BTW, if you are interested in which Chicken Nuggets Sauce is the best or find out why (... is a good/bad thing),
          feel free to check out my
          {' '}
          <a href="/blog" className="hover:underline">Blog</a>
          .
        </p>
        <div className="min-w-[70%] justify-center self-center">
          <div className="ml-auto mr-auto mt-14 mb-24 text-left">
            <img className="ml-8 float-left" src={backend} alt="Backend" />
            <div className="p-5">
              <h3 className="colorRed text-xl font-bold tracking-wide mb-4 ml-[18.5rem] uppercase leading-7">Backend</h3>
              <div className="pb-16">
                <ul className="list-disc text-white tracking-wide text-xl ml-[20rem]">
                  <li className="list-item">Java (JavaEE, Spring, Quarkus), Kotlin,  C++ (QT Framework), Python, PHP</li>
                  <li className="list-item">MySQL, PostgreSQL, OracleDB, MongoDB</li>
                  <li className="list-item">Docker, Kubernetes</li>
                  <li className="list-item">SOAP, REST</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-auto mr-auto mt-14 mb-24 text-left">
            <img className="ml-8 float-right" src={programming} alt="Programming" />

            <h3 className="colorRed text-xl font-bold tracking-wide mb-4 uppercase leading-7">Frontend</h3>
            <p className="text-white pb-16 tracking-wide text-xl">I started learning to code when I was 12 years old because I wanted to make my own video games. Over time, I have gained a wealth of experience designing and developing mobile and web applications.</p>
          </div>
          <div className="ml-auto mr-auto mt-14 mb-24 text-left">
            <img className="ml-8 float-left" src={cloud} alt="Cloud" />

            <h3 className="colorRed text-xl font-bold tracking-wide mb-4 uppercase leading-7">Cloud</h3>
            <p className="text-white pb-16 tracking-wide text-xl">I started learning to code when I was 12 years old because I wanted to make my own video games. Over time, I have gained a wealth of experience designing and developing mobile and web applications.</p>
          </div>
          <div className="ml-auto mr-auto mt-14 mb-24 text-left">
            <img className="ml-8 float-right" src={cpu} alt="Cpu" />

            <h3 className="colorRed text-xl font-bold tracking-wide mb-4 uppercase leading-7">Electronics</h3>
            <p className="text-white pb-16 tracking-wide text-xl">I started learning to code when I was 12 years old because I wanted to make my own video games. Over time, I have gained a wealth of experience designing and developing mobile and web applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
