import { Container, Typography } from '@material-ui/core';
import nameLogo from '../assets/images/name-logo.png';

const Footer = () => {
    return (
        <Container style={{ textAlign: 'center', marginTop: '2rem'}}>
            <Typography variant='body1'>Designed by O'Baida Adi.</Typography>
            <img src={nameLogo} style={{ width: '1.5rem', marginTop: '1rem' }} alt="name logo"/>
        </Container>
    );
}

export default Footer;