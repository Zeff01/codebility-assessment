"use client"
import React from "react"


// Button Component
export default function Button({ onClick, text, ...props }) {
  return (
    <div
      onClick={onClick}
      className="rounded-full w-fit cursor-pointer bg-foreground py-2 px-4"
      {...props}
    >
      <p className="font-bold text-background text-sm">{text}</p>
    </div>
  )
}
