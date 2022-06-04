import github from "./images/icons/github_transparent.png"
import linkedin from "./images/icons/linkedin_transparent.png"
import email from "./images/icons/email_transparent.png"
import dockerhub from "./images/icons/docker_transparent.png"

const socialMediaItems = [
    {
        key: 1,
        link:"https://github.com/marcnow",
        img:github,
        alt:"GitHub"
    },
    {
        key: 2, 
        link:"https://hub.docker.com/u/marcnow",
        img:dockerhub,
        alt:"DockerHub"
    },
    {
        key: 3,
        link:"https://www.linkedin.com/in/marc-nowakowski-68947222b/",
        img:linkedin,
        alt:"LinkedIn"
    },
    {
        key: 4,
        link: "/contact",
        img:email,
        alt:"E-Mail"
    }
];

export default socialMediaItems;