import React from "react";
import SocialHomeItem from "./SocialHomeItem";
import Stack from "@mui/material/Stack";
import github from "../static/images/icons/github_transparent.png"
import linkedin from "../static/images/icons/linkedin_transparent.png"

export default function SocialHomeGroup() {

    return (
        <Stack top='50%' position="absolute">
        
            <SocialHomeItem 
                link="https://www.linkedin.com/in/marc-nowakowski-68947222b/"
                img={github}
                alt="GitHub"
            />
            <SocialHomeItem
                link="https://github.com/marcnow"
                img={linkedin}
                alt="LinkedIn"
            />
        
        </Stack>
    );
}