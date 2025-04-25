import Link from "next/link";
import React from "react";
import { NavbarItem } from "../data/data_NavLink";

const NavLink = (props: { navbarItems: NavbarItem[] }) => {
  return (
    <>
      {props.navbarItems.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          className=" font-semibold hover:text-[#211a29] "
        >
          {item.text}
        </Link>
      ))}
    </>
  );
};

export default NavLink;
