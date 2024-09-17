import Grid from '@mui/material/Grid2';
import { Grow } from '@mui/material';
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
            <h2 id='projects'>Projects</h2>
            <p>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.</p>
            <Grid container spacing={4} justifyContent='center' sx={{ flexWrap: 'wrap' }}>
                {projectData.map((project, index) => (
                        <Grid key={index} item size={{xs:12, sm:6, md:6, lg:6, xl:4}}>
                            <ProjectCard {...project} />
                        </Grid>
                ))}
            </Grid>
        </>
    );
}