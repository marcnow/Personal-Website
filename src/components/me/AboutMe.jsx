/* eslint-disable max-len */
import React from 'react';
import iconList from '../../static/iconList';
import AboutMeIcon from './AboutMeIcon';

export default function MyWork() {
  return (
    <div>
      <div>
        <div className="mb:p-3 lp:p-3">
          <h1 className="pb-5">About me</h1>
          <p className="robotoMono">
            I&apos;ve never been the best at School or University, always been just a curious guy.
            I&apos;m always interested in learning new Stuff and dive deeper into specific Themes. That&apos;s also why I teached myself Web Development, as you can see this website.
          </p>
          <p className="robotoMono pb-8">
            Sometimes I also post random stuff on my
            {' '}
            <a href="/blog" className="hover:underline">Blog</a>
            .
          </p>
        </div>
        {iconList.map((item) => (
          <AboutMeIcon
            key={item.key}
            name={item.name}
            img={item.img}
            skills={item.skills}
          />
        ))}
      </div>
      <div className="h-24" />
    </div>
  );
}
