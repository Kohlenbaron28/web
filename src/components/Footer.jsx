import { Container } from "@mui/system";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import { Grid } from "@mui/material";

const theme = createTheme({
    palette: {
      background: {
        light: "#EEEEEE",
        blue: "#0392C8",
        dark: "#606060",
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

export default function Footer() {
    return(
        <ThemeProvider theme={theme}>
        <footer>
            <Box bgcolor={'background.light'}>
                <Container maxWidth='xxl' sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                  <Box>
                    <p>2015 ©️Copyright - Foundation theme by <span style={{color: "#0392C8"}}>Stylemixthemes</span></p>
                  </Box>
                  <Box sx={{
                    color: 'background.dark',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '3%'
                  }}>
                    <div>Services</div>
                    <div style={{color: "#0392C8"}}>Our Works</div>
                    <div>News & events</div>
                    <div>Work with us</div>
                    <div>F.A.Q</div>
                    <div>Contact us</div>
                    <div>Shop</div>
                  </Box>
                </Container>
            </Box>
        </footer>
        </ThemeProvider>       
    )
}