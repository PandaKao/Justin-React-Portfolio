import { Grid } from '@mui/material';
import NavBar from './Components/NavBar.jsx';
import Header from './Components/Header.jsx';
import AboutMe from './Components/AboutMe.jsx'
import Projects from './Components/Projects.jsx';
import ContactForm from './Components/ContactForm.jsx';

function App() {
  return (
    <>
      <main>
        <Grid container style={{ height: '190vh' }}>
          <Grid item xs={1}>
            <NavBar />
          </Grid>

          <Grid item xs={10}>
            <Header />
            <AboutMe />
            <Projects />
            <ContactForm />
          </Grid>
        </Grid>


      </main>

    </>
  );
}

export default App;