import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6DC73D' // dark green
        },
        secondary: {
            main: '#f0e669' // yellow
        },
        success: {
            main: '#a7e387' // green
        }
    },
});

export default theme;