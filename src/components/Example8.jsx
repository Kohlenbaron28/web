import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import MinimizeIcon from '@mui/icons-material/Minimize';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

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

export default function Example8() {
  return (
    <ThemeProvider theme={theme}> 
    
        <Box sx={{ 
            display:'flex', 
            minHeight: 293, 
            top: 200,
            wordBreak: 'break-all'
            }}>
      
      <Box
        sx={{
          color: 'background.white',
          backgroundColor: 'background.blue',
          width: 293,
          width: {
            xxl: 293,
            xl: 293,
            lg: 200,
            md: 200,
            sm: 200,
            xs: '15vw'
          },
          p: 2,
          boxShadow: 1,
          
        }}
      >
       <h2>NEWS</h2>
       <div>
       <h6 style={{color: '#8CDEFC'}}>12 february, 2015</h6>
       <h4>Project Disign and Engineering Services</h4>
       </div>
       <h6 style={{color: '#8CDEFC'}}>23 comments</h6>
       <span>
        <MinimizeIcon fontSize='medium' sx={{color: '#fff'}}/>
        <MinimizeIcon fontSize='medium' sx={{color: '#8CDEFC'}}/>
        <MinimizeIcon fontSize='medium' sx={{color: '#8CDEFC'}}/>
        </span>
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.white',
          boxShadow: 1,
          width: 293,
          width: {
            xxl: 293,
            xl: 293,
            lg: 200,
            md: 200,
            sm: 200,
            xs: '15vw'
          },
          p: 2
        }}
      >
        <AccountBoxIcon/>
        <h2>David Mc. Adams</h2>
        <StarIcon sx={{color: 'background.orange'}}/>
        <StarIcon sx={{color: 'background.orange'}}/>
        <StarIcon sx={{color: 'background.orange'}}/>
        <StarIcon sx={{color: 'background.orange'}}/>
        <StarIcon sx={{color: 'background.orange'}}/>
        <p style={{color: '#919191'}}>In most urban areas, construction has alredy built existing structures, many having been standing for decades.</p>
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.gray',
          width: 293,
          width: {
            xxl: 293,
            xl: 293,
            lg: 200,
            md: 150,
            sm: 100,
            xs: '15vw'
          },
          boxShadow: 1,
          p: 2,
          color: 'background.dark'
        }}
      >
        <div style={{display: 'flex', backgroundColor: '#FCEF4F', width: '30%',  justifyContent: 'center', padding: 8}}><SettingsIcon/></div>
        <h1>18 000</h1>
        <p style={{color: '#919191'}}>Procurement</p>
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.white',
          width: 293,
          width: {
            xxl: 293,
            xl: 293,
            lg: 200,
            md: 150,
            sm: 100,
            xs: '15vw'
          },
          p: 2,
          boxShadow: 1,
          color: 'background.dark'
        }}
      >
         <a style={{display: 'flex', backgroundColor: '#FCEF4F', width: '30%',  justifyContent: 'center', padding: 8}}><EmojiObjectsIcon/></a>
        <h1>78 150</h1>
        <p style={{color: '#919191'}}>Project Managments</p>
      </Box>
      </Box>
      
    </ThemeProvider>
  );
}