import React from "react";

export default function LandingDiv() {
    return (
        <div className="landing-div absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[40%] text-white">
            <h1 className="tracking-[.4em] text-4xl mb-2">MARC  NOWAKOWSKI </h1>
            <h3 className="text-2xl mb-2">Software Developer @ adesso <br/> Also teaching myself alot about software developing and sometimes i post dumb stuff on my <a href="/blog" className="hover:underline">blog</a>.</h3>
        </div>
    );
}