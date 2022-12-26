import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../static/images/logo192.png';

export default function NavBar() {
  return (
    <div className="primaryColor">
      <div className="min-h-[24px]" />
      <nav className="flex justify-between">
        <div>
          <ul className="flex robotoMono items-center">
            <li>
              <Link className="listItem relative flex pr-4 pt-4 pb-4" to="/">
                <span>01</span>
                home
              </Link>
            </li>
            <li>
              <Link className="listItem relative flex p-4" to="/software">
                <span>02</span>
                software
              </Link>
            </li>
            <li>
              <Link className="listItem relative flex p-4" to="/blog">
                <span>03</span>
                blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <a className="items-center flex" href="/">
            <img className="w-12 h-12 align-middle rounded-[50%] mr-2" alt="Marc Nowakowski" src={profile} />
            <span className="name font-bold">Marc Nowakowski</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
