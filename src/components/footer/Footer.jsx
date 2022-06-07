import React from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FooterSocialMedia from "./FooterSocialMedia";
import socialMediaItems from "../../static/socialMedia";

const theme = createTheme({
    palette: {
      neutral: {
        main: '#fff',
        contrastText: '#fff',
      },
    },
});

export default function Footer() {
    return (
        <div className="footer">
                <div className="pt-28 pb-28 max-w-6xl ml-auto mr-auto">
                    <p className="text-white text-center pb-5 mb-2 tracking-widest text-lg font-[499]">STAY CONNECTED</p>
                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5}>
                        {socialMediaItems.map(item => 
                        <FooterSocialMedia
                            key={item.key} 
                            link={item.link}
                            img={item.img}
                            alt={item.alt}
                        />
                        )}
                    </Stack>
                </div>
                <Stack className="footer-stack" p={3} spacing={14}  direction="row" alignItems="center" justifyContent="center" >
                    <ThemeProvider theme={theme}>
                        <Button color="neutral">
                            <Link to="/">Marc Nowakowski</Link>
                        </Button>
                        <p className="divider">|</p>
                        <Button color="neutral">
                            <Link to="/software">Software</Link>
                        </Button>
                        <p className="divider">|</p>
                        <Button color="neutral">
                            <Link to="/blog">Blog</Link>
                        </Button>
                        <p className="divider">|</p>
                        <Button color="neutral">
                            <Link to="/contact">Contact</Link>
                        </Button>
                    </ThemeProvider>
                </Stack>
        </div>
    );
}