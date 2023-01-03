/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../static/images/logo192.png';

export default function NavBar() {
  return (
    <div className="primaryColor">
      <div className="min-h-[24px]" />
      <div className="flex justify-between mb:p-2">
        <div>
          <a className="items-center flex mt-4" href="/">
            <img className="w-12 h-12 align-middle rounded-[50%] mr-2" alt="Marc Nowakowski" src={profile} />
            <span className="name font-bold">Marc Nowakowski</span>
          </a>
        </div>
        <input className="side-menu" type="checkbox" id="side-menu" />
        <label className="hamb" htmlFor="side-menu"><span className="hamb-line" /></label>
        <nav className="nav nav:mt-20">
          <ul className="flex robotoMono items-center nav:block">
            <li>
              <Link className="listItem relative flex pr-4 pt-4 pb-4 mb:pl-3 lp:pl-3 mb:text-base" to="/">
                <span>01</span>
                home
              </Link>
            </li>
            <li>
              <Link className="listItem relative flex p-4  mb:text-base" to="/software">
                <span>02</span>
                software
              </Link>
            </li>
            <li>
              <Link className="listItem relative flex p-4 mb:text-base" to="/blog">
                <span>03</span>
                blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
