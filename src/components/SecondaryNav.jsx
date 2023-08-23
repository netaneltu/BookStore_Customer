import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  background,
  Flex,
} from "@chakra-ui/react";
import allCategoris from "../hooks/allCategoris";

const SecondaryNav = () => {
  const categoriesArray = allCategoris();

  const [openMenu, setopenMenu] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [categories, setCategoris] = useState(allCategoris());

  const handleMouseEnter = (e) => {
    setMenuIsOpen(true);

    setopenMenu(e.target.name);
  };

  const handleMouseLeave = (e) => {
    setMenuIsOpen(false);
    setopenMenu("");
  };

  return (
    <>
      {" "}
      <Flex
        as="nav"
        align="center"
        justifyContent="center"
        gap={5}
        padding={4}
        bg="white"
        color="black"
        display={["none", "flex", "flex"]}
        // direction={["row-reverse", "row", "row"]}
        mt={[20, 0, 0]}
      >
        {categoriesArray.map((cat) => {
          console.log(cat);
          return (
            <Menu>
              <MenuButton>{cat.category_name}</MenuButton>
              <MenuList>
                {cat.subcategories.map((c)=>{
                  return(
                    <MenuItem>{c.category_name}</MenuItem>
                  )
                })}
             
              
              </MenuList>
            </Menu>
          );
        })}

        {/* <Flex
        as="nav"
        align="center"
        justifyContent="center"
        gap={5}
        padding={4}
        bg="white"
        color="black"
        display={["none", "flex", "flex"]}
        direction={["row-reverse", "row", "row"]}
        mt={[20, 0, 0]}
      >

      
        <Menu
          closeOnBlur="true"
          isOpen={
            openMenu == "firstmenu" ? true : menuIsOpen == true ? true : false
          }
        >
          <MenuButton
            id="firstmenu"
            name="firstmenu"
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

            bg="white"
          >
            תנ"ך
          </MenuButton>

          <MenuList
            name="firstmenu"
            onMouseOver={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            <MenuGroup title="תורה">
              <MenuItem>חמישה חומשי תורה </MenuItem>
              <MenuItem>מקראות גדולות </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="נביאים כתובים"></MenuGroup>
          </MenuList>
        </Menu>
        <Menu
          isOpen={
            openMenu == "secondmenu" ? true : menuIsOpen == true ? true : false
          }
        >
          <MenuButton
            id="secondmenu"
            name="secondmenu"
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            bg="white"
          >
            חז"ל
          </MenuButton>

          <MenuList
            name="secondmenu"
            onMouseOver={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            <MenuGroup title="מדרשים">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="זוהר">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </>
  ); */}
      </Flex>
    </>
  );
};

export default SecondaryNav;
