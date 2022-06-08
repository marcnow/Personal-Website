import React from 'react';
import Avatar from '@mui/material/Avatar';

export default function FooterSocialMedia(props) {
  return (
    <div className="p-1 w-9 h-9">
      <a href={props.link}><Avatar alt={props.alt} src={props.img} /></a>
    </div>
  );
}
