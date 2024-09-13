import Grid from '@mui/material/Grid';

export default function Header() {  
    return (
        <Grid container id='top'>
          <Grid item xs={12} sm={10} md={8} sx={{ textAlign: 'left' }}>
            <h1>Justin Kao</h1>
            <h1>Full-Stack</h1>
            <h1>Developer</h1>
          </Grid>
        </Grid>
    );
  }