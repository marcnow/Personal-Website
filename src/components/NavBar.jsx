import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const padding = 0;
const paddingSides = 0;

const theme = createTheme({
  palette: {
    neutral: {
      main: '#fff',
      contrastText: '#fff',
    },
  },
});

export default function NavBar() {
    return (
      <div className="navbar sticky top-0">
        <nav className="flex items-center justify-center">
          <Stack justifyContent="flex-start" alignItems="center" direction="row" p={padding} pl={paddingSides} spacing={4}  flex={1}>
            <ThemeProvider theme={theme}>
              <Button variant="outlined">
                <Link to="/">Marc Nowakowski</Link>
              </Button>
              <Button variant="outlined">
                <Link to="/software">Software</Link>
              </Button>
              <Button variant="outlined" >
                <Link to="/blog">Blog</Link>
              </Button>
            </ThemeProvider>
          </Stack>
          <Stack justifyContent="flex-end" alignItems="center" direction="row" p={padding} pr={paddingSides} flex={1}>
            <ThemeProvider theme={theme}>
              <Button variant="outlined">
                <Link to="/contact">Contact</Link>
              </Button>
            </ThemeProvider>
            </Stack>
      </nav>
    </div>
    );
}