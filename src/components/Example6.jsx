import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StarIcon from '@mui/icons-material/Star';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
        yellow: '#FCEF4F',
        white: "#fff",
        blue: "#0392C8",
        gray: "#D6D6D6",
        dark: "#606060",
        light: "#EEEEEE",
        orange: "#FCB523"
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

export default function Example6() {
  return (
    <ThemeProvider theme={theme}> 
    
        <Box sx={{ 
            display:'flex',  
            minHeight: 293, 
            justifyContent: 'center', 
            }}>
      
    
      <Box
        sx={{
          backgroundColor: 'background.white',
          boxShadow: 1,
          width: {
            xxl: 588,
            xl: 586,
            lg: 500,
            md: 400,
            sm: 300,
            xs: '50vw'
          },
          p: 2,
        }}
      >
        <AccountBoxIcon/>
        <h2>Martin H. Jhonsons</h2>
        <StarIcon sx={{color: 'background.orange'}}/>
        <StarIcon sx={{color: 'background.orange'}}/>
        <StarIcon sx={{color: 'background.orange'}}/>
        <StarIcon sx={{color: 'background.orange'}}/>
        <StarIcon sx={{color: 'background.orange'}}/>
        <p style={{color: '#919191'}}>Together, we`ll couple our knowledge, expertise, and innovative capabillities with your astute knowledge of your businnes-to maximize and optimize results. This is all complished in a number of ways.</p>
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.gray',
          width: {
            xxl: 588,
            xl: 586,
            lg: 500,
            md: 400,
            sm: 300,
            xs: '50vw'
          },
          p: 2,
          boxShadow: 1,
          color: 'background.dark',
        }}
      >
        <h2>YOUR BUILDING IS IN GOOD HANDS</h2>
        <span><HorizontalRuleIcon fontSize='large'/></span>
        <p>Our mission is to provide the hightest level of service for our client-partners from concept trough construction.</p>
        <a style={{backgroundColor: '#606060', color: "#fff", padding: 10, fontSize: 15}}>ABOUT COMPANY</a>
      </Box>
      </Box>
      
    </ThemeProvider>
  );
}