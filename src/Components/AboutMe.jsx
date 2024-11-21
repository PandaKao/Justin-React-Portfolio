import Box from '@mui/material/Box';

export default function AboutMe() {
    return (
        <Box id='about' sx={{ padding: 4, height: '100vh' }}>
            <h2>About Me</h2>
            <p className ='main-text'>
                I'm a passionate and solutions-driven full-stack web developer based in Irvine.
                With a web development certificate from UCI's bootcamp and hand-on experience in both
                frontend and backend technologies, I thrive in turning innovative ideas into functional
                and user-friendly applications. I specialize in creating responsive, mobile-first designs 
                and scalable web solutions using modern frameworks. Whether it's designing sleek interfaces
                or building robust APIs, I enjoy taking complex problems and delivering impactful results.
            </p>
        </Box>
    );
}