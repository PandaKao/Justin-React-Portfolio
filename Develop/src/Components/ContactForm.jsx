import { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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

    //validate individual fields
    const validateField = (fieldName, value) => {
        let errorMessage = '';

        if (fieldName === 'fullName' && !value.trim()) {
            errorMessage = 'Please enter a name.';
        } else if (fieldName === 'email' && !validateEmail(value)) {
            errorMessage = 'Please enter a valid email.';
        } else if (fieldName === 'message' && !value.trim()) {
            errorMessage = 'Message cannot be empty.';
        }
        if (errorMessage) {
            setNotification({ message: errorMessage, color: 'red' });
        } else {
            setNotification({ message: '', color: '' });
        }
    };

    //update form validity whenever formState changes
    useEffect(() => {
        setIsFormValid(fullName.trim() !== '' && validateEmail(email) && message.trim() !== '');
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
                    setNotification({ message: 'Email sent successfully!', color: '#ffffff' }); //change this color to match style
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

    const handleReset = (event) => {
        event.preventDefault();
        setNotification({ message: '', color: '' });
        setFormState({ fullName: '', email: '', message: '' });
        fullNameRef.current?.blur();
        emailRef.current?.blur();
        messageRef.current?.blur();
    }

    return (
        <Box id='contact' sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
            height: '100vh',
            width: '100%',
        }}>
            <Box
                sx={{
                    padding: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 2,
                    boxShadow: 10,
                    width: '60%',
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                }}
            >
                <Typography component='h5' variant='h5'>
                    Contact Me
                </Typography>
                <Box ref={formRef} component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                name='fullName'
                                required
                                fullWidth
                                value={fullName}
                                onChange={handleInputChange}
                                onBlur={() => validateField('fullName', fullName)}
                                label='Full Name'
                                inputRef={fullNameRef}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                name='email'
                                required
                                fullWidth
                                value={email}
                                onChange={handleInputChange}
                                onBlur={() => validateField('email', email)}
                                label='Email Address'
                                inputRef={emailRef}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                name='message'
                                required
                                fullWidth
                                label='Message'
                                type='text'
                                value={message}
                                onChange={handleInputChange}
                                onBlur={() => validateField('message', message)}
                                multiline minRows={4}
                                inputRef={messageRef}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} justifyContent='space-between' style={{ marginTop: 20 }}>
                        <Grid>
                            <Button
                                type='reset'
                                variant='contained'
                                onClick={handleReset}>
                                Reset
                            </Button>
                        </Grid>
                        <Grid>
                            <Button
                                type='submit'
                                variant='contained'
                                disabled={!isFormValid}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
            {notification.message && <Typography ref={notiRef} sx={{ mt: 2, color: notification.color }}>{notification.message}</Typography>}
        </Box>
    );
}