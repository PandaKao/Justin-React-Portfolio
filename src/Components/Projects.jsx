import Grid from '@mui/material/Grid2';
import ProjectCard from './ProjectCard.jsx';
// import Picturific from '../assets/images/Picturific-index-home.png';
// import Portfolio from '../assets/images/portfolio.png';
// import WeatherForecast from '../assets/images/WeatherForecast.png';
//put project pngs in public


const projectData = [
    {
        //need to fill with image, title, github link, website, chip
        img: './portfolio.png',
        title: 'Portfolio',
        description: 'A personal portfolio built with React, showcasing a diverse range of projects.',
        github: 'https://github.com/PandaKao/Justin-React-Portfolio',
        website: 'https://justinkao.netlify.app/',
        chips: ['React.js', 'Material UI']
    },
    {
        img: './Picturific-index-home.png',
        title: 'Picturific',
        description: 'Picturific is a photo management application allowing users to tag, organize, and view their images.',
        github: 'https://github.com/PandaKao/Picturific',
        website: 'https://pandakao.github.io/Picturific/',
        chips: ['Bootstrap', 'HTML', 'CSS']
    },
    {
        img: './WeatherForecast.png',
        title: '5 Day Forecast',
        description: 'A weather application that provides a detailed 5-day forecast displaying key information such as temperature and weather conditions.',
        github: 'https://github.com/PandaKao/5-Day-Forecast',
        website: 'https://five-day-forecast.onrender.com',
        chips: ['TypeScript', 'Node.js', 'HTML', 'CSS']
    },
    {
        img: 'https://placedog.net/497',
        title: 'Portfolio4',
        description: 'A personal portfolio built with React, showcasing a diverse range of projects',
        github: 'https://placedog.net/500',
        website: 'https://placedog.net/500',
        chips: ['React.js', 'Material UI']
    },
    {
        img: 'https://placedog.net/496',
        title: 'Portfolio5',
        description: 'A personal portfolio built with React, showcasing a diverse range of projects',
        github: 'https://placedog.net/500',
        website: 'https://placedog.net/500',
        chips: ['React.js', 'Material UI']
    },
    {
        img: 'https://placedog.net/495',
        title: 'Portfolio6',
        description: 'A personal portfolio built with React, showcasing a diverse range of projects',
        github: 'https://placedog.net/500',
        website: 'https://placedog.net/500',
        chips: ['React.js', 'Material UI']
    },
]

export default function Projects() {
    return (
        <>
            <Grid container id='projects' spacing={4} sx={{ padding: 4, minheight: '100vh' }}>
                <Grid size={{ xs: 12 }}>
                    <h2>Projects</h2>
                    <p>These are the projects I’ve developed both individually and as part of a team. They challenged me to engage with front-end, back-end, and full-stack development, enabling me to create everything from intuitive user interfaces to comprehensive end-to-end solutions.</p>
                </Grid>
                <Grid container spacing={4} justifyContent='center' sx={{ flexWrap: 'wrap' }}>
                    {projectData.map((project, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
                            <ProjectCard {...project} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </>
    );
}