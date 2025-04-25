export type NavbarItem = {
  id: number;
  text: string;
  url: string;
};

export const navbarItems: NavbarItem[] = [
  {
    id: 1,
    text: "shop",
    url: "/shop",
  },
  {
    id: 2,
    text: "Winter Holiday Sale",
    url: "/winter-holiday-gift-sale-2024",
  },
  {
    id: 3,
    text: "How it works",
    url: "/how-it-works",
  },
  {
    id: 4,
    text: "Refer & Earn",
    url: "/refer-and-earn",
  },
  {
    id: 5,
    text: "Merchant Solution",
    url: "/merchant-solution",
  },
];

export const footer: NavbarItem[] = [
  {
    id: 1,
    text: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    id: 2,
    text: "Terms of Condition",
    url: "/terms-of-Condition",
  },
  {
    id: 3,
    text: "Help Center",
    url: "/help-center",
  },
  {
    id: 4,
    text: "Contact Us",
    url: "/contact-us",
  },
];
