import Grid from '@mui/material/Grid2';
import NavBarLeft from './Components/NavBarLeft.jsx';
import SocialBarRight from './Components/SocialBarRight.jsx'
import Header from './Components/Header.jsx';
import AboutMe from './Components/AboutMe.jsx'
import Projects from './Components/Projects.jsx';
import ContactForm from './Components/ContactForm.jsx';
import Footer from './Components/Footer.jsx';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    tertiary: {
      main: '#000000',
      contrastText: '#ffffff',
    }
  },
  typography: {
    fontFamily: [
      'Droid Serif',
      'sans-serif',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 670,
      md: 900,
      lg: 1024,
      xl: 1200
    }
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Grid container spacing={2}>
            <Grid sx={{justifyContent: 'center', alignItems: 'center'}} size={{ xs: 1 }}>
              <NavBarLeft />
            </Grid>
            <Grid size={{ xs: 10 }}>
              <Header />
              <AboutMe />
              <Projects />
              <ContactForm />
              <Footer />
            </Grid>
            <Grid size={{ xs: 1 }}>
              <SocialBarRight />
            </Grid>
          </Grid>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;