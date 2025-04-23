'use client'
import { redirect } from "next/navigation";
import { auth } from "./lib/service";

export default function HomePage() {
  const exp  = auth.isAuthenticated()
  if(!exp){
    redirect("/home");
  }else{
    redirect("/dashboard");
  }
}
