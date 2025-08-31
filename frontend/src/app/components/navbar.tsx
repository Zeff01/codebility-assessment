import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

import { createTheme, ThemeProvider } from "flowbite-react";

const navbarTheme = createTheme({
  navbar: {
    root: {
      base: "!bg-[#fffbe8]",
    },
    brand: {
      base: "text-3xl font-bold text-[#fa5901]",
    },
    link: {
      base: "!text-[#fa5901]",
      active: {
        on: "!bg-[#fa5901] !text-white font-bold md:!bg-transparent md:!underline md:!text-[#fa5901]",
        off: "",
      },
    },
  },
});

function NavbarComponent() {
  return (
    <ThemeProvider theme={navbarTheme}>
      <Navbar fluid>
        <NavbarBrand>
          <span>Dishly</span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink active>Home</NavbarLink>
          <NavbarLink>Recipes</NavbarLink>
          <NavbarLink>Categories</NavbarLink>
          <NavbarLink>About</NavbarLink>
          <NavbarLink>Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </ThemeProvider>
  );
}

export default NavbarComponent;
