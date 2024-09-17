import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import ProjectCard from './ProjectCard.jsx';

const projectData = [
    {
        //need to fill with image, title, github link, website, chip
        img: 'https://placedog.net/494',
        title: 'Portfolio1',
        description: 'A personal portfolio built with React, showcasing a diverse range of projects',
        github: 'https://placedog.net/500',
        website: 'https://placedog.net/500',
        chips: ['React.js', 'Material UI']
    },
    {
        img: 'https://placedog.net/499',
        title: 'Portfolio2',
        description: 'A personal portfolio built with React, showcasing a diverse range of projects',
        github: 'https://placedog.net/500',
        website: 'https://placedog.net/500',
        chips: ['React.js', 'Material UI']
    },
    {
        img: 'https://placedog.net/498',
        title: 'Portfolio3',
        description: 'A personal portfolio built with React, showcasing a diverse range of projects',
        github: 'https://placedog.net/500',
        website: 'https://placedog.net/500',
        chips: ['React.js', 'Material UI']
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
            <Box id='projects' sx={{ padding: 4, height: 'auto', minHeight: '100vh' }}>
                <h2>Projects</h2>
                <p>These are the projects I’ve developed both individually and as part of a team. They challenged me to engage with front-end, back-end, and full-stack development, enabling me to create everything from intuitive user interfaces to comprehensive end-to-end solutions.</p>
                <Grid container spacing={4} justifyContent='center' sx={{ flexWrap: 'wrap' }}>
                    {projectData.map((project, index) => (
                        <Grid key={index} item size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
                            <ProjectCard {...project} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </>
    );
}