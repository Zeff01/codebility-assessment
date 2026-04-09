export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationProps {
  links?: NavLink[];
  logo?: string;
}
