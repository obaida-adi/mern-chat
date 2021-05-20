import { Container, Typography, IconButton } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import nameLogo from '../assets/images/name-logo.svg';

const Footer = () => {
    
    return (
        <Container style={{ textAlign: 'center', marginTop: '2rem'}}>
            <Typography variant='body1'>Designed by O'Baida Adi.</Typography>
            <Container style={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton color="primary" size="medium" onClick={() => window.open('https://obaida.netlify.app/')} aria-label="portfolio">
                    <LanguageIcon />
                </IconButton>
                <IconButton color="primary" size="medium" onClick={() => window.open('https://github.com/obaida-adi')} aria-label="github">
                    <GitHubIcon />
                </IconButton>
            </Container>
            <img src={nameLogo} style={{ width: '2rem', marginTop: '1rem' }} alt="name logo"/>
        </Container>
    );
}

export default Footer;