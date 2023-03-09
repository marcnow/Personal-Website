/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default function AboutMeIcon(props) {
  return (
    <div className="flex mb:block mt-10">
      <img className="icon" src={props.img} alt={props.name} />
      <div className="p-5 ml-6 mb:ml-2">
        <h2>{props.name}</h2>
        <ul className="robotoMono list-disc ml-6">
          {props.skills.map((item) => (
            <li className="about">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
