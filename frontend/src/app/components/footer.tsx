import { createTheme, Footer, FooterCopyright, FooterLink, FooterLinkGroup, ThemeProvider } from "flowbite-react";

function FooterComponent() {
  const footerTheme = createTheme({
    footer: {
      root: {
        base: "!bg-[#fffbe8] rounded-none",
      },
      copyright: {
        base: "!text-[#fa5901] font-semibold",
      },
      groupLink: {
        link: {
          base: "!text-[#fa5901] font-semibold",
        },
      },
    },
  });
  return (
    <ThemeProvider theme={footerTheme}>
      <Footer container>
        <FooterCopyright by="Dishly" year={2025} />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
    </ThemeProvider>
  );
}

export default FooterComponent;
