import Grid from '@mui/material/Grid2';
import NavBarLeft from './Components/NavBarLeft.jsx';
import SocialBarRight from './Components/SocialBarRight.jsx'
import Header from './Components/Header.jsx';
import AboutMe from './Components/AboutMe.jsx'
import Projects from './Components/Projects.jsx';
import ContactForm from './Components/ContactForm.jsx';

function App() {
  return (
    <>
      <main>
        <Grid container spacing={2}>
          <Grid item size={{xs:1}}>
            <NavBarLeft />
          </Grid>
          <Grid item size={{xs:10}}>
            <Header />
            <AboutMe />
            <Projects />
            <ContactForm />
          </Grid>
          <Grid item size={{xs:1}}>
            <SocialBarRight />
          </Grid>
        </Grid>


      </main>

    </>
  );
}

export default App;