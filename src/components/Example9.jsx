import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const theme = createTheme({
    palette: {
      background: {
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

export default function Example9() {
  return (
    <ThemeProvider theme={theme}> 
    
        <Box sx={{ 
            display:'flex', 
            wordBreak: 'break-all' 
            }}>
      
      <Box sx={{}}>        
      <Box
        sx={{
          backgroundColor: 'background.white',
          boxShadow: 1,
          width: {
            xxl: 261,
            xl: 261,
            lg: 261,
            md: 240,
            sm: 200,
            xs: '30vw'
          },
          height: 586,
          height: {
            xxl: 554,
            xl: 554,
            lg: 620,
            md: 820,
            sm: 820,
            xs: 864
            
          },
          p: 2,
          justifyContent: 'flex-start',
          color: 'background.dark'
        }}
      >
        <h2 style={{color: '#606060',}}>Contemporary Villa</h2>
        <span><HorizontalRuleIcon fontSize='large'/></span>
        <p>Diversity is a buzzword often heard by managers, business tycoons, politicians, and more; but it`s much more than that. To us at DM Construction, diversity is the mame of the game.</p>
        <p>We offer diverse set of skills to all clients in all fields, but also offer a diverse group of individuals who are able to deliver those skills. From</p>
        <a style={{backgroundColor: '#FCEF4F', color: "#fff", padding: 10, fontSize: 15}}>VIEW PROJECT</a>
      </Box></Box>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
       
        }}> 
       <Box sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'noWrap', 
        }}>
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
            xxl: 261,
            xl: 293,
            lg: 293,
            md: 0,
            sm: 0,
            xs: 0
          },
          height: {
            xxl: 261,
         
          },
          p: 2,
        }}
      >
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
            xxl: 261,
            xl: 293,
            lg: 293,
            md: 0,
            sm: 0,
            xs: 0
          },
          p: 2,

          
        }}
      >
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.yellow',
          boxShadow: 1,
          width: {
            xxl: 261,
            xl: 293,
            lg: 293,
            md: 293,
            sm: 300,
            xs: '50vw'
          },

          height: {
            xxl: 261,
            xl: 293,
            lg: 293,
            md: 393,
            sm: 393,
            xs: 440
          },
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'          
        }}
      >
        <SettingsSuggestIcon fontSize='large'/>
        <h1>WORK WITH US</h1>
      </Box>
     
      </Box>
    
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'noWrap',
        }}>
        
     
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
                xxl: 261,
                xl: 293,
                lg: 293,
                md: 0,
                sm: 0,
                xs: 0
              },
              p: 2,
          }}
        >
        </Box>
        <Box
          sx={{
            backgroundColor: 'background.white',
            boxShadow: 1,
            width: {
                xxl: 261,
                xl: 293,
                lg: 293,
                md: 293,
                sm: 300,
                xs: '15vw'
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
     
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
            
          }}
        >
            <ArrowRightIcon/>
            <h1>01/09</h1>
            <ArrowLeftIcon/>
        </Box>
        <Box
          sx={{
            backgroundColor: 'background.blue',
            boxShadow: 1,
            width: {
              xxl: 261,
              xl: 293,
              lg: 200,
              md: 200,
              sm: 150,
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
            p: 2,
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#fff'
          }}
        >
            <h2 style={{alignItems: 'left',}}>SUBSCRIBE</h2>
            <HorizontalRuleIcon fontSize='large'/>
            <input type="text" placeholder='E-mail' style={{ padding: 5, width: '30%', alignItems: 'center'}}/>
        </Box>
       
        </Box>
      </Box>
      </Box> 
    </ThemeProvider>
  );
}