import Example4 from './Example4';
import Example3 from './Example3';
import { Box, ThemeProvider, createTheme } from '@mui/system';

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
function Main1() {
    return(
        <ThemeProvider theme={theme}>
            <Box sx={{
             backgroundColor: 'background.light',
             justifyContent: 'center',                        
             pl: '20%',
             pl: {
                xxl: '19.5%',
                xl: '20%',
                lg: '10%',
                md: '10%',
                sm: '5%',
                xs: '5%',
             },
             pr: '20%',
             pr: {
                xxl: '19.5%',
                xl: '20%',
                lg: '10%',
                md: '10%',
                sm: '5%',
                xs: '5%',
             }, 
             }}>
            <Example3></Example3>
            <Example4></Example4>
           
            </Box>
         
        </ThemeProvider>

    )
}

export default Main1;


