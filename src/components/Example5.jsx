import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import SearchIcon from '@mui/icons-material/Search';

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

export default function Example5() {
  return (
    <ThemeProvider theme={theme}> 
    
        <Box sx={{ 
        display:'flex', 
        minHeight: 293, 
        justifyContent: 'flex-end', 
        justifyContent: {
            xs: 'flex-start'
        },
        position: 'relative', 
         
        pl: {
            xxl: '19.5%',
            xl: '20%',
            lg: '10%',
            md: '10%',
            sm: '5%',
            xs: '5%',
         },
        backgroundColor: 'background.light',}}>
      
    
      <Box
        sx={{
          backgroundColor: 'background.yellow',
          boxShadow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: {
            xxl: 261,
            xl: 293,
            lg: 293,
            md: 293,
            sm: 200,
            xs: '25vw'
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
        <PictureAsPdfIcon fontSize='large'></PictureAsPdfIcon>
        <h3>DOWNLOAD PRICE</h3>
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.blue',
   
          boxShadow: 1,
          color: 'background.white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          width: {
            xxl: 261,
            xl: 293,
            lg: 293,
            md: 293,
            sm: 200,
            xs: '25vw'
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
        <EditLocationIcon fontSize='large'></EditLocationIcon>
        <h3>CONTACT US</h3>
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.dark',
          flexGrow: 3,
          boxShadow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'spaceBetween',
          justifyContent: 'center',
          width: 293,
          width: {
            xxl: 293,
            xl: 293,
            lg: 293,
            md: 293,
            sm: 200,
            xs: '45vw'
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
        <h3 style={{textDecoration: 'underline'}}>What you are looking for<SearchIcon fontSize='large' sx={{ml: 10}}/></h3>
      </Box>
      </Box>
      
    </ThemeProvider>
  );
}