import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../static/images/logo192.png';

export default function NavBar() {
  return (
    <div className="navbar sticky top-0">
      <div className="navbar min-w-[48px] min-h-[48px]" />
      <nav className="flex items-center w-[90%] ml-auto mr-auto max-w-[1250px] justify-between">
        <div>
          <a className="text-white items-center flex" href="/">
            <img className="block w-12 h-12 align-middle rounded-[50%] mr-2 border-0" alt="Marc Nowakowski" src={profile} />
            <span className="name font-bold">Marc Nowakowski</span>
          </a>
        </div>
        <div>
          <ul className="flex p-0 m-0">
            <li className="relative">
              <Link className="listItem text-white flex items-center relative p-4 whitespace-nowrap" to="/">
                <span className="block mr-2 font-bold">01</span>
                home
              </Link>
            </li>
            <li className="relative">
              <Link className="listItem text-white flex items-center relative p-4 whitespace-nowrap" to="/software">
                <span className="block mr-2 font-bold">02</span>
                software
              </Link>
            </li>
            <li className="relative">
              <Link className="listItem text-white flex items-center relative p-4 whitespace-nowrap" to="/blog">
                <span className="block mr-2 font-bold">03</span>
                blog
              </Link>
            </li>
            <li className="relative">
              <Link className="listItem text-white flex items-center relative p-4 whitespace-nowrap" to="/contact">
                <span className="block mr-2 font-bold">04</span>
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
