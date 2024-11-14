import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Me from "./Me";
import Languages from "./Languages";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
    <AppBar position="sticky">
      <Toolbar sx={{ color: 'black', backgroundColor: 'whitesmoke', height: '80px', borderBottom: 'none' }}>
        <Typography variant="h3" sx={{ color: 'black', fontWeight: 'bold' }}>
          ONEVA'S PORTFOLIO
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Link href="#" sx={{ color: 'black', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            HOME
          </Link>
          <Link href="#" sx={{ color: 'black', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            ABOUT
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
    <Hero/>
    <About/>
    <Me/>
    <Languages/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
