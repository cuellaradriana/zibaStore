import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Zibá Store"} />
    </ChakraProvider>
  );
};

export default App;
