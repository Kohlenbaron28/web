import { AppBar, Container, Toolbar } from '@mui/material';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { Menu as MenuIcon, Twitter as TwitterIcon, Facebook as FacebookIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';

function Header() {
    return(
    <Box sx={{display:'flex', height: 140, }}>
        <AppBar>
        <Toolbar sx={{
            display: 'flex', 
            backgroundColor: '#D6D6D6', 
            maxWidth: '100%', 
            justifyContent: 'spaceBetween',
            }}>
            <Box
            color="inherit"
            aria-label='menu'
            sx={{
                flexBasis: '26%', 
                backgroundColor: '#D6D6D6', 
                display: 'flex',
                ml: '40%'}}>
                    <LogoDevIcon />
            </Box> 
            <Box sx={{
            backgroundColor: '#606060', 
            display: 'flex',       
            flexBasis: '35%', 
            height: 140, 
            alignItems: 'center',
            justifyContent: 'flexEnd',         
           }}>
            <Box mr={3}>
            <FacebookIcon/> 
            </Box> 
            <Box mr={3}>
            <TwitterIcon/>   
            </Box> 
            <Box mr={3}>
              <ShoppingCartIcon/>   
            </Box> 
            <Box mr={3}>
             <MenuIcon/>   
            </Box>   
            </Box> 
           </Toolbar>
           </AppBar>
           </Box>
   
 
    )
}

export default Header;