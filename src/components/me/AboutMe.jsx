/* eslint-disable max-len */
import React from 'react';
import iconList from '../../static/iconList';
import AboutMeIcon from './AboutMeIcon';

export default function MyWork() {
  return (
    <div className="pt-8">
      <div>
        <h1>About me</h1>
        <p className="robotoMono">
          I&apos;ve never been the best at School or University, always been just a curious guy.
          I&apos;m always interested in learning new Stuff and dive deeper into specific Themes. That&apos;s also why I teached myself Web Development, as you can see this website.
        </p>
        <p className="robotoMono pb-8">
          I&apos;m also teaching myself about Software Developing and sometimes I post random stuff on my
          {' '}
          <a href="/blog" className="hover:underline">Blog</a>
          .
        </p>
        {iconList.map((item) => (
          <AboutMeIcon
            key={item.key}
            name={item.name}
            img={item.img}
            skills={item.skills}
          />
        ))}
      </div>
      <div className="min-h-[24px]" />
    </div>
  );
}
