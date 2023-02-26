import { ChakraProvider } from "@chakra-ui/react";
import Main from "./components/Main";
import "./styles/globals.css";

function App() {
  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  );
}

export default App;
