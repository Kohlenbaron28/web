import * as React from 'react';
import { Grid } from '@mui/material';
import { Box, ThemeProvider, createTheme } from '@mui/system';
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

export default function Example3() {
  return (
    <ThemeProvider theme={theme}> 
    
        <Box sx={{ 
        display:'flex',  
        minHeight: 293,        
        justifyContent: 'flexStart',  
        }}>
      
    
      <Box
        sx={{
          backgroundColor: 'background.white',
          boxShadow: 1,
          width: {
            xxl: 294,
            xl: 293,
            lg: 293,
            md: 293,
            sm: 293,
            xs: '50vw'
          },
          height: {
            xxl: 261,
            xl: 293,
            lg: 293,
            md: 393,
            sm: 393,
            xs: 393
          },
          p: 2
        }}
      >
        <h2>OUR SERVICES</h2>
        <p><HorizontalRuleIcon fontSize='large'/></p>
        <p>Our mission is to provide the highest levelof service for our client-partners from concept through construction.</p>
      </Box>
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
            xxl: 294,
            xl: 293,
            lg: 293,
            md: 0,
            sm: 0

          },
          height: {
            xxl: 261,
            xl: 293,
            lg: 293,
            md: 0,
            sm: 0,
            xs: 0
          },
       
          p: 2
        }}
      >
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.white',
          boxShadow: 1,
          width: {
            xxl: 294,
            xl: 293,
            lg: 293,
            md: 293,
            sm: 293,
            xs: '50vw'
          },
          height: {
            xxl: 261,
            xl: 293,
            lg: 293,
            md: 393,
            sm: 393,
            xs: 393
          },
          p: 2,
          border: 'solid 10 transparent',
          borderRightColor: '#FFF',
        }}
      >
        <h3>General Contracting</h3>
        <span><HorizontalRuleIcon fontSize='large'/></span>
        <p>This allows the Design and Engineeringteam to originate drawings, specifications, structural calculations, details and scopes of work that deliver exactly what the client had intended to achieve.</p>
      </Box>
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
            xxl: 294,
            xl: 293,
            lg: 293,
            md: 0,
            sm: 0,
            xs: 0
          },
          height: {
            xxl: 261,
            xl: 293,
            lg: 293,
            md: 293,
            sm: 200,
            xs: '20vw'
          },
          p: 2
        }}
      >
      </Box>
      </Box>
      
    </ThemeProvider>
  );
}