import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StarIcon from '@mui/icons-material/Star';
import BoltIcon from '@mui/icons-material/Bolt';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import MinimizeIcon from '@mui/icons-material/Minimize';

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
        orange: "#FCB523",
        lightYel: '#FFF5B7'
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

export default function Example7() {
  return (
    <ThemeProvider theme={theme}> 
    
        <Box sx={{ 
            display:'flex', 
            minHeight: 293, 
            }}>
      
    
      <Box
        sx={{
          backgroundColor: 'background.lightYel',
          boxShadow: 1,
          width: {
            xxl: 604,
            xl: 586,
            lg: 500,
            md: 400,
            sm: 300,
            xs: '50vw'
          },
          height: {
            xxl: 261,
            xl: 293,
            lg: 293,
            md: 393,
            sm: 393,
            xs: 493
          },
          p: 2
        }}
      >
        <AccountBoxIcon/>
        <h2>Tony SH. Schults</h2>
        <StarIcon sx={{color: 'background.orange'}}/>
        <StarIcon sx={{color: 'background.orange'}}/>
        <StarIcon sx={{color: 'background.orange'}}/>
        <StarIcon sx={{color: 'background.orange'}}/>
        <StarIcon sx={{color: 'background.orange'}}/>
        <p style={{color: '#919191'}}>When selecting DMCS as the design-build team, clients benefit in terms of efficienly and continuity that translate into cost savings and optimized schedules. Contact us today and see how DMCS can best serve you from</p>
        <span><MinimizeIcon fontSize='large' sx={{color: 'background.gray'}}/><MinimizeIcon fontSize='large'/></span>
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.white',
          width: {
            xxl: 283,
            xl: 293,
            lg: 200,
            md: 200,
            sm: 150,
            xs: '20vw'
          },      
          height: {
            xxl: 261,
            xl: 293,
            lg: 293,
            md: 393,
            sm: 393,
            xs: 493
          }, 
          p: 2,
          boxShadow: 1,
          color: 'background.dark',
        }}
      >
        <a style={{display: 'flex', backgroundColor: '#FCEF4F', width: '30%',  justifyContent: 'center', padding: 8}}>
            <BoltIcon fontSize='large'/>
        </a>
        <h1>55 000</h1>
        <p style={{color: '#919191',}}>Expert Witness</p>
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.gray',
          width: {
            xxl: 283,
            xl: 293,
            lg: 200,
            md: 200,
            sm: 150,
            xs: '20vw'
          },
          height: {
            xxl: 261,
            xl: 293,
            lg: 293,
            md: 393,
            sm: 393,
            xs: 493
          },
          p: 2,
          boxShadow: 1,
          color: 'background.dark',
        }}
      >
        <a style={{
            display: 'flex', 
            backgroundColor: '#FCEF4F', 
            width: '30%',  
            justifyContent: 'center', 
            padding: 8
            }}>
            <InvertColorsIcon fontSize='large'/>
        </a>
        <h1>124 600</h1>
        <p style={{color: '#919191'}}>Construction</p> 
      </Box>
      </Box>
      
    </ThemeProvider>
  );
}