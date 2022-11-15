import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

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
    
        <Box sx={{ 
        display:'flex', 
        height: 293, 
        justifyContent: 'flexStart', 
        top: 200,  
        }}>
      
        <Box
        sx={{
          backgroundColor: 'background.gray',
          width: 373,
          width: {
            xxl: 373,
            xl: 250,
            lg: 0,
            md: 0,
            sm: 0,
          },   
          boxShadow: 1,
          
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: 'background.gray',
          boxShadow: 1,
          width: 586,
          width: {
            xxl: 586,
            xl: 400,
            lg: 0,
            md: 0,
            sm: 0,
          },
        }}
      >
       
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.blue',
          width: {
            xxl: 293,
            xl: 900,
            lg: 900,
            md: 900,
            sm: '100vw',
            xs: '100vw'

          },
          boxShadow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'background.white',
        }}
      >
        <PlayCircleIcon fontSize='large'></PlayCircleIcon>
        <h3>COMPANY VIDEO</h3>
      </Box>
     
      <Box
        sx={{
          backgroundColor: 'background.dark',
          boxShadow: 1,
          width: {
            xxl: 293,
            xl: 250,
            lg: 0,
          },
        }}
      ></Box>
          <Box
        sx={{
          backgroundColor: 'background.dark',
          boxShadow: 1,
          width: {
            xxl: 373,
            xl: 250,
            lg: 0,
          },
        }}
      ></Box>
      </Box>
      
    </ThemeProvider>
  );
}