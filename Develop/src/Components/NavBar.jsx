import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Button from '@mui/material/Button';

const styles = {
  container: {
    position: 'fixed',
    left: '2rem',
    top: '65%', //adjust this number to center
    transform: 'translateY(-50%)',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    transform: 'rotate(-90deg)', //make list in reverse order
    transformOrigin: 'left',
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'row',
    padding: '0',
    margin: '0',
  }
}

export default function NavBar() {
  return (
    <nav id='navigation'>
      <div style={styles.container}>
        <ul
          style={styles.item}
        >
          <li>
            <Button>
              <ScrollLink
                to='contact'
                spy={true}
                smooth={true}
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
                duration={500}
              >
                Projects
              </ScrollLink>
            </Button>
          </li>
          <li>
            <Button>
              <ScrollLink
                to='about'
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </ScrollLink>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};