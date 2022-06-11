import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import profile from '../static/images/logo192.png';

export default function NavBar() {
  return (
    <div className="navbar sticky top-0">
      <nav className="flex items-center justify-center">
        <div>
          <ul>
            <li variant="outlined">
              <a className="text-white" href="/">
                <Avatar alt="Marc Nowakowski" src={profile} />
                Marc Nowakowski
              </a>
            </li>
          </ul>
        </div>
        <div>

          <Button variant="outlined">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
}
