import { ChakraProvider } from "@chakra-ui/react";
import Main from "./components/Main";
import "./styles/globals.css";
import {theme} from "./styles/theme"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
}

export default App;
