import Example6 from './Example6';
import Example7 from './Example7';
import Example8 from './Example8';
import Example9 from './Example9';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import Footer from './Footer';

const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
        yellow: '#FCEF4F',
        white: "#fff",
        blue: "#0392C8",
        gray: "#D6D6D6",
        dark: "#606060",
        light: "#EEEEEE"
      },
    },
    breakpoints: {
      values: {
        xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536,
        xxl: 1800 // large screens
      }
    }
  });
function Main2() {
    return(
        <ThemeProvider theme={theme}>
            <Box sx={{
            backgroundColor: 'background.light',
            justifyContent: 'center',          
            pl: {
               xxl: '19.5%',
               xl: '20%',
               lg: '10%',
               md: '10%',
               sm: '5%',
               xs: '5%',
            },
            pr: {
               xxl: '19.5%',
               xl: '20%',
               lg: '10%',
               md: '10%',
               sm: '5%',
               xs: '5%',
            },   
            }}>
            <Example6></Example6>
            <Example7></Example7>
            <Example8></Example8>
            <Example9></Example9>
            <Footer></Footer>
            </Box>
         
        </ThemeProvider>

    )
}

export default Main2;


