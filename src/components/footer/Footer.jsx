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
    <div className="footer">
      <hr className="divider" />
      <div className="pt-16 pb-20 max-w-6xl ml-auto mr-auto text-center">
        <h3 className="colorRed text-xl font-bold tracking-wide ml-2 uppercase pb-4 leading-7">Stay Connected</h3>
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
      <hr className="divider" />
      <Stack className="footer-stack" p={2} direction="row" alignItems="center" justifyContent="center">
        <div>
          <ul className="flex p-0 m-0">
            <li className="relative">
              <Link className="robotoMono text-white flex items-center relative p-4 whitespace-nowrap" to="/">
                home
              </Link>
            </li>
            <p className="divider p-3.5 ml-10 mr-10">|</p>
            <li className="relative">
              <Link className="robotoMono text-white flex items-center relative p-4 whitespace-nowrap" to="/software">
                software
              </Link>
            </li>
            <p className="divider p-3.5 ml-10 mr-10">|</p>
            <li className="relative">
              <Link className="robotoMono text-white flex items-center relative p-4 whitespace-nowrap" to="/blog">
                blog
              </Link>
            </li>
          </ul>
        </div>
      </Stack>
    </div>
  );
}
