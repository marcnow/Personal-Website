import React from "react";

export default function FutureVentures() {
    return (
        <div className="futureVentures w-full p-10">
            <div className="pt-16 pb-16 w-full ml-auto mr-auto pr-4 pl-4 max-w-6xl">
            <h3 className="tracking-[.4em] text-3xl pb-16">FUTURE VENTURES</h3>
            <p className="pb-5 tracking-wide text-lg ">Besides many other interests, I got following tech-related themes on my bucket list:</p>
            <div className="max-w-[50%] ml-7">
                <ul className="list-disc">
                    <li className="text-base tracking-wide list-item">Dive deeper into the Java World</li>
                    <li className="text-base tracking-wide list-item">Networking and Hacking</li>
                    <li className="text-base tracking-wide list-item">Operating Systems (especially Linux)</li>
                    <li className="text-base tracking-wide list-item">Machine Learning/AI</li>
                    <li className="text-base tracking-wide list-item">Read alooot more books about computer science</li>
                </ul>
            </div>
            </div>
        </div>
    );
}