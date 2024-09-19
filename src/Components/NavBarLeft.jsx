import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

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
    left: '2rem',
    top: '70%', // adjust this number to center
    transform: 'translateY(-50%)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    transform: 'rotate(-90deg)', // make list in reverse order
    transformOrigin: 'left',
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'row',
    padding: '0',
    margin: '0',
  },
  arrowButton: {
    position: 'fixed',
    bottom: '2rem',
    left: '1rem',
    zIndex: 100,
  },
  fab: {
    background: 'transparent',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#000000',
  }
  },
};

const navItems = [
  { name: 'Contact Me', target: 'contact' },
  { name: 'Projects', target: 'projects' },
  { name: 'About', target: 'about' },
  { name: 'Home', target: 'home' },
];

export default function NavBarLeft() {
  return (
    <nav id='navigation'>
      <div style={styles.container}>
        <ul style={styles.items}>
          {navItems.map((item, index) => (
            <li key={index}>
              <Button sx={{color: '#ffffff'}}>
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
      <Box style={styles.arrowButton}>
        <StyledTooltip title='Back to Top' placement='left' arrow>
          <Fab
            aria-label='Back to Top'
            sx={styles.fab}
          >
            <ScrollLink
              to='home'
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
};