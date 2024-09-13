import { useState, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import emailjs from '@emailjs/browser';


export default function ContactForm() {
    const form = useRef();
    const [formState, setFormState] = useState({ fullName: '', email: '', message: '' });
    const { fullName, email, message } = formState;
    const [notification, setNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState(({ ...formState, [name]: value}));
    }

    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs
          .sendForm('service_f4kocmq', 'template_049872l', form.current, 'eepufiExqDmEocdZx')
          .then(
            () => {
              console.log('SUCCESS!');
              setNotificationMessage('Email sent successfully!');
              setNotification(true);
            },
            (error) => {
              console.log('FAILED...', error.text);
              setNotificationMessage('Failed to send email.');
              setNotification(true);
            },
          );
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendEmail(event);
    };

    return (
        <Container id='contact' component="main" maxWidth='xs' sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Contact Me
                </Typography>
                <Box ref={form} component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <TextField
                                autoComplete="given-name"
                                name="fullName"
                                required
                                fullWidth
                                value={fullName}
                                onChange={handleInputChange}
                                label="Full Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <TextField
                                required
                                fullWidth
                                value={email}
                                onChange={handleInputChange}
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <TextField
                                required
                                fullWidth
                                name="message"
                                label="Message"
                                type="text"
                                value={message}
                                onChange={handleInputChange}
                                multiline
                                minRows={4}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mb: 2 }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
            {notification && <Typography sx={{}}>{notificationMessage}</Typography>}
        </Container>
    );
}