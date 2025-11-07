"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Button from "./Button"

// Navigation bar component on the top of the page

export default function NavBar({ className }) {
  const scrollToMain = () => {
    const el = document.getElementById("main")
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div
      className={`flex justify-between w-full p-4 bg-primary drop-shadow-md/50 font-commissioner ${className}`}
    >
      <Link href="/">
        <Image
          src={"/codebility-white.svg"}
          width={100}
          height={23}
          alt={"codeability logo"}
          className="h-[23px] w-[100px] lg:h-[40px] lg:w-[150px]"
        />
      </Link>
      <div className="flex justify-end items-center gap-5">
        <Link href="https://www.codebility.tech" target="_blank" className="text-background">
          About Us
        </Link>
        <Button text="Get Started" onClick={scrollToMain} />
      </div>
    </div>
  )
}
