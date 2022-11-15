import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
      yellow: '#FCEF4F',
      white: "#fff",
      blue: "#0392C8",
      gray: "#D6D6D6",
      dark: "#606060"
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

export default function Example1() {
  return (
    <ThemeProvider theme={theme}> 
    
        <Box sx={{ display:'flex', minHeight: 293, justifyContent: 'flexStart',}}>
    
        <Box
        sx={{
          backgroundColor: 'background.gray',
          boxShadow: 1,
          display: 'flex',
          display: {
            xxl: 'flex',
            xl: 'flex',
            lg: 'flex',
            md: 'none',
            sm: 'none',
            xs: 'none',
          },
          width: {
            xxl: 373,
            xl: 250,
            lg: 0,
            md: 0,
            sm: 0,
          },     
        }}
      >
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.yellow',
          boxShadow: 1,
          width: {
            xxl: 560,
            xl: 586,
            lg: 586,
            md: 586,
            sm: 300,
            xs: '50vw'
          },
          p: 2
        }}
      >
       <h2 >BUILDING THE WORLD AROUND US</h2>
       <span><HorizontalRuleIcon fontSize='large'/></span>
       <p>Still othet clientshave reservedfor capital improvementprojects and will workdirectly with our Disign and Engineering team.</p>
       <a style={{backgroundColor: '#606060', color: "#fff", padding: 10, fontSize: 15}}>READ MORE</a>
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.gray',  
          boxShadow: 1,
          width: {
            xxl: 263,
            xl: 250,
            lg: 0,
          },
          p: 2,
        }}
      >
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.white',
          width: {
            xxl: 263,
            xl: 293,
            lg: 293,
            md: 293,
            sm: 200,
            xs: '40vw'

          },
          boxShadow: 1,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ArrowRightIcon fontSize='large'/>
        <h1>01/03</h1>
        <ArrowLeftIcon fontSize='large'/>
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.dark',
          width: {
            xxl: 373,
            xl: 250,
            lg: 0,
          },
          boxShadow: 1,
          
        }}
      ></Box>
      
      </Box>
      
    </ThemeProvider>
  );
}