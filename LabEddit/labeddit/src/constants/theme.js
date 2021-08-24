import { createTheme} from '@material-ui/core/styles';
import { primaryColor, secundaryColor } from './colors';


const theme = createTheme({
    pallete: {
        primary : {
            main: primaryColor,
            contrastText: "white"
        },
        text:{
            primary: secundaryColor
        }
},
});

export default theme