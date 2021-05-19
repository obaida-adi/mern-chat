import logo from '../assets/images/logo.png';

const Logo = (props) => {
    const width = props.width;

    return (
        <img src={ logo } alt="ping logo" style={{ width }}></img>
    )
}

export default Logo;