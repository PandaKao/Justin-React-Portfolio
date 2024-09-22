import React, { useEffect, useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';

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
        left: '-10rem',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    items: {
        transform: 'rotate(-90deg)',
        transformOrigin: 'center',
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'row',
        padding: '0',
        margin: '0',
    },
    arrowButton: {
        position: 'fixed',
        bottom: '1rem',
        left: '1rem',
        zIndex: 100,
    },
    menuButton: {
        position: 'fixed',
        top: '1rem',
        left: '1rem',
        zIndex: 100,
    },
    fab: {
        background: 'transparent',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#000000',
        },
        width: '3rem',
        height: '3rem',
    },

};

const navItems = [
    { name: 'Contact Me', target: 'contact' },
    { name: 'About', target: 'about' },
    { name: 'Projects', target: 'projects' },
    { name: 'Home', target: 'home' },
];

export default function NavBarLeft() {
    const containerRef = useRef(null);
    const [openDrawer, setOpenDrawer] = useState(false);
    const isMobile = useMediaQuery('(max-width:900px)');

    useEffect(() => {
        const updatePosition = () => {
            if (containerRef.current) {
                const viewportHeight = window.innerHeight;
                const containerHeight = containerRef.current.getBoundingClientRect().height;
                const centerPosition = (viewportHeight - containerHeight) / 2;
                containerRef.current.style.top = `${centerPosition}px`;
            }
        };

        updatePosition();
        window.addEventListener('resize', updatePosition);
        return () => {
            window.removeEventListener('resize', updatePosition);
        };
    }, []);

    return (
        <nav id="navigation">
            {isMobile ? (
                <div>
                    <Box sx={styles.menuButton}>
                        <StyledTooltip title='Menu' placement='right' arrow>
                            <Fab
                                aria-label='Menu'
                                sx={styles.fab}
                                onClick={() => setOpenDrawer(true)}
                            >
                                <MenuIcon />
                            </Fab>
                        </StyledTooltip>
                    </Box>

                    <Drawer
                        anchor="left"
                        open={openDrawer}
                        onClose={() => setOpenDrawer(false)}
                        sx={{
                            '& .MuiDrawer-paper': {
                                width: '30%',
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                padding: '1.5rem',
                            },
                        }}
                    >
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            {navItems.slice().reverse().map((item, index) => (
                                <li key={index}>
                                    <Button
                                        sx={{ color: '#ffffff' }}
                                        onClick={() => setOpenDrawer(false)}
                                    >
                                        <ScrollLink
                                            to={item.target}
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                        >
                                            {item.name}
                                        </ScrollLink>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </Drawer>
                </div>
            ) : (
                <div ref={containerRef} style={styles.container}>
                    <ul style={styles.items}>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Button sx={{ color: '#ffffff' }}>
                                    <ScrollLink
                                        to={item.target}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        {item.name}
                                    </ScrollLink>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <Box style={styles.arrowButton}>
                <StyledTooltip title="Back to Top" placement="left" arrow>
                    <Fab aria-label="Back to Top" sx={styles.fab}>
                        <ScrollLink
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <KeyboardDoubleArrowUpOutlinedIcon />
                        </ScrollLink>
                    </Fab>
                </StyledTooltip>
            </Box>
        </nav>
    );
}