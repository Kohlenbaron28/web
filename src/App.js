import './App.css';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import Header from './components/Header';

import Main from './components/Main';
import Main1 from './components/Main1';
import Main2 from './components/Main2';
import Example5 from './components/Example5';


function App() {

  return (
    
   <Box sx={{overflow: 'hidden'}}>   
   <Header/>
 
   <Main></Main>
   <Main1></Main1>
   <Example5></Example5>
   <Main2></Main2>
  

   </Box>
   
  );
}

export default App;
