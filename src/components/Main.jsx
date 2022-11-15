import Example from './Example';
import Example1 from './Example1';
import { Box, ThemeProvider, createTheme } from '@mui/system';


const theme = createTheme({
    palette: {
      background: {
        gray: "#D6D6D6",
        dark: "#606060",
      },
    },
  });
function Main() {
    return(
        <ThemeProvider theme={theme}>
            <Box sx={{ 
                width: 1918,  
                }}>
            <Example></Example>
            <Example1></Example1>
            </Box>
        </ThemeProvider>

    )
}

export default Main;


