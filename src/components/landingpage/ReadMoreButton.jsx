import React from 'react';
import { scroller } from 'react-scroll';

function scrollTo() {
  scroller.scrollTo('about-me', {
    duration: 1000,
    delay: 0,
    smooth: 'true',
  });
}

export default function ReadMoreButton() {
  return (
    <div>
      <div className="text-center absolute left-[calc(50%-3.4rem)] top-[calc(100%-7.5rem)]">
        <h3 className="text-2xl tracking-wide mb-2 text-white leading-loose">Read More</h3>
        <button onClick={() => scrollTo()} type="button" className="relative text-5xl inher">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="white" stroke="none">
              <path d="M207 4822 l-207 -207 1278 -1278 1277 -1277 1275 1275 1275 1275 -210 210 -210 210 -1065 -1065 -1065 -1065 -1065 1065 c-586 586 -1067 1065 -1070 1065 -3 0 -98 -93 -213 -208z" />
              <path d="M207 2652 l-207 -207 1223 -1223 1222 -1222 110 0 110 0 1218 1218 c669 669 1217 1222 1217 1227 0 6 -92 102 -205 215 l-205 205 -1068 -1068 -1067 -1067 -1065 1065 c-586 586 -1067 1065 -1070 1065 -3 0 -98 -93 -213 -208z" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
