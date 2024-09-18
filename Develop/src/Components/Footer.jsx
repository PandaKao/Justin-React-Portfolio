const style = {
    display: 'flex',
    marginTop: '2rem',
    marginBottom: '0.5rem',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white'
}

export default function Footer() {
    return (
        <footer style={style}>
            Created by Justin Kao. Built with React and Material UI.
        </footer>
    )
}