"use client";
import Link from "next/link";

export default function Button({ href, children, className = "" }) {
  return (
    <>
      <Link href={href} className={`${className}`}>
        {children}
      </Link>
    </>
  );
}
