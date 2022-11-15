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


export default function Example4() {
  return (
    <ThemeProvider theme={theme}> 
    
        <Box sx={{ 
            display:'flex', 
            minHeight: 293, 
            justifyContent: 'center', 
            top: 200,  }}>
      
    
      <Box
        sx={{
          backgroundColor: 'background.white',
          boxShadow: 1,
          width: 293,
          width: {
            xxl: 293,
            xl: 293,
            lg: 293,
            md: 293,
            sm: 200,
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ArrowRightIcon fontSize='large'/>
        <h1>03/06</h1>
        <ArrowLeftIcon fontSize='large'/>
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.white',
          boxShadow: 1,
          width: 293,
          width: {
            xxl: 293,
            xl: 293,
            lg: 293,
            md: 293,
            sm: 200,
            xs: '35vw'
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
        }}
      >
        <h3>Project design and engineering</h3>
        <span><HorizontalRuleIcon fontSize='large'/></span>
        <p>Trough Stage-Gate, Design and Engineering methodology, DMCS ensure client-partners realize cleary defined project objective to achieve intended results.</p>
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
          width: 293,
          width: {
            xxl: 293,
            xl: 250,
            lg: 200,
            md: 0,
            sm: 0
          },
          p: 2
        }}
      >
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.white',
          boxShadow: 1,
          width: 293,
          width: {
            xxl: 293,
            xl: 293,
            lg: 293,
            md: 293,
            sm: 200,
            xs: '35vw'
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
        <h3>Capital improvement</h3>
        <span><HorizontalRuleIcon fontSize='large'/></span>
        <p>This results in scope creep and slippage of the schedule that ultimately result in additional costs to the owner.</p>
      </Box>
      </Box>
      
    </ThemeProvider>
  );
}