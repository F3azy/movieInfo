import "./styles/globals.css";
import { theme } from "./styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ImageColorProvider from "./context/ImageColorContext";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ImageColorProvider>
        <BrowserRouter>
          <Routes>
            <Route path={":title?"} element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ImageColorProvider>
    </ChakraProvider>
  );
}

export default App;
