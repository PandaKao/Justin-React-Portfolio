import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Chip from '@mui/material/Chip';

const styles = {
    card: {
      background: 'transparent',
      borderRadius: 2,
      border: '1px solid #000',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    },
    container: {
        height: '100%',
        weight: '100%',
        overflow: 'hidden',
    },
    icons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '5px',
    }
  };

export default function ProjectCard({ img, title, description, github, website, chips }) {
    return (
        <Card style={styles.card} elevation={5}>
            <div style={styles.icons}>
                <Button
                    size='small'
                    sx={{ color: '#ffffff' }}
                    aria-label='github repository'
                    href={github}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <GitHubIcon />
                </Button>
                {website && (
                    <Button
                        size='small'
                        sx={{ color: '#ffffff' }}
                        aria-label='active web application'
                        href={website}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <ArrowOutwardIcon />View Site
                    </Button>
                )}
            </div>
            <div style={styles.container}>
                {img && <CardMedia
                    component='img'
                    alt={title}
                    image={img}
                />}
            </div>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div' sx={{ color: '#ffffff' }}>{title}</Typography>
                <Typography variant='body2'>{description}</Typography>
            </CardContent>
            <CardActions>
                <div>
                    {chips.map((chip, index) => (
                        <Chip key={index} label={chip} style={{ marginRight: '1rem', marginBottom: '0.5rem', color: '#ffffff', border: '1px solid #000' }} />
                    ))}
                </div>
            </CardActions>
        </Card>

    )
}