import { createMuiTheme } from '@material-ui/core/styles';
const font1 =  "'Alfa Slab One', cursive";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffcc',
    },
    secondary: {
      main: '#000000',
    },
  },
    typography: {
      TextField: {
        fontFamily: font1,
        color: '#000000'
      }
      }
});

export default theme; 