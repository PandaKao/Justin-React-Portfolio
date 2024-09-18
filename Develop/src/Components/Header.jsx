import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Profile from '../assets/images/JKao.png';

export default function Header() {
  return (
    <Box container id="home" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <Grid size={{ xs: 6}} sx={{ textAlign: 'left' }}>
          <h2>Justin Kao</h2>
          <h1>Full-Stack</h1>
          <h1>Web Developer</h1>
        </Grid>
        <Grid size={{ xs: 6}} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <img src={Profile} alt='Profile' style={{maxWidth: '400px'}} />
        </Grid>
    </Box>
  );
}