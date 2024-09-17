import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

export default function Header() {
  return (
    <Box id='top' sx={{height: '100vh'}}>
      <Grid container>
        <Grid item size={{ xs: 12 }} sx={{ textAlign: 'left' }}>
          <h1 id='home'>Justin Kao</h1>
          <h1>Full-Stack</h1>
          <h1>Web Developer</h1>
        </Grid>
      </Grid>
    </Box>

  );
}