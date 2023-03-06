import React from "react";
import CartWidget from "./CartWidget";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <h2 className="brand">Zibá Store</h2>
      <div className="categoriesMenu">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Categorías</MenuButton>
          <MenuList>
            <MenuItem>Scrunchies</MenuItem>
            <MenuItem>Turbantes</MenuItem>
            <MenuItem>Lazos</MenuItem>
            <MenuItem>Maxi lazos</MenuItem>
            <MenuItem>Vinchas</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <CartWidget className="cart" />
    </div>
  );
};

export default NavBar;
