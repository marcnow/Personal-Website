import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function NavBar() {
    return (
        <nav className="h-32 flex">
          <Stack justifyContent="flex-start" alignItems="center" direction="row" p={6} spacing={4}  flex={1}>
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
          <Stack justifyContent="flex-end" alignItems="center" direction="row" p={6} flex={1}>
            <Button variant="outlined" >
              <Link to="/contact">Contact</Link>
            </Button>
          </Stack>
      </nav>
    );
}