import Grid from '@mui/material/Grid';
import { Grow } from '@mui/material';
import ProjectCard from './ProjectCard.jsx';

const projectData = [
    {
        //need to fill with image, title, github link, website, chip
        img: 'https://placedog.net/500',
        title: 'Portfolio',
        description: 'A personal portfolio built with React, showcasing a diverse range of projects',
        github: 'https://placedog.net/500',
        website: 'https://placedog.net/500',
        chips: ['React.js', 'Material UI']
    },
]

export default function Projects() {
    return (
        <div>
            <h2 id='projects'>Projects</h2>
            <Grid>
                {projectData.map((project, index) => (
                    <Grow key={index} in={true} timeout={1500 * index}>
                        <Grid key={index} item xs={12} sm={6} md={6} lg={6} xl={4}>
                            <ProjectCard {...project} />
                        </Grid>
                    </Grow>
                ))}
            </Grid>
        </div>
    );
}