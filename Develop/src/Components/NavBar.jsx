import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Button from '@mui/material/Button';

export default function NavBar() {

return (
    <nav id='navigation'>
      <ul
        style={{
          display: 'flex',
          rotate: '-90deg',
          position: 'fixed',
          top: '20 rem',
          transform: 'translateY(50%)',
          listStyleType: 'none',
          padding: '0',
          transformOrigin: 'left', //need to put list in reverse order
        }}
      >
        <li>
          <Button>
            <ScrollLink
              to='contact'
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              Contact Me
            </ScrollLink>
          </Button>
        </li>
        <li>
          <Button>
            <ScrollLink
              to='projects'
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              About
            </ScrollLink>
          </Button>
        </li>
        <li>
          <Button>
            <ScrollLink
              to='about'
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              About
            </ScrollLink>
          </Button>
        </li>
      </ul>
    </nav>
  );
};