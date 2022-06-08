import React from 'react';
import Stack from '@mui/material/Stack';
import SocialHomeItem from './SocialHomeItem';
import socialMediaItems from '../../static/socialMedia';

export default function SocialHomeGroup() {
  return (
    <Stack top="50%" position="absolute">

      {socialMediaItems.map((item) => (
        <SocialHomeItem
          key={item.key}
          link={item.link}
          img={item.img}
          alt={item.alt}
        />
      ))}
    </Stack>
  );
}
