import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const padding = 8;
const paddingSides = 30;


export default function NavBar() {
    return (
        <nav className="h-32 flex">
          <Stack justifyContent="flex-start" alignItems="center" direction="row" p={padding} pl={paddingSides} spacing={4}  flex={1} >
            <Button variant="outlined">
              <Link to="/">Marc Nowakowski</Link>
            </Button>
            <Button variant="outlined">
              <Link to="/software">Software</Link>
            </Button>
            <Button variant="outlined" >
              <Link to="/blog">Blog</Link>
            </Button>
          </Stack>
          <Stack justifyContent="flex-end" alignItems="center" direction="row" p={padding} pr={paddingSides} flex={1}>
            <Button variant="outlined" >
              <Link to="/contact">Contact</Link>
            </Button>
          </Stack>
      </nav>
    );
}