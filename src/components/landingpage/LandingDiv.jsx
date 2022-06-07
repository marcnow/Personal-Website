import React from "react";

export default function LandingDiv() {
    return (
        <div className="landing-div absolute top-1/2 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[90%] text-white">
            <h1 className="text-8xl mb-2">I'm a Software Developer @ adesso SE.</h1>
            <h3 className="text-2xl mb-2">Also teaching myself alot about Software Developing and sometimes I post random stuff on my <a href="/blog" className="hover:underline">blog</a>.</h3>
        </div>
    );
}