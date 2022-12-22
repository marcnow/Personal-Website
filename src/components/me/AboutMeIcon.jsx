/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default function AboutMeIcon(props) {
  return (
    <div className="flex mt-10 pasb-10">
      <img className="icon" src={props.img} alt={props.name} />
      <div className="p-5 ml-6">
        <h2>{props.name}</h2>
        <ul className="robotoMono list-disc tracking-wide text-xl ml-6 mt-4">
          {props.skills.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
