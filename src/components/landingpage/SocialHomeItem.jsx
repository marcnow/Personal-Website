import React from "react";
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';

export default function SocialHomeItem(props) {
    return (
        <div className="p-1 w-9 h-9">
            <a href={props.link}><Avatar sx={{bgcolor: blue[200], width: 27, height: 27 }} alt={props.alt} src={props.img}/></a>
        </div>
    );
}