import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const padding = 8;
const paddingSides = 35;

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
        <nav className="h-32 flex">
          <Stack justifyContent="flex-start" alignItems="center" direction="row" p={padding} pl={paddingSides} spacing={4}  flex={1}>
            <ThemeProvider theme={theme}>
              <Button variant="outlined" color="neutral">
                <Link to="/">Marc Nowakowski</Link>
              </Button>
              <Button variant="outlined" color="neutral">
                <Link to="/software">Software</Link>
              </Button>
              <Button variant="outlined" color="neutral">
                <Link to="/blog">Blog</Link>
              </Button>
            </ThemeProvider>
          </Stack>
          <Stack justifyContent="flex-end" alignItems="center" direction="row" p={padding} pr={paddingSides} flex={1}>
            <ThemeProvider theme={theme}>
              <Button variant="outlined" color="neutral">
                <Link to="/contact">Contact</Link>
              </Button>
            </ThemeProvider>
            </Stack>
      </nav>
    );
}