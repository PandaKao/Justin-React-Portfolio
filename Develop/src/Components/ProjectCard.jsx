import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Chip from '@mui/material/Chip';

export default function ProjectCard({ img, title, description, github, website, chips }) {
    return (
        <Card elevation={5}>
            <div>
                <Button
                    size="small"
                    sx={{ color: 'black' }}
                    aria-label="github repository"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon />
                </Button>
                {website && (
                    <Button
                        size="small"
                        sx={{ color: 'black' }}
                        aria-label="active web application"
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ArrowOutwardIcon />View Site
                    </Button>
                )}
            </div>
            <div>
                {img && <CardMedia
                    component="img"
                    alt={title}
                    image={img}
                />}
            </div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black' }}>{title}</Typography>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
            <CardActions>
                <div>
                    {chips.map((chip, index) => (
                        <Chip key={index} label={chip} style={{ marginRight: '0.02rem', marginBottom: '0.5rem', color: 'black' }} />
                    ))}
                </div>
            </CardActions>
        </Card>

    )
}