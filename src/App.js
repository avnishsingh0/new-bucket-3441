import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar';
import MainRouter from './Pages/MainRouter';

function App() {
  return (
    <Box className="App">
      <Navbar/>
      <MainRouter/>
    </Box>
  );
}

export default App;
