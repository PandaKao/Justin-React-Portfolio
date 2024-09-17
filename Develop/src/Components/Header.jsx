import Grid from '@mui/material/Grid2';

export default function Header() {
  return (
    <Grid container id='top'>
      <Grid item size={{ xs: 12 }} sx={{ textAlign: 'left' }}>
        <h1 id='home'>Justin Kao</h1>
        <h1>Full-Stack</h1>
        <h1>Developer</h1>
      </Grid>
    </Grid>
  );
}