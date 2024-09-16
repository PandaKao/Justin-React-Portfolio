import { useState, useRef, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../Utils/validation.js';


export default function ContactForm() {
    const formRef = useRef();
    const notiRef = useRef();
    const fullNameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const [formState, setFormState] = useState({ fullName: '', email: '', message: '' });
    const { fullName, email, message } = formState;
    const [isFormValid, setIsFormValid] = useState(false);
    const [notification, setNotification] = useState({ message: '', color: '' });

    //handle changes in form input
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState(({ ...formState, [name]: value }));
    }

    //input fields form validation
    const validateForm = () => {
        if (!fullName.trim()) {
            setNotification({ message: 'Please enter a name.', color: 'red' });
            return false;
        }

        if (!validateEmail(email)) {
            setNotification({ message: 'Please enter a valid email.', color: 'red' });
            return false;
        }

        if (!message.trim()) {
            setNotification({ message: 'Message cannot be empty.', color: 'red' });
            return false;
        }

        return true;
    }

    //update form validity whenever formState changes
    useEffect(() => {
        setIsFormValid(fullName.trim() !== '' && email !== '' && message.trim() !== '');
    }, [formState]);

    //scroll to notification when it changes
    useEffect(() => {
        if (notification && notiRef.current) {
            notiRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [notification]);

    //send email via emailjs
    const sendEmail = () => {
        emailjs
            .sendForm('service_f4kocmq', 'template_049872l', formRef.current, 'eepufiExqDmEocdZx')
            .then(
                () => {
                    console.log('SUCCESS!');
                    setNotification({ message: 'Email sent successfully!', color: 'black' }); //change this color to match style
                    setFormState({ fullName: '', email: '', message: '' });
                    fullNameRef.current?.blur();
                    emailRef.current?.blur();
                    messageRef.current?.blur();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setNotification({ message: 'Failed to send email.', color: 'red' });
                },
            );
    };

    //handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            sendEmail();
        }
    };

    return (
        <Container id='contact' component='main' maxWidth='xs' sx={{
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
                <Typography component='h1' variant='h5'>
                    Contact Me
                </Typography>
                <Box ref={formRef} component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <TextField
                                name='fullName'
                                required
                                fullWidth
                                value={fullName}
                                onChange={handleInputChange}
                                label='Full Name'
                                autoFocus
                                inputRef={fullNameRef}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <TextField
                                name='email'
                                required
                                fullWidth
                                value={email}
                                onChange={handleInputChange}
                                label='Email Address'
                                inputRef={emailRef}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <TextField
                                name='message'
                                required
                                fullWidth
                                label='Message'
                                type='text'
                                value={message}
                                onChange={handleInputChange}
                                multiline minRows={4}
                                inputRef={messageRef}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mb: 2 }}
                        disabled={!isFormValid}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
            {notification.message && <Typography ref={notiRef} sx={{ mt: 2, color: notification.color }}>{notification.message}</Typography>}
        </Container>
    );
}