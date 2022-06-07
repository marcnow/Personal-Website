import React from "react";
import Stack from "@mui/material/Stack";
import { Element } from "react-scroll"

export default function MyWork() {
    return (
        <div className="my-work w-full p-10 pt-16">
            <Element name="about-me">
            <div className="pt-16 pb-16 w-full ml-auto mr-auto pr-4 pl-4 max-w-6xl">
                <h3 className="tracking-[.4em] text-3xl pb-16 text-white">ABOUT ME</h3>
                <p className="text-white pb-16 tracking-wide text-lg ">I was never the best at school or university, always been just a super curious guy.
                I'm always interested in learning new stuff and dive deeper into specific themes. That's also why I teached myself web development, so you can see this site. 
                BTW, if you are interested in which chicken nuggets sauce is the best or find out why (... is a good/bad thing), 
                feel free to check out my <a href="/blog" className="hover:underline">blog</a>.</p>
                <Stack direction="row" spacing={10} alignItems="flex-start" justifyContent="space-around" >
                    <div className="text-white max-w-[25%]">
                        <h5 className="text-xl mb-2">Backend</h5>
                        <ul className="list-disc">
                            <li className="text-sm list-item">Java (JavaEE, Spring, Quarkus), Kotlin,  C++ (QT Framework), Python, PHP</li>
                            <li className="text-sm list-item">MySQL, PostgreSQL, OracleDB, MongoDB</li>
                            <li className="text-sm list-item">Docker, Kubernetes</li>
                            <li className="text-sm list-item">SOAP, REST</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h5 className="text-xl mb-2">Frontend</h5>
                        <ul className="list-disc">
                            <li className="text-sm list-item">HTML, CSS, JavaScript</li>
                            <li className="text-sm list-item">React, TailwindCSS</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h5 className="text-xl mb-2">Electronics</h5>
                        <ul className="list-disc">
                            <li className="text-sm list-item">Embedded Systems</li>
                            <li className="text-sm list-item">ESP32, Arduino, RaspberryPI</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h5 className="text-xl mb-2">Other</h5>
                        <ul className="list-disc">
                            <li className="text-sm list-item">Cloud Computing (AWS)</li>
                            <li className="text-sm list-item">3D Printing</li>
                        </ul>
                    </div>
                </Stack>
            </div>
            </Element>
        </div>
    );
}