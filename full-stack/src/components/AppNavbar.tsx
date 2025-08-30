import {
  IconLogout,
  IconSwitchHorizontal,
  IconShoppingBag,
  IconShoppingCart,
} from "@tabler/icons-react";
import classes from "./AppNavbar.module.css";
import { AuthUserInfo } from "./AuthUserInfo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  { link: "/", label: "Products", icon: IconShoppingBag },
  { link: "/cart", label: "Cart", icon: IconShoppingCart },
];

export default function AppNavbar() {
  const pathname = usePathname();
  const links = data.map((item) => (
    <Link
      href={item.link}
      className={classes.link}
      data-active={item.label === pathname || undefined}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));
  return (
    <>
      <div className={classes.navbarMain}>
        <div className={classes.header}>
          <AuthUserInfo />
        </div>
        {links}
      </div>
      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </>
  );
}
