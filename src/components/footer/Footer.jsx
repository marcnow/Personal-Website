/* eslint-disable react/button-has-type */
import React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import FooterSocialMedia from './FooterSocialMedia';
import socialMediaItems from '../../static/socialMedia';
import email from '../../static/images/icons/email_transparent.png';

export default function Footer() {
  return (
    <div className="secondaryColor">
      <hr />
      <div className="pt-16 pb-20 text-center">
        <h2 className="ml-2 pb-2">Stay Connected</h2>
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={2.5}>
          {socialMediaItems.map((item) => (
            <FooterSocialMedia
              key={item.key}
              link={item.link}
              img={item.img}
              alt={item.alt}
            />
          ))}
          <div className="p-1 w-9 h-9">
            <a href="mailto:marc@marcnowakowski.io"><Avatar alt="Email" src={email} /></a>
          </div>
        </Stack>
      </div>
      <hr />
      <Stack pt={2} direction="row" alignItems="center" justifyContent="center">
        <div>
          <ul className="flex robotoMono">
            <li>
              <Link className="flex pt-4" to="/">home</Link>
            </li>
            <p className="divider">|</p>
            <li>
              <Link className="flex pt-4" to="/software">software</Link>
            </li>
            <p className="divider">|</p>
            <li>
              <Link className="flex pt-4" to="/blog">blog</Link>
            </li>
          </ul>
        </div>
      </Stack>
    </div>
  );
}
