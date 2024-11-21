import React from 'react';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const socialIcons = [
    { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/PandaKao' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/justin-kao-90099a322/' },
    { icon: <SaveAltIcon />, label: 'Resume', href: 'https://drive.google.com/file/d/1wzLswCMm76uTdHGZrzvezPqDfk59GxHK/view?usp=sharing' },
];

const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

const styles = {
    container: {
        position: 'fixed',
        right: '1rem', // Align the icons to the right side of the screen
        top: '50%', // Adjust this value to vertically center the icons
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    fab: {
        marginTop: '15px',
        background: 'transparent',
        color: '#ffffff',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
        '&:hover': {
            backgroundColor: '#000000',
        },
        width: '3rem',
        height: '3rem',
    },
};

export default function RightSocial() {
    return (
        <Box style={styles.container}>
            {socialIcons.map(({ icon, label, href }, index) => (
                <StyledTooltip
                    key={index}
                    title={label}
                    placement="left"
                    arrow
                >
                    <Fab
                        aria-label={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={styles.fab}
                    >
                        {icon}
                    </Fab>
                </StyledTooltip>
            ))}
        </Box>
    );
}
