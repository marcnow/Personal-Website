/* eslint-disable max-len */
import React from 'react';
import cloud from '../../static/images/icons/cloud.png';
import backend from '../../static/images/icons/backend.png';
import programming from '../../static/images/icons/programming.png';
import cpu from '../../static/images/icons/cpu.png';

export default function MyWork() {
  return (
    <div className="my-work w-full p-10 pt-16">
      <div className="pt-8 pb-8 ml-auto mr-auto pr-4 pl-4 w-[70%]  ">
        <h1 className="text-6xl mb-8 text-white text-left">About me</h1>
        <p className="text-white pb-16 tracking-wide text-xl">
          I was never the best at School or University, always been just a super curious guy.
          I&apos;m always interested in learning new Stuff and dive deeper into specific Themes. That&apos;s also why I teached myself Web Development, so you can see this site.
          BTW, if you are interested in which Chicken Nuggets Sauce is the best or find out why (... is a good/bad thing),
          feel free to check out my
          {' '}
          <a href="/blog" className="hover:underline">Blog</a>
          .
        </p>

        <div className=" justify-center self-center">
          <div className="ml-auto mr-auto mt-14 mb-28 text-left">
            <img className="ml-8 float-left" src={backend} alt="Backend" />
            <div className="p-5">
              <h3 className="colorRed text-xl font-bold tracking-wide mb-4 ml-[18.5rem] uppercase leading-7">Backend</h3>
              <div>
                <ul className="list-disc text-white tracking-wide text-xl ml-[20rem]">
                  <li className="list-item">Java (JavaEE, Spring, Quarkus), Kotlin,  C++ (QT Framework), Python, PHP</li>
                  <li className="list-item">MySQL, PostgreSQL, OracleDB, MongoDB</li>
                  <li className="list-item">Docker, Kubernetes</li>
                  <li className="list-item">SOAP, REST</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-auto mr-auto mt-14 mb-44 text-left">
            <img className="ml-8 float-left" src={programming} alt="Frontend" />
            <div className="p-5">
              <h3 className="colorRed text-xl font-bold tracking-wide mb-4 ml-[18.5rem] uppercase leading-7">Frontend</h3>
              <div>
                <ul className="list-disc text-white tracking-wide text-xl ml-[20rem]">
                  <li className="list-item">HTML, CSS, JavaScript</li>
                  <li className="list-item">React, TailwindCSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-auto mr-auto mt-14 mb-52 text-left">
            <img className="ml-8 float-left" src={cloud} alt="Cloud" />
            <div className="p-5">
              <h3 className="colorRed text-xl font-bold tracking-wide mb-4 ml-[18.5rem] uppercase leading-7">Cloud Computing</h3>
              <div>
                <ul className="list-disc text-white tracking-wide text-xl ml-[20rem]">
                  <li className="list-item">AWS, DigitalOcean, Heroku</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-auto mr-auto mt-14 mb-24 text-left">
            <img className="ml-8 float-left" src={cpu} alt="Electronics" />
            <div className="p-5">
              <h3 className="colorRed text-xl font-bold tracking-wide mb-4 ml-[18.5rem] uppercase leading-7">Electronics</h3>
              <div className="pb-16">
                <ul className="list-disc text-white tracking-wide text-xl ml-[20rem]">
                  <li className="list-item">Embedded Systems</li>
                  <li className="list-item">ESP32, Arduino, RaspberryPI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
