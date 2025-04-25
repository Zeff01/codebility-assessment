import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { IconType } from "react-icons";

export type SocialLink = {
  id: number;
  url: string;
  icon: IconType;
};

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    url: "https://www.instagram.com",
    icon: FaInstagram,
  },
  {
    id: 2,
    url: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    id: 3,
    url: "https://www.facebook.com",
    icon: FaFacebookF,
  },
  {
    id: 4,
    url: "https://www.youtube.com",
    icon: FaYoutube,
  },
  {
    id: 5,
    url: "https://www.linkedin.com/company",
    icon: FaLinkedinIn,
  },
];
