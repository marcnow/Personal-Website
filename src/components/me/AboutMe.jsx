/* eslint-disable max-len */
import React from 'react';
import cloud from '../../static/images/icons/cloud.png';
import backend from '../../static/images/icons/backend.png';
import programming from '../../static/images/icons/programming.png';
import cpu from '../../static/images/icons/cpu.png';

export default function MyWork() {
  return (
    <div className="my-work p-10 pt-16">
      <div className="pt-8 pb-8 ml-auto mr-auto pr-4 pl-4  w-full max-w-[1100px] ">
        <h1 className="text-6xl mb-8 text-white text-left">About me</h1>
        <p className="paragraph text-white pb-16 tracking-wide text-xl">
          I&apos;ve never been the best at School or University, always been just a curious guy.
          I&apos;m always interested in learning new Stuff and dive deeper into specific Themes. That&apos;s also why I teached myself Web Development, as you can this website.
        </p>

        <div className=" justify-center self-center">
          <div className="ml-auto mr-auto mt-14 mb-20 text-left">
            <img className="ml-8 float-left" src={backend} alt="Backend" />
            <div className="p-5">
              <h3 className="colorRed text-xl font-bold tracking-wide mb-4 ml-[18.5rem] uppercase leading-7">Backend</h3>
              <div>
                <ul className="list-disc text-white tracking-wide text-xl ml-[20rem] paragraph">
                  <li className="list-item">Java (JavaEE, Spring, Quarkus), Kotlin,  C++ (QT Framework), Python, PHP</li>
                  <li className="list-item">MySQL, PostgreSQL, OracleDB, MongoDB</li>
                  <li className="list-item">Docker, Kubernetes</li>
                  <li className="list-item">SOAP, REST</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-auto mr-auto mt-14 mb-36 text-left">
            <img className="ml-8 float-left" src={programming} alt="Frontend" />
            <div className="p-5">
              <h3 className="colorRed text-xl font-bold tracking-wide mb-4 ml-[18.5rem] uppercase leading-7">Frontend</h3>
              <div>
                <ul className="list-disc text-white tracking-wide text-xl ml-[20rem] paragraph">
                  <li className="list-item">HTML, CSS, JavaScript</li>
                  <li className="list-item">React, TailwindCSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-auto mr-auto mt-14 mb-44 text-left">
            <img className="ml-8 float-left" src={cloud} alt="Cloud" />
            <div className="p-5">
              <h3 className="colorRed text-xl font-bold tracking-wide mb-4 ml-[18.5rem] uppercase leading-7">Cloud Computing</h3>
              <div>
                <ul className="list-disc text-white tracking-wide text-xl ml-[20rem] paragraph">
                  <li className="list-item">AWS, DigitalOcean, Heroku</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-auto mr-auto mt-14 mb-16 text-left">
            <img className="ml-8 float-left" src={cpu} alt="Electronics" />
            <div className="p-5">
              <h3 className="colorRed text-xl font-bold tracking-wide mb-4 ml-[18.5rem] uppercase leading-7">Electronics</h3>
              <div className="pb-16">
                <ul className="list-disc text-white tracking-wide text-xl ml-[20rem] paragraph">
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
