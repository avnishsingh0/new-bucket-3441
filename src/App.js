import { Box } from "@chakra-ui/react";
// import ANavbar from './Admin/ANavbar';
import "./App.css";
import Navbar from "./Components/Navbar";
import MainRouter from "./Pages/MainRouter";

function App() {
  return (
    <Box className="App">
      {/* <Navbar/> */}
      <MainRouter />
      {/* <ANavbar/> */}
    </Box>
  );
}

export default App;
